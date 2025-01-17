"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./admin.module.css";
import { useSession } from "next-auth/react";
import { notification } from "antd";
import { BorderTopOutlined } from "@ant-design/icons";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
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
    results: Product[];
  };
}

const AdminProduct = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState<Product[]>([]); // Initialized as an empty array
  const [loading, setLoading] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [actionType, setActionType] = useState<"update" | "delete" | null>(
    null
  );
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<Product>({
    _id: "",
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0,
  });

  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const token = session?.user?.access_token;
        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }

        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data.data.results); // Make sure it's always an array
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [session]);

  const handleAddProduct = async () => {
    const token = session?.user?.access_token;
    if (!token) {
      notification.error({
        message: "Lỗi",
        description: "Không có token, yêu cầu không thể thực hiện.",
        placement: "top",
      });
      return;
    }

    const newProductData = {
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      stockQuantity: newProduct.stockQuantity,
    };

    try {
      // Send API request to add new product
      const response = await axios.post<ApiResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products`,
        newProductData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const results = response.data.data.results;
      // Check if results is defined and has at least one item
      if (Array.isArray(results) && results.length > 0) {
        setProducts((prevProducts) => [
          ...prevProducts,
          results[0], // Safely access the first element
        ]);
        setShowAddModal(false); // Close modal after successful addition

        notification.success({
          message: "Thêm sản phẩm thành công",
          description: "Sản phẩm mới đã được thêm vào hệ thống.",
          placement: "top",
          icon: <BorderTopOutlined />,
        });
      } else {
        console.error("No products returned in response.");
        notification.error({
          message: "Lỗi",
          description: "Không có sản phẩm nào được thêm vào.",
          placement: "top",
        });
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      notification.error({
        message: "Lỗi",
        description: "Không thể thêm sản phẩm, vui lòng thử lại.",
        placement: "top",
      });
    }
  };

  const handleAddClick = () => {
    setShowAddModal(true); // Hiển thị modal thêm sản phẩm
  };

  const handleNewProductInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    const value =
      field === "price" || field === "stockQuantity"
        ? Number(e.target.value)
        : e.target.value;

    setNewProduct({ ...newProduct, [field]: value });
  };

  const handleEditClick = (product: Product) => {
    setCurrentProduct(product);
    setActionType("update");
  };

  const handleDeleteClick = (productId: string) => {
    if (session?.user?.role !== "ADMIN") {
      console.log("Bạn không có quyền xóa sản phẩm.");
      return;
    }

    setProductToDelete(productId);
    setActionType("delete");
  };

  const handleDeleteConfirm = async () => {
    if (productToDelete && session?.user?.access_token) {
      try {
        const token = session?.user?.access_token;

        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }

        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/${productToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productToDelete)
        );
        setActionType(null);

        notification.success({
          message: "Xóa sản phẩm thành công",
          description: "Sản phẩm đã được xóa khỏi hệ thống.",
          placement: "top",
          icon: <BorderTopOutlined />,
        });
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
      }
    }
  };

  const handleUpdateProduct = async () => {
    if (!currentProduct) return;

    setIsUpdating(true);
    setUpdateError(null);

    const updateData = {
      name: currentProduct.name,
      description: currentProduct.description,
      price: currentProduct.price,
      stockQuantity: currentProduct.stockQuantity,
    };

    try {
      const token = session?.user?.access_token;

      if (!token) {
        console.error("Không có token, yêu cầu không thể thực hiện.");
        return;
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/${currentProduct._id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === currentProduct._id
            ? { ...product, ...updateData }
            : product
        )
      );

      setActionType(null);
      setCurrentProduct(null);
      setIsUpdating(false);

      notification.success({
        message: "Cập nhật sản phẩm thành công",
        description: "Thông tin sản phẩm đã được cập nhật thành công.",
        placement: "top",
        icon: <BorderTopOutlined />,
      });
    } catch (error: any) {
      console.error(
        "Lỗi khi cập nhật sản phẩm:",
        error.response?.data || error.message
      );
      setUpdateError("Cập nhật sản phẩm thất bại, vui lòng thử lại.");
      setIsUpdating(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    if (currentProduct) {
      // Chuyển giá trị input thành số nếu là price hoặc stockQuantity
      const value =
        field === "price" || field === "stockQuantity"
          ? Number(e.target.value) // Chuyển đổi thành số
          : e.target.value;

      setCurrentProduct({ ...currentProduct, [field]: value });
    }
  };

  const handleCloseModal = () => {
    setActionType(null);
    setCurrentProduct(null);
  };

  if (status === "loading") {
    return <p>Đang tải...</p>;
  }

  if (!session) {
    return <p>Vui lòng đăng nhập để tiếp tục.</p>;
  }

  return (
    <div className={styles.container}>
      <h1
        className={styles.header}
        onClick={() => {
          handleAddClick();
        }}
      >
        Quản lý sản phẩm
      </h1>
      <button className={styles.addButton} onClick={handleAddClick}>
        Thêm sản phẩm mới
      </button>

      {loading ? (
        <p className={styles.loading}>Đang tải dữ liệu...</p>
      ) : !Array.isArray(products) || products.length === 0 ? (
        <p className={styles.noProducts}>Không có sản phẩm nào</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Mô tả</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stockQuantity}</td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <button
                      className={styles["actions-button"]}
                      onClick={() => handleEditClick(product)}
                    >
                      <EditOutlined />
                    </button>
                    {session?.user?.role === "ADMIN" && (
                      <button
                        className={`${styles["actions-button"]} ${styles["actions-delete"]}`}
                        onClick={() => handleDeleteClick(product._id)}
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
                  Không có sản phẩm nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {actionType === "update" && currentProduct && (
        <div className={styles.modal}>
          <h2>Chỉnh sửa sản phẩm</h2>
          {updateError && <div className={styles.error}>{updateError}</div>}
          <label>Tên:</label>
          <input
            type="text"
            value={currentProduct.name}
            onChange={(e) => handleInputChange(e, "name")}
            className={styles.input}
          />
          <label>Mô tả:</label>
          <input
            type="text"
            value={currentProduct.description}
            onChange={(e) => handleInputChange(e, "description")}
            className={styles.input}
          />
          <label>Giá:</label>
          <input
            type="number"
            value={currentProduct.price}
            onChange={(e) => handleInputChange(e, "price")}
            className={styles.input}
          />
          <label>Số lượng:</label>
          <input
            type="number"
            value={currentProduct.stockQuantity}
            onChange={(e) => handleInputChange(e, "stockQuantity")}
            className={styles.input}
          />
          <div className={styles.modalActions}>
            <button
              className={styles.updateButton}
              onClick={handleUpdateProduct}
              disabled={isUpdating}
            >
              {isUpdating ? "Đang cập nhật..." : "Cập nhật"}
            </button>
            <button className={styles.cancelButton} onClick={handleCloseModal}>
              Hủy
            </button>
          </div>
        </div>
      )}

      {actionType === "delete" && (
        <div className={styles.modal}>
          <h2>Chắc chắn xóa sản phẩm này?</h2>
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

      {showAddModal && (
        <div className={styles.modal}>
          <h2>Thêm sản phẩm mới</h2>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => handleNewProductInputChange(e, "name")}
            className={styles.input}
          />
          <label>Mô tả sản phẩm:</label>
          <input
            type="text"
            value={newProduct.description}
            onChange={(e) => handleNewProductInputChange(e, "description")}
            className={styles.input}
          />
          <label>Giá:</label>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => handleNewProductInputChange(e, "price")}
            className={styles.input}
          />
          <label>Số lượng:</label>
          <input
            type="number"
            value={newProduct.stockQuantity}
            onChange={(e) => handleNewProductInputChange(e, "stockQuantity")}
            className={styles.input}
          />
          {/* <label>URL Hình ảnh:</label>
          <input
            type="text"
            value={newProduct.image}
            onChange={(e) => handleNewProductInputChange(e, "image")}
            className={styles.input}
          /> */}
          {/* <label>Danh mục:</label>
          <input
            type="text"
            value={newProduct.category}
            onChange={(e) => handleNewProductInputChange(e, "category")}
            className={styles.input}
          /> */}
          <div className={styles.modalActions}>
            <button className={styles.updateButton} onClick={handleAddProduct}>
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
    </div>
  );
};

export default AdminProduct;
