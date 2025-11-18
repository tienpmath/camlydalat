"use client";

import { Form, Input, Button, Select } from "antd";
import { API_URL } from "@/lib/api";

export default function CreatePage() {
  const [form] = Form.useForm();
const units = [
  "Ủy ban Nhân dân phường",
  "Ủy ban Kiểm tra phường",
  "Công an phường",
];
  const onSubmit = async (values: any) => {
    await fetch(`${API_URL}/donthu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    alert("Tạo đơn thành công!");
    window.location.href = "/";
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">➕ Tạo đơn mới</h2>
      <Form layout="vertical" form={form} onFinish={onSubmit} className="space-y-4">
        <Form.Item label="Tiêu đề" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Nội dung" name="content" rules={[{ required: true }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label="Tên người gửi" name="senderName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Số điện thoại" name="senderPhone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
            <Form.Item name="assignedUnit" label="Đơn vị nhận xử lý">
               <Select placeholder="Chọn phòng ban" mode="multiple" allowClear>
          {units.map((u) => (
            <Select.Option key={u} value={u}>
              {u}
            </Select.Option>
          ))}
        </Select>
              </Form.Item>
        <Button type="primary" htmlType="submit">
          Tạo đơn
        </Button>
      </Form>
    </div>
  );
}
