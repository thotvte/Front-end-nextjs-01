"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./admin.module.css";
import { useSession } from "next-auth/react";
import { notification } from "antd";
import { BorderTopOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

interface User {
  _id: string;
  email: string;
  name: string;
  role: string;
  phone: string;
  address: string;
  accountType: string;
  isActive: boolean;
  codeId: string;
  codeExpired: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
    results: User[];
  };
}

const UserList = () => {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [actionType, setActionType] = useState<"update" | "delete" | null>(
    null
  );
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`
        );

        // Lọc danh sách người dùng chỉ lấy những người có role === "USER"
        const filteredUsers = response.data.data.results.filter(
          (user) => user.role === "USER"
        );

        setUsers(filteredUsers); // Cập nhật danh sách người dùng sau khi lọc
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser]);

  const handleEditClick = (user: User) => {
    setCurrentUser(user);
    setActionType("update");
  };

  const handleDeleteClick = (userId: string) => {
    if (session?.user?.role !== "ADMIN") {
      console.log("Bạn không có quyền xóa người dùng.");
      return;
    }

    setUserToDelete(userId);
    setActionType("delete");
  };

  const handleDeleteConfirm = async () => {
    if (userToDelete && session?.user?.access_token) {
      try {
        const token = session?.user?.access_token;

        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }

        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${userToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(users.filter((user) => user._id !== userToDelete));
        setActionType(null);

        // Hiển thị thông báo xóa thành công
        notification.success({
          message: "Xóa người dùng thành công",
          description: "Người dùng đã được xóa khỏi hệ thống.",
          placement: "top",
          icon: <BorderTopOutlined />,
        });
      } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
      }
    }
  };

  const handleUpdateUser = async () => {
    if (!currentUser) return;

    setIsUpdating(true);
    setUpdateError(null);

    const updateData = {
      name: currentUser.name,
      phone: currentUser.phone,
      address: currentUser.address,
    };

    try {
      const token = session?.user?.access_token;

      if (!token) {
        console.error("Không có token, yêu cầu không thể thực hiện.");
        return;
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${currentUser._id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === currentUser._id ? { ...user, ...updateData } : user
        )
      );

      setActionType(null);
      setCurrentUser(null);
      setIsUpdating(false);

      // Hiển thị thông báo thành công
      notification.success({
        message: "Cập nhật người dùng thành công",
        description: "Thông tin người dùng đã được cập nhật thành công.",
        placement: "top",
        icon: <BorderTopOutlined />,
      });
    } catch (error: any) {
      console.error(
        "Lỗi khi cập nhật người dùng:",
        error.response?.data || error.message
      );
      setUpdateError("Cập nhật người dùng thất bại, vui lòng thử lại.");
      setIsUpdating(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, [field]: e.target.value });
    }
  };

  const handleCloseModal = () => {
    setActionType(null);
    setCurrentUser(null);
  };

  if (status === "loading") {
    return <p>Đang tải...</p>;
  }

  if (!session) {
    return <p>Vui lòng đăng nhập để tiếp tục.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Quản lý người dùng</h1>

      {loading ? (
        <p className={styles.loading}>Đang tải dữ liệu...</p>
      ) : users.length === 0 ? (
        <p className={styles.noUsers}>Không có người dùng nào</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  {user.isActive ? (
                    <span className={styles["status-active"]}>Active</span>
                  ) : (
                    <span className={styles["status-inactive"]}>Inactive</span>
                  )}
                </td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <button
                    className={styles["actions-button"]}
                    onClick={() => handleEditClick(user)}
                  >
                    <EditOutlined />
                  </button>
                  {session?.user?.role === "ADMIN" && (
                    <button
                      className={`${styles["actions-button"]} ${styles["actions-delete"]}`}
                      onClick={() => handleDeleteClick(user._id)}
                    >
                      <DeleteOutlined />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {actionType === "update" && currentUser && (
        <div className={styles.modal}>
          <h2>Chỉnh sửa người dùng</h2>
          {updateError && <div className={styles.error}>{updateError}</div>}
          <label>Email:</label>
          <input
            type="email"
            value={currentUser.email}
            className={styles.input}
            readOnly
          />
          <label>Name:</label>
          <input
            type="text"
            value={currentUser.name}
            onChange={(e) => handleInputChange(e, "name")}
            className={styles.input}
          />
          <label>Phone:</label>
          <input
            type="text"
            value={currentUser.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            className={styles.input}
          />
          <label>Address:</label>
          <input
            type="text"
            value={currentUser.address}
            onChange={(e) => handleInputChange(e, "address")}
            className={styles.input}
          />
          <div className={styles.modalActions}>
            <button
              className={styles.updateButton}
              onClick={handleUpdateUser}
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
          <h2>Chắc chắn xóa người dùng này?</h2>
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
  );
};

export default UserList;
