"use client";

import { Button, Form, Input, message } from "antd";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function onFinish(values: any) {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.error) {
      message.error("Đăng nhập thất bại: " + res.error);
    } else {
      message.success("Đăng nhập thành công");
      router.push("/profile");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Đăng nhập</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Nhập email" }]}
            >
              <Input placeholder="your@email.com" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: "Nhập mật khẩu" }]}
            >
              <Input.Password />
            </Form.Item>

            <div className="flex justify-end">
              {/* shadcn button */}
              <button type="submit" className="px-6">
            Đăng nhập
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
