"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import styles from "./admin.module.css";
import {
  BorderTopOutlined,
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { notification } from "antd";

interface Company {
  _id: string;
  name: string;
}

interface ApiResponse {
  statusCode: number;
  message: string;
  data: {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    };
    results: Company[];
  };
}

const Company = () => {
  const { data: session, status } = useSession();
  const [company, setcompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Company | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [categoryToDelete, setCategorToDelete] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [actionType, setActionType] = useState<"update" | "delete" | null>(
    null
  );
  const [newCategory, setNewCategory] = useState<Company>({
    _id: "",
    name: "",
  });
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleEditClick = (category: Company) => {
    setCurrentCategory(category);
    setActionType("update");
  };
  const handleDeleteClick = (productId: string) => {
    if (session?.user?.role !== "ADMIN") {
      console.log("Bạn không có quyền xóa sản phẩm.");
      return;
    }

    setCategorToDelete(productId);
    setActionType("delete");
  };

  const handleCloseModal = () => {
    setActionType(null);
    setCurrentCategory(null);
  };

  const handleNewCategoryInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Company
  ) => {
    const value = e.target.value;
    setNewCategory({ ...newCategory, [field]: value });
  };

  useEffect(() => {
    console.log("Session:", session);
    const fetchCategorys = async () => {
      setLoading(true);
      try {
        const token = session?.user?.access_token;
        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }

        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.statusCode === 200) {
          setcompanies(response.data.data.results);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorys();
  }, [session]);

  const handleAddCategory = async () => {
    const token = session?.user?.access_token;
    if (!token) {
      notification.error({
        message: "Lỗi",
        description: "Không có token, yêu cầu không thể thực hiện.",
        placement: "top",
      });
      return;
    }

    const newCategoryData = {
      name: newCategory.name,
    };

    try {
      const response = await axios.post<ApiResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies`,
        newCategoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const results = response.data.data.results;

      if (newCategory) {
        setcompanies((prevCategories) => [
          ...prevCategories, // Giữ lại tất cả các mục cũ
          newCategory, // Thêm danh mục mới vào cuối danh sách
        ]);
        setShowAddModal(false); // Close modal after successful addition
        setNewCategory({ _id: "", name: "" });

        notification.success({
          message: "Thêm sản phẩm thành công",
          description: "Danh mục mới đã được thêm vào hệ thống.",
          placement: "top",
          icon: <CheckOutlined />,
        });
      } else {
        console.error("No products returned in response.");
        notification.error({
          message: "Lỗi",
          description: "Không có Company nào được thêm vào.",
          placement: "top",
        });
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      notification.error({
        message: "Lỗi",
        description: "Không thể thêm Company, vui lòng thử lại.",
        placement: "top",
      });
    }
  };

  const handleUpdateCategory = async () => {
    if (!currentCategory) return;
    setIsUpdating(true);
    setUpdateError(null);

    const updateData = {
      name: currentCategory.name,
    };

    try {
      const token = session?.user?.access_token;

      if (!token) {
        console.error("Không có token, yêu cầu không thể thực hiện.");
        return;
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${currentCategory._id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setcompanies((prevProducts) =>
        prevProducts.map((product) =>
          product._id === currentCategory._id
            ? { ...product, ...updateData }
            : product
        )
      );
      setShowAddModal(false);
      setCurrentCategory(null);
      setIsUpdating(false);

      notification.success({
        message: "Cập nhật Category thành công",
        description: "Danh mục đã được cập nhật.",
        placement: "top",
        icon: <CheckOutlined />,
      });
    } catch (error: any) {
      console.error(
        "ERRO AFTER UPDATE CATEGORY",
        error.response?.data || error.message
      ),
        setUpdateError("Cập nhật sản phẩm thất bại, vui lòng thử lại."),
        setIsUpdating(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (categoryToDelete && session?.user?.access_token) {
      try {
        const token = session?.user?.access_token;

        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }

        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${categoryToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setcompanies((prevCategory) =>
          prevCategory.filter((category) => category._id !== categoryToDelete)
        );
        setActionType(null);

        notification.success({
          message: "Xóa Category thành công",
          description: "Category đã được xóa khỏi hệ thống.",
          placement: "top",
          icon: <CheckOutlined />,
        });
      } catch (error) {
        console.error("Lỗi khi xóa Category:", error);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Company
  ) => {
    if (currentCategory) {
      const value = e.target.value;

      setCurrentCategory({ ...currentCategory, [field]: value });
    }
  };

  return (
    <>
      <div>
        <button className={styles.addButton} onClick={handleAddClick}>
          Thêm Company mới
        </button>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tên Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(company) && company.length > 0 ? (
              company.map((company) => (
                <tr key={company._id}>
                  <td>{company.name}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <button
                      className={styles["actions-button"]}
                      onClick={() => handleEditClick(company)}
                    >
                      <EditOutlined />
                    </button>
                    {session?.user?.role === "ADMIN" && (
                      <button
                        className={`${styles["actions-button"]} ${styles["actions-delete"]}`}
                        onClick={() => handleDeleteClick(company._id)}
                      >
                        <DeleteOutlined />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className={styles.noProducts}>
                  Không có Category nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {showAddModal && (
          <div className={styles.modal}>
            <h2>Thêm Category mới</h2>
            <label>Tên Category:</label>
            <input
              type="text"
              value={newCategory.name}
              onChange={(e) => handleNewCategoryInputChange(e, "name")}
              className={styles.input}
            />
            <div className={styles.modalActions}>
              <button
                className={styles.updateButton}
                onClick={handleAddCategory}
              >
                Thêm
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setShowAddModal(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}

        {actionType === "update" && currentCategory && (
          <div className={styles.modal}>
            <h2>Chỉnh sửa Company</h2>
            {updateError && <div className={styles.error}>{updateError}</div>}
            <label>Tên:</label>
            <input
              type="text"
              value={currentCategory.name}
              onChange={(e) => handleInputChange(e, "name")}
              className={styles.input}
            />

            <div className={styles.modalActions}>
              <button
                className={styles.updateButton}
                onClick={handleUpdateCategory}
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Cập nhật"}
              </button>
              <button
                className={styles.cancelButton}
                onClick={handleCloseModal}
              >
                Hủy
              </button>
            </div>
          </div>
        )}

        {actionType === "delete" && (
          <div className={styles.modal}>
            <h2>Chắc chắn xóa Category này?</h2>
            <div className={styles.modalActions}>
              <button
                className={styles.updateButton}
                onClick={handleDeleteConfirm}
              >
                Xóa
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setActionType(null)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Company;
