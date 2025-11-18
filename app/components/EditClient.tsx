"use client";

import { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

interface Props {
  id: string;
}

export default function EditClient({ id }: Props) {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
const units = [
  "Ủy ban Nhân dân phường",
  "Ủy ban Kiểm tra phường",
  "Công an phường",
];
  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_URL}/donthu/${id}`);
      const json = await res.json();
      form.setFieldsValue(json);
      setLoading(false);
    };
    load();
  }, [id, form]);

  const onSubmit = async (values: any) => {
    await fetch(`${API_URL}/donthu/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    alert("Cập nhật thành công!");
    router.push("/");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">✏️ Chỉnh sửa đơn thư</h2>
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

        <Form.Item label="Trạng thái" name="status" rules={[{ required: true }]}>
          <Input placeholder="pending / processing / done" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Form>
    </div>
  );
}
