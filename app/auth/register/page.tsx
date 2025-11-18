"use client";

import { Button, Form, Input, message } from "antd";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  async function onFinish(values: any) {
    try {
      const res = await fetch("https://apicampy.vercel.app/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Register failed");
      }
      message.success("Đăng ký thành công. Vui lòng đăng nhập.");
      router.push("/login");
    } catch (err: any) {
      message.error(err.message || "Lỗi đăng ký");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>

            <div className="flex justify-end">
              <button type="submit">Đăng ký</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
