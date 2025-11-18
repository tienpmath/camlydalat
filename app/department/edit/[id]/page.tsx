"use client";
import { useEffect, useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { useParams, useRouter } from "next/navigation";

export default function EditDepartment() {
  const { id } = useParams();
  const router = useRouter();
  const [form] = Form.useForm();

  useEffect(() => {
    fetch("https://apicampy.vercel.app/api/department/" + id)
      .then(res => res.json())
      .then(data => form.setFieldsValue(data));
  }, []);

  const submit = async (values:any) => {
    await fetch(`https://apicampy.vercel.app/api/department/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    message.success("Cập nhật thành công!");
    router.push("/department");
  };

  return (
    <Card style={{ maxWidth: 550, margin: "24px auto" }}>
      <h2>Sửa phòng ban</h2>

      <Form layout="vertical" onFinish={submit} form={form}>
        <Form.Item name="name" label="Tên phòng ban" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="code" label="Mã phòng ban" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Button htmlType="submit" type="primary" block>Lưu</Button>
      </Form>
    </Card>
  );
}
