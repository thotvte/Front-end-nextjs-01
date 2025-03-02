"use client";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import styles from "./admin.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import axios from "axios";
import { notification } from "antd";

interface Product {
  productId: {
    _id: string;
    name: string;
    price: number;
    stockQuantity: number;
    image: string[];
    color: string;
    category: string;
    company: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  quantity: number;
  price: number;
  _id: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  accountType: string;
  isActive: boolean;
  codeId: string;
  codeExpired: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Order {
  _id: string;
  user: User;
  products: Product[];
  totalAmount: number;
  shippingAddress: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  statusCode: number;
  message: string;
  data: Order[];
}

const Order = () => {
  const { data: session, status } = useSession();
  const statusProduct = [
    "CHỜ XÁC NHẬN",
    "ĐÃ XÁC NHẬN",
    "ĐANG VẬN CHUYỂN",
    "HOÀN THÀNH",
    "BỊ HỦY BỎ",
  ];

  const [order, setOrder] = useState<Order[]>([]);
  const [edit, setEdit] = useState<Record<string, boolean>>({});
  const [newStatus, setNewStatus] = useState<Record<string, string>>({});

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    orderId: string
  ) => {
    setNewStatus((prevStatus) => ({
      ...prevStatus,
      [orderId]: event.target.value,
    }));
  };

  const handleEditClick = (id: string, currentStatus: string) => {
    setEdit((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setNewStatus((prevStatus) => ({
      ...prevStatus,
      [id]: currentStatus, // set the current status to be preselected in the dropdown
    }));
  };

  const handleSaveStatus = (id: string) => {
    const updatedOrder = order.map((o) =>
      o._id === id ? { ...o, status: newStatus[id] } : o
    );
    setOrder(updatedOrder);

    // Call the API to save the updated status on the backend
    axios
      .put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/orders/${id}`,
        { status: newStatus[id] },
        {
          headers: {
            Authorization: `Bearer ${session?.user?.access_token}`,
          },
        }
      )
      .then((response) => {
        notification.success({
          message: "Cập nhật đơn hàng thành công <3",
          description: `Bạn vui lòng kiểm tra đơn hàng <3`,
          placement: "bottomRight",
        });
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        notification.error({
          message: "Cập nhật thất bại",
          description: "Đã có lỗi xảy ra khi cập nhật trạng thái.",
          placement: "bottomRight",
        });
      });

    // Disable editing after saving
    setEdit((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = session?.user?.access_token;
        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }

        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrder(response.data.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchOrder();
  }, [session]);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID sản phẩm</th>
            <th>Tên sản phẩm - Màu sắc - Số lượng</th>
            <th>Tên khách hàng</th>
            <th>Địa chỉ nhận hàng</th>
            <th>Tổng tiền</th>
            <th>Ngày đặt hàng</th>
            <th>Trạng thái đơn hàng</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(order) && order.length > 0
            ? order.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order?.products &&
                      order.products.map((product) => (
                        <div key={product._id}>
                          {product.productId.name} - {product.productId.color} x{" "}
                          {product.quantity}
                        </div>
                      ))}
                  </td>
                  <td>{order?.user?.name}</td>
                  <td>{order.shippingAddress}</td>
                  <td>{formatCurrency(order.totalAmount)}</td>
                  <td>{order.createdAt}</td>
                  <td>
                    {edit[order._id] ? (
                      <select
                        value={newStatus[order._id] || order.status}
                        onChange={(e) => handleStatusChange(e, order._id)}
                      >
                        {statusProduct.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    ) : (
                      order.status
                    )}
                  </td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    {session?.user?.role === "ADMIN" && (
                      <>
                        <button
                          className={styles["actions-button"]}
                          onClick={() =>
                            handleEditClick(order._id, order.status)
                          }
                        >
                          <EditOutlined />
                        </button>
                        {edit[order._id] && (
                          <button
                            onClick={() => handleSaveStatus(order._id)}
                            className={styles["actions-button"]}
                          >
                            Save
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </>
  );
};

export default Order;
