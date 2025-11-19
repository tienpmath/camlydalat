"use client";

import { Form, Input, Button, Select, DatePicker } from "antd";
import { API_URL } from "@/lib/api";

import { NGUON_NHAN_OPTIONS, PHAN_LOAI_DON_OPTIONS } from "../../constants/donthu";

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
              
            
           {/* 🔥 Dropdown nguồn nhận */}
        <Form.Item
          name="nguonNhan"
          label="Nguồn nhận"
          rules={[{ required: true, message: "Vui lòng chọn nguồn nhận" }]}
        >
          <Select
            options={NGUON_NHAN_OPTIONS}
            placeholder="Chọn nguồn nhận"
            allowClear
          />
        </Form.Item>

        {/* 🔥 Dropdown phân loại đơn */}
        <Form.Item
          name="phanLoaiDon"
          label="Phân loại đơn"
          rules={[{ required: true, message: "Vui lòng chọn phân loại đơn" }]}
        >
          <Select
            options={PHAN_LOAI_DON_OPTIONS}
            placeholder="Chọn loại"
            allowClear
          />
        </Form.Item>

        {/* Ngày ban hành */}
        <Form.Item name="ngayBanHanh" label="Ngày ban hành">
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </Form.Item>
      
            
        {/* <-- Ô KẾT QUẢ GIẢI QUYẾT (mới) --> */}
        <Form.Item name="ketQuaXuLy" label="Kết quả giải quyết">
          <Input.TextArea rows={4} placeholder="Ghi kết quả xử lý (nếu có)" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Tạo đơn
        </Button>
      </Form>
    </div>
  );
}
