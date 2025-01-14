"use server";
import { signIn } from "@/auth";


export async function authenticate(username: string, password: string) {
  try {
    const r = await signIn("credentials", {
      username: username,
      password: password,
      callbackUrl: "/",
      redirect: false,
    });
    console.log(">>> check r", r);
    return r;

    
  
  } catch (error) {
    if ((error as any).name === "InvalidEmailPasswordError") {
      return {
        error: (error as any).type,
        code: 1,
      };
    } else if ((error as any).name === "InactiveAccountError") {
      return {
        error: (error as any).type,
        code: 2,
      };
    } else {
      return {
        error: "Internal server error 10",
        code: 0,
      };
    }
  }
}



export async function login(username: string, password: string) {
  try {
    // Gọi signIn từ NextAuth với đúng các tham số
    const res = await signIn("credentials", {
      username: username,
      password: password,
      callbackUrl: "/", // Đây là URL sau khi đăng nhập thành công
      redirect: false, // Đảm bảo không tự động chuyển hướng
    });

    // Kiểm tra kết quả trả về
    console.log(">>> check r", res);
    
    if (res?.error) {
      // Xử lý các lỗi đăng nhập (nếu có)
      if (res?.code === 2) {
        // Tài khoản không kích hoạt
        return {
          error: "Inactive Account",
          code: 2,
        };
      }
      return {
        error: res?.error || "Unknown login error",
        code: 1,
      };
    }

    // Kiểm tra vai trò người dùng sau khi đăng nhập thành công
    if (res?.user?.role === "ADMIN") {
      // Nếu người dùng có vai trò là ADMIN, có thể chuyển hướng đến trang quản trị
      return {
        role: "ADMIN",
        redirectUrl: "/dashboard", // Đường dẫn khi người dùng là ADMIN
      };
    } else if (res?.user?.role === "USER") {
      // Nếu người dùng có vai trò là USER, chuyển hướng đến trang người dùng
      return {
        role: "USER",
        redirectUrl: "/user", // Đường dẫn khi người dùng là USER
      };
    } else {
      return {
        error: "Invalid role",
        code: 0,
      };
    }
  } catch (error) {
    // Xử lý các lỗi khác (nếu có)
    console.error("Error during login:", error);
    return {
      error: "Internal server error",
      code: 0,
    };
  }
}

