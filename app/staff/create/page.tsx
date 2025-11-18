"use client";

import { useEffect, useState } from "react";
import { Form, Input, Button, Select, message, Card } from "antd";
import { useRouter } from "next/navigation";

export default function CreateStaff() {
  const [departments, setDepartments] = useState<Array<{ _id: string; name: string }>>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://apicampy.vercel.app/api/department")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  const onSubmit = async (values:any) => {
    const res = await fetch("https://apicampy.vercel.app/api/staff", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      message.success("Thêm cán bộ thành công!");
      router.push("/staff");
    } else {
      message.error("Lỗi tạo cán bộ!");
    }
  };

  return (
    <Card style={{ maxWidth: 600, margin: "24px auto" }}>
      <h2>Thêm cán bộ</h2>
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Họ tên" name="fullName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Chức vụ" name="position" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Phòng ban" name="departmentId" rules={[{ required: true }]}>
          <Select
            options={departments.map((d) => ({
              label: d.name,
              value: d._id,
            }))}
          />
        </Form.Item>

        <Button htmlType="submit" type="primary" block>
          Lưu
        </Button>
      </Form>
    </Card>
  );
}
