"use client";

import { useEffect, useState } from "react";
import { Button, Form, Input, Select, message, Card } from "antd";
import { useParams, useRouter } from "next/navigation";

export default function EditStaff() {
  const router = useRouter();
  const params = useParams();
  const staffId = params.id as string;

  const [form] = Form.useForm();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Load danh sách phòng ban
  const fetchDepartments = async () => {
    const res = await fetch("https://apicampy.vercel.app/api/department");
    const data = await res.json();
    setDepartments(data);
  };

  // 🔹 Load thông tin cán bộ
  const fetchStaff = async () => {
    const res = await fetch(`https://apicampy.vercel.app/api/staff/${staffId}`);
    const data = await res.json();

    // Set form values vào Form
    form.setFieldsValue({
      fullName: data.fullName,
      phone: data.phone,
      position: data.position,
      departmentId: data.departmentId?._id,
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchDepartments();
    fetchStaff();
  }, []);

  // 🔹 Submit UPDATE
  const onFinish = async (values: any) => {
    try {
      const res = await fetch(`https://apicampy.vercel.app/api/staff/${staffId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Update failed");

      message.success("Cập nhật thành công!");
      router.push("/staff");
    } catch (error) {
      message.error("Lỗi khi cập nhật!");
    }
  };

  if (loading) return <p>⏳ Loading...</p>;

  return (
    <Card title="✏ Sửa thông tin cán bộ" style={{ maxWidth: 600, margin: "auto" }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Họ tên" name="fullName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Số điện thoại" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Chức vụ" name="position">
          <Input />
        </Form.Item>

        <Form.Item label="Phòng ban" name="departmentId" rules={[{ required: true }]}>
          <Select
            placeholder="Chọn phòng ban"
            style={{ width: "100%" }}
            options={departments.map((item: any) => ({
              label: item.name,
              value: item._id,
            }))}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Lưu thay đổi
        </Button>
      </Form>
    </Card>
  );
}
