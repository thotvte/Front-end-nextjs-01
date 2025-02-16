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

interface Category {
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
    results: Category[];
  };
}

const Category = () => {
  const { data: session, status } = useSession();
  const [categorys, setcategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [categoryToDelete, setCategorToDelete] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [actionType, setActionType] = useState<"update" | "delete" | null>(
    null
  );
  const [newCategory, setNewCategory] = useState<Category>({
    _id: "",
    name: "",
  });
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleEditClick = (category: Category) => {
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
    field: keyof Category
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
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/categories`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.statusCode === 200) {
          setcategories(response.data.data.results);
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
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/categories`,
        newCategoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const results = response.data.data.results;
      console.log("check categoryyyyyyy", response.data);

      if (newCategory) {
        setcategories((prevCategories) => [
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
          description: "Không có danh mục nào được thêm vào.",
          placement: "top",
        });
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      notification.error({
        message: "Lỗi",
        description: "Không thể thêm danh mục, vui lòng thử lại.",
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
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/categories/${currentCategory._id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setcategories((prevProducts) =>
        prevProducts.map((product) =>
          product._id === currentCategory._id
            ? { ...product, ...updateData }
            : product
        )
      );
      setShowAddModal(false);
      setCurrentCategory(null); // Đảm bảo reset lại category đang chỉnh sửa
      setIsUpdating(false); // Đảm bảo trạng thái "Đang cập nhật" được đặt lại

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
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/categories/${categoryToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setcategories((prevCategory) =>
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
    field: keyof Category
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
          Thêm Category mới
        </button>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tên danh mục</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(categorys) && categorys.length > 0 ? (
              categorys.map((category) => (
                <tr key={category._id}>
                  <td>{category.name}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <button
                      className={styles["actions-button"]}
                      onClick={() => handleEditClick(category)}
                    >
                      <EditOutlined />
                    </button>
                    {session?.user?.role === "ADMIN" && (
                      <button
                        className={`${styles["actions-button"]} ${styles["actions-delete"]}`}
                        onClick={() => handleDeleteClick(category._id)}
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
            <h2>Chỉnh sửa Category</h2>
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

export default Category;
