"use client";

import { useEffect, useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";
import dayjs from "dayjs";

interface Props {
  id: string;
}

const NGUON_NHAN_OPTIONS = ["Trực tiếp", "Bưu điện", "Tỉnh ủy", "Ban Nội chính"];
const PHAN_LOAI_DON_OPTIONS = ["Kiến nghị", "Phản ánh", "Khiếu nại", "Tố cáo"];
const STATUS_OPTIONS = ["pending", "processing", "done"];
const UNITS = ["Ủy ban Nhân dân phường", "Ủy ban Kiểm tra phường", "Công an phường"];

export default function EditClient({ id }: Props) {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_URL}/donthu/${id}`);
      const json = await res.json();

      // Convert ngàyBanHanh sang dayjs để DatePicker nhận
      if (json.ngayBanHanh) {
        json.ngayBanHanh = dayjs(json.ngayBanHanh);
      }

      form.setFieldsValue(json);
      setLoading(false);
    };
    load();
  }, [id, form]);

  const onSubmit = async (values: any) => {
    // Chuyển ngàyBanHanh sang ISO trước khi gửi API
    if (values.ngayBanHanh) {
      values.ngayBanHanh = values.ngayBanHanh.toISOString();
    }

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
      <Form
        layout="vertical"
        form={form}
        onFinish={onSubmit}
        className="space-y-4"
      >
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

        <Form.Item label="Nguồn nhận" name="nguonNhan" rules={[{ required: true }]}>
          <Select placeholder="Chọn nguồn nhận">
            {NGUON_NHAN_OPTIONS.map((v) => (
              <Select.Option key={v} value={v}>
                {v}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Phân loại đơn" name="phanLoaiDon" rules={[{ required: true }]}>
          <Select placeholder="Chọn loại đơn">
            {PHAN_LOAI_DON_OPTIONS.map((v) => (
              <Select.Option key={v} value={v}>
                {v}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Ngày ban hành" name="ngayBanHanh" rules={[{ required: true }]}>
          <DatePicker className="w-full" format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item label="Kết quả giải quyết" name="ketQuaXuLy">
          <Input.TextArea rows={3} placeholder="Nhập kết quả giải quyết (nếu có)" />
        </Form.Item>

        <Form.Item name="assignedUnit" label="Đơn vị nhận xử lý">
          <Select placeholder="Chọn phòng ban" mode="multiple" allowClear>
            {UNITS.map((u) => (
              <Select.Option key={u} value={u}>
                {u}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Trạng thái" name="status" rules={[{ required: true }]}>
          <Select placeholder="Chọn trạng thái">
            {STATUS_OPTIONS.map((s) => (
              <Select.Option key={s} value={s}>
                {s}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Form>
    </div>
  );
}
