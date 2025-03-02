"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styles from "./admin.module.css";
import { useSession } from "next-auth/react";
import { Button, message, notification, Select, Upload } from "antd";
import { BorderTopOutlined } from "@ant-design/icons";
import Category from "./admin.category";
import Company from "./admin.company";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  discount: number;
  image: string[];
  category: string;
  ram: string;
  storageCapacity: string;
  cpu: string;
  gpu: string;
  operatingSystem: string;
  cpuSpeed: string;
  cameraResolution: string;
  screenTechnology: string;
  screenResolution: string;
  widescreen: string;
  batteryCapacity: string;
  maximumChargingSupport: string;
  design: string;
  theLaunchTime: string;
  material: string;
  sizeAndVolume: string;
  company: string;
  color: string;
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
  const [categories, setCategories] = useState<Category[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
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
    discount: 0,
    image: [] as string[],
    category: "",
    ram: "",
    storageCapacity: "",
    cpu: "",
    gpu: "",
    operatingSystem: "",
    cpuSpeed: "",
    cameraResolution: "",
    screenTechnology: "",
    screenResolution: "",
    widescreen: "",
    batteryCapacity: "",
    maximumChargingSupport: "",
    design: "",
    theLaunchTime: "",
    material: "",
    sizeAndVolume: "",
    company: "",
    color: "",
  });
  const [fileList, setFileList] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
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
        setCategories(response.data.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };
    fetchCategories();
  }, [session]);

  useEffect(() => {
    const fetchCategories = async () => {
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
        setCompanies(response.data.data.results);
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
      }
    };
    fetchCategories();
  }, [session]);

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
        setProducts(response.data.data.results);
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

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price.toString());
    formData.append("stockQuantity", newProduct.stockQuantity.toString());
    formData.append("discount", newProduct.discount.toString());
    formData.append("category", newProduct.category);
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });
    formData.append("company", newProduct.company);
    formData.append("operatingSystem", newProduct.operatingSystem);
    formData.append("design", newProduct.design);
    formData.append("color", newProduct.color);
    formData.append("material", newProduct.material);
    formData.append("theLaunchTime", newProduct.theLaunchTime);
    formData.append("ram", newProduct.ram);
    formData.append("storageCapacity", newProduct.storageCapacity);
    formData.append("cpu", newProduct.cpu);
    formData.append("gpu", newProduct.gpu);
    formData.append("cpuSpeed", newProduct.cpuSpeed);
    formData.append("cameraResolution", newProduct.cameraResolution);
    formData.append("screenTechnology", newProduct.screenTechnology);
    formData.append("screenResolution", newProduct.screenResolution);
    formData.append("widescreen", newProduct.widescreen);
    formData.append("batteryCapacity", newProduct.batteryCapacity);
    formData.append(
      "maximumChargingSupport",
      newProduct.maximumChargingSupport
    );
    formData.append("sizeAndVolume", newProduct.sizeAndVolume);

    try {
      const response = await axios.post<ApiResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const product = response?.data?.data;

      if (product) {
        setShowAddModal(false);
        notification.success({
          message: "Thêm sản phẩm thành công",
          description: "Sản phẩm mới đã được thêm vào hệ thống.",
          placement: "top",
        });
      } else {
        notification.error({
          message: "Lỗi",
          description: "Không có sản phẩm nào được thêm vào.",
          placement: "top",
        });
      }
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Không thể thêm sản phẩm, vui lòng thử lại.",
        placement: "top",
      });
    }
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleNewProductInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    const value =
      field === "price" || field === "stockQuantity" || field === "discount"
        ? Number(e.target.value)
        : e.target.value;

    setNewProduct({ ...newProduct, [field]: value });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Product
  ) => {
    if (currentProduct) {
      console.log("chon sp ", currentProduct);
      const value =
        field === "price" || field === "stockQuantity" || field === "discount"
          ? Number(e.target.value)
          : e.target.value;

      setCurrentProduct({ ...currentProduct, [field]: value });
    }
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
    const token = session?.user?.access_token;
    if (!token) {
      notification.error({
        message: "Lỗi",
        description: "Không có token, yêu cầu không thể thực hiện.",
        placement: "top",
      });
      return;
    }

    let updatedImages = currentProduct.image;

    console.log("updatedImages", updatedImages);

    if (fileList.length > 0) {
      updatedImages = fileList.map((file) => file.url || file.name);
    }

    if (currentProduct.image.length > 0 && fileList.length === 0) {
      updatedImages = [];
    }

    const formData = new FormData();
    formData.append("name", currentProduct.name);
    formData.append("description", currentProduct.description);
    formData.append("price", currentProduct.price.toString());
    formData.append("stockQuantity", currentProduct.stockQuantity.toString());
    formData.append("discount", currentProduct.discount.toString());
    formData.append("category", currentProduct.category);
    updatedImages.forEach((image) => {
      formData.append("image", image);
    });
    formData.append("company", currentProduct.company);
    formData.append("operatingSystem", currentProduct.operatingSystem);
    formData.append("design", currentProduct.design);
    formData.append("color", currentProduct.color);
    formData.append("material", currentProduct.material);
    formData.append("theLaunchTime", currentProduct.theLaunchTime);
    formData.append("ram", currentProduct.ram);
    formData.append("storageCapacity", currentProduct.storageCapacity);
    formData.append("cpu", currentProduct.cpu);
    formData.append("gpu", currentProduct.gpu);
    formData.append("cpuSpeed", currentProduct.cpuSpeed);
    formData.append("cameraResolution", currentProduct.cameraResolution);
    formData.append("screenTechnology", currentProduct.screenTechnology);
    formData.append("screenResolution", currentProduct.screenResolution);
    formData.append("widescreen", currentProduct.widescreen);
    formData.append("batteryCapacity", currentProduct.batteryCapacity);
    formData.append(
      "maximumChargingSupport",
      currentProduct.maximumChargingSupport
    );
    formData.append("sizeAndVolume", currentProduct.sizeAndVolume);

    try {
      const response = await axios.put<ApiResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/${currentProduct._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const product = response?.data?.data;

      setActionType(null);
      setCurrentProduct(null);
      setIsUpdating(false);
      if (product) {
        setShowAddModal(false);
        notification.success({
          message: "Cập nhật sản phẩm thành công",
          description: "Sản phẩm đã được cập nhật.",
          placement: "top",
        });
      } else {
        notification.error({
          message: "Lỗi",
          description: "Sản phẩm không được cập nhật.",
          placement: "top",
        });
      }
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Không thể cập nhật sản phẩm, vui lòng thử lại.",
        placement: "top",
      });
    }
  };

  const handleCloseModal = () => {
    setActionType(null);
    setCurrentProduct(null);
    setFileList([]);
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
              <th>Số lượng trong kho</th>
              <th>Hệ diều hành</th>
              <th>Thiết kế</th>
              {/* <th>File ảnh</th> */}
              <th>Chất liệu</th>
              <th>Ngày ra mắt </th>
              <th>Giảm giá (%)</th>
              <th>Danh mục</th>
              <th>Màu sắc</th>
              <th>Hãng</th>

              {/*<th>Ram</th>
              <th>CPU</th>
              <th>GPU</th>
              <th>Tốc độ CPU</th>
              <th>Camera</th>
              <th>Công nghệ màn hình</th>
              <th>Độ phân giải màn hình</th>
              <th>Màn hình</th>
              <th>Hỗ trợ sạc </th>
              <th>Độ dày cân nặng</th>
              */}
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
                  <td>{product.operatingSystem} </td>
                  <td>{product.design} </td>
                  <td>{product.material} </td>
                  <td>{product.theLaunchTime} </td>
                  <td>{product.discount} </td>
                  {/* <td>{product.image}</td> */}
                  {/*<td>{product.ram} </td>
                  <td>{product.storageCapacity} </td>
                  <td>{product.cpu} </td>
                  <td>{product.gpu} </td>
                  <td>{product.cpuSpeed} </td>
                  <td>{product.cameraResolution} </td>
                  <td>{product.screenTechnology} </td>
                  <td>{product.screenResolution} </td>
                  <td>{product.widescreen} </td>
                  <td>{product.batteryCapacity} </td>
                  <td>{product.maximumChargingSupport} </td>
                  <td>{product.sizeAndVolume} </td>
                   */}
                  <td>
                    {categories.find(
                      (category) => category._id === product.category
                    )?.name || "Chưa có danh mục"}
                  </td>
                  <td>{product.color} </td>
                  <td>
                    {companies.find(
                      (company) => company._id === product.company
                    )?.name || "No Company"}{" "}
                  </td>
                  <td>
                    <td>
                      <button
                        className={styles["actions-button"]}
                        onClick={() => handleEditClick(product)}
                      >
                        <EditOutlined />
                      </button>
                    </td>
                    <td>
                      {session?.user?.role === "ADMIN" && (
                        <button
                          className={`${styles["actions-button"]} ${styles["actions-delete"]}`}
                          onClick={() => handleDeleteClick(product._id)}
                        >
                          <DeleteOutlined />
                        </button>
                      )}
                    </td>
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
          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Tên:</label>
              <input
                type="text"
                value={currentProduct.name}
                onChange={(e) => handleInputChange(e, "name")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Mô tả:</label>
              <input
                type="text"
                value={currentProduct.description}
                onChange={(e) => handleInputChange(e, "description")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Giá:</label>
              <input
                type="number"
                value={currentProduct.price}
                onChange={(e) => handleInputChange(e, "price")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Số lượng:</label>
              <input
                type="number"
                value={currentProduct.stockQuantity}
                onChange={(e) => handleInputChange(e, "stockQuantity")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>File</label>
              <Upload
                fileList={
                  fileList.length > 0
                    ? fileList
                    : currentProduct?.image.map((img) => ({
                        name: img.substring(img.indexOf("-") + 1),
                        url: img,
                      }))
                }
                onChange={({ fileList }) => {
                  setFileList(fileList);

                  const updatedImages =
                    fileList.length > 0
                      ? fileList.map((file) => file.url || file.name) // Nếu có ảnh mới thì lấy URL hoặc tên file
                      : currentProduct?.image; // Nếu không có ảnh mới thì giữ nguyên ảnh cũ

                  // Cập nhật currentProduct với ảnh mới hoặc ảnh cũ
                  setCurrentProduct({
                    ...currentProduct,
                    image: updatedImages,
                  });
                }}
                beforeUpload={() => false} // Ngừng tự động upload khi người dùng chọn ảnh
              >
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </div>
            <div style={{ display: "flex", gap: "30px", width: "50%" }}>
              <div className={styles.addinput}>
                <label>Category</label>
                <Select
                  value={currentProduct.category || ""}
                  onChange={(value) => {
                    setCurrentProduct({ ...currentProduct, category: value });
                  }}
                  className={styles.input}
                >
                  {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category) => (
                      <Select.Option key={category._id} value={category._id}>
                        {category.name} {/* Hiển thị tên danh mục */}
                      </Select.Option>
                    ))
                  ) : (
                    <Select.Option disabled>Không có danh mục</Select.Option>
                  )}
                </Select>
              </div>
              <div className={styles.addinput}>
                <label>Company</label>
                <Select
                  value={currentProduct.company || ""}
                  onChange={(value) => {
                    setCurrentProduct({ ...currentProduct, company: value });
                  }}
                  className={styles.input}
                >
                  {Array.isArray(companies) && companies.length > 0 ? (
                    companies.map((company) => (
                      <Select.Option key={company._id} value={company._id}>
                        {company.name}
                      </Select.Option>
                    ))
                  ) : (
                    <Select.Option disabled>Không có Company</Select.Option>
                  )}
                </Select>
              </div>
            </div>
          </div>

          <div className={styles.add} style={{ paddingTop: "10px" }}>
            <div className={styles.addinput}>
              <label>Màu sắc</label>
              <input
                type="text"
                value={currentProduct.color}
                onChange={(e) => handleInputChange(e, "color")}
                className={styles.input}
              />
            </div>

            <div className={styles.addinput}>
              <label>Giảm giá (%)</label>
              <input
                type="number"
                value={currentProduct.discount}
                onChange={(e) => handleInputChange(e, "discount")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Ram</label>
              <input
                type="text"
                value={currentProduct.ram}
                onChange={(e) => handleInputChange(e, "ram")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Dung lượng lưu trữ</label>
              <input
                type="text"
                value={currentProduct.storageCapacity}
                onChange={(e) => handleInputChange(e, "storageCapacity")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>CPU</label>
              <input
                type="text"
                value={currentProduct.cpu}
                onChange={(e) => handleInputChange(e, "cpu")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>GPU</label>
              <input
                type="text"
                value={currentProduct.gpu}
                onChange={(e) => handleInputChange(e, "gpu")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Hệ điều hành</label>
              <input
                type="text"
                value={currentProduct.operatingSystem}
                onChange={(e) => handleInputChange(e, "operatingSystem")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Tốc độ xữ lý CPU</label>
              <input
                type="text"
                value={currentProduct.cpuSpeed}
                onChange={(e) => handleInputChange(e, "cpuSpeed")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>CAMERA</label>
              <input
                type="text"
                value={currentProduct.cameraResolution}
                onChange={(e) => handleInputChange(e, "cameraResolution")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Công nghệ màn hình</label>
              <input
                type="text"
                value={currentProduct.screenTechnology}
                onChange={(e) => handleInputChange(e, "screenTechnology")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Độ phân giải màn hình</label>
              <input
                type="text"
                value={currentProduct.screenResolution}
                onChange={(e) => handleInputChange(e, "screenResolution")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>màn hình</label>
              <input
                type="text"
                value={currentProduct.widescreen}
                onChange={(e) => handleInputChange(e, "widescreen")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Pin</label>
              <input
                type="text"
                value={currentProduct.batteryCapacity}
                onChange={(e) => handleInputChange(e, "batteryCapacity")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Hỗ trợ sạc</label>
              <input
                type="text"
                value={currentProduct.maximumChargingSupport}
                onChange={(e) => handleInputChange(e, "maximumChargingSupport")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Thiết kế</label>
              <input
                type="text"
                value={currentProduct.design}
                onChange={(e) => handleInputChange(e, "design")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Ngày ra mắt</label>
              <input
                type="text"
                value={currentProduct.theLaunchTime}
                onChange={(e) => handleInputChange(e, "theLaunchTime")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Chất liệu</label>
              <input
                type="text"
                value={currentProduct.material}
                onChange={(e) => handleInputChange(e, "material")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Độ dày và cân nặng</label>
              <input
                type="text"
                value={currentProduct.sizeAndVolume}
                onChange={(e) => handleInputChange(e, "sizeAndVolume")}
                className={styles.input}
              />
            </div>
          </div>

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
          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Tên sản phẩm</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => handleNewProductInputChange(e, "name")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Mô tả sản phẩm</label>
              <input
                type="text"
                value={newProduct.description}
                onChange={(e) => handleNewProductInputChange(e, "description")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Giá</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => handleNewProductInputChange(e, "price")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Số lượng:</label>
              <input
                type="number"
                value={newProduct.stockQuantity}
                onChange={(e) =>
                  handleNewProductInputChange(e, "stockQuantity")
                }
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add} style={{ paddingBottom: "10px" }}>
            <div className={styles.addinput}>
              <label style={{ marginTop: "10px" }}>File</label>
              <Upload
                fileList={fileList}
                onChange={({ fileList }) => {
                  setFileList(fileList);
                  console.log("file list", fileList);
                }}
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </div>
            <div
              style={{
                display: "flex",
                justifyItems: "space-between",
                gap: "30px",
                width: "50%",
              }}
            >
              <div className={styles.addinput}>
                <label style={{ marginTop: "10px" }}>Category</label>
                <Select
                  value={newProduct.category || ""}
                  onChange={(value) => {
                    setNewProduct({ ...newProduct, category: value });
                  }}
                  className={styles.input}
                >
                  {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category) => (
                      <Select.Option key={category._id} value={category._id}>
                        {category.name}
                      </Select.Option>
                    ))
                  ) : (
                    <Select.Option disabled>Không có danh mục</Select.Option>
                  )}
                </Select>
              </div>
              <div className={styles.addinput}>
                <label style={{ marginTop: "10px" }}>Company</label>
                <Select
                  value={newProduct.company || ""}
                  onChange={(value) => {
                    setNewProduct({ ...newProduct, company: value });
                  }}
                  className={styles.input}
                >
                  {Array.isArray(companies) && companies.length > 0 ? (
                    companies.map((company) => (
                      <Select.Option key={company._id} value={company._id}>
                        {company.name}
                      </Select.Option>
                    ))
                  ) : (
                    <Select.Option disabled>Không có Company</Select.Option>
                  )}
                </Select>
              </div>
            </div>
          </div>

          <div className={styles.add} style={{ paddingBottom: "10px" }}>
            <div className={styles.addinput}>
              <label>Màu sắc</label>
              <input
                type="text"
                value={newProduct.color}
                onChange={(e) => handleNewProductInputChange(e, "color")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Giảm giá (%)</label>
              <input
                type="number"
                value={newProduct.discount}
                onChange={(e) => handleNewProductInputChange(e, "discount")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Ram</label>
              <input
                type="text"
                value={newProduct.ram}
                onChange={(e) => handleNewProductInputChange(e, "ram")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Dung lượng lưu trữ</label>
              <input
                type="text"
                value={newProduct.storageCapacity}
                onChange={(e) =>
                  handleNewProductInputChange(e, "storageCapacity")
                }
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>CPU</label>
              <input
                type="text"
                value={newProduct.cpu}
                onChange={(e) => handleNewProductInputChange(e, "cpu")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>GPU</label>
              <input
                type="text"
                value={newProduct.gpu}
                onChange={(e) => handleNewProductInputChange(e, "gpu")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Hệ điều hành</label>
              <input
                type="text"
                value={newProduct.operatingSystem}
                onChange={(e) =>
                  handleNewProductInputChange(e, "operatingSystem")
                }
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Tốc độ xữ lý CPU</label>
              <input
                type="text"
                value={newProduct.cpuSpeed}
                onChange={(e) => handleNewProductInputChange(e, "cpuSpeed")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>CAMERA</label>
              <input
                type="text"
                value={newProduct.cameraResolution}
                onChange={(e) =>
                  handleNewProductInputChange(e, "cameraResolution")
                }
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Công nghệ màn hình</label>
              <input
                type="text"
                value={newProduct.screenTechnology}
                onChange={(e) =>
                  handleNewProductInputChange(e, "screenTechnology")
                }
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Độ phân giải màn hình</label>
              <input
                type="text"
                value={newProduct.screenResolution}
                onChange={(e) =>
                  handleNewProductInputChange(e, "screenResolution")
                }
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>màn hình</label>
              <input
                type="text"
                value={newProduct.widescreen}
                onChange={(e) => handleNewProductInputChange(e, "widescreen")}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Pin</label>
              <input
                type="text"
                value={newProduct.batteryCapacity}
                onChange={(e) =>
                  handleNewProductInputChange(e, "batteryCapacity")
                }
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Hỗ trợ sạc</label>
              <input
                type="text"
                value={newProduct.maximumChargingSupport}
                onChange={(e) =>
                  handleNewProductInputChange(e, "maximumChargingSupport")
                }
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Thiết kế</label>
              <input
                type="text"
                value={newProduct.design}
                onChange={(e) => handleNewProductInputChange(e, "design")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Ngày ra mắt</label>
              <input
                type="text"
                value={newProduct.theLaunchTime}
                onChange={(e) =>
                  handleNewProductInputChange(e, "theLaunchTime")
                }
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.add}>
            <div className={styles.addinput}>
              <label>Chất liệu</label>
              <input
                type="text"
                value={newProduct.material}
                onChange={(e) => handleNewProductInputChange(e, "material")}
                className={styles.input}
              />
            </div>
            <div className={styles.addinput}>
              <label>Độ dày và cân nặng</label>
              <input
                type="text"
                value={newProduct.sizeAndVolume}
                onChange={(e) =>
                  handleNewProductInputChange(e, "sizeAndVolume")
                }
                className={styles.input}
              />
            </div>
          </div>

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
