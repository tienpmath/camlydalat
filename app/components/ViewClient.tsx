"use client";

import { useEffect, useState } from "react";
import { Card, Descriptions, message, Switch, Tag } from "antd";
import { API_URL } from "@/lib/api";

interface Props {
  id: string;
}

export default function ViewClient({ id }: Props) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_URL}/donthu/${id}`);
      const json = await res.json();
      setData(json);
    };
    load();
  }, [id]);

  if (!data) return <p>Loading...</p>;

  // Màu trạng thái
  const statusColor =
    data.status === "pending"
      ? "orange"
      : data.status === "processing"
      ? "blue"
      : data.status === "done"
      ? "green"
      : "red";

  const statusLabel =
    data.status === "processing"
      ? "Đang xử lý"
      : data.status === "done"
      ? "Hoàn tất"
      : data.status === "error"
      ? "Lỗi"
      : "Chưa xử lý";

  const togglePending = async (checked: boolean) => {
    const newStatus = checked ? "pending" : "done";
    const res = await fetch(`${API_URL}/donthu/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) {
      setData({ ...data, status: newStatus });
      message.success("Cập nhật trạng thái thành công!");
    } else {
      message.error("Cập nhật trạng thái thất bại!");
    }
  };

  return (
    <Card className="max-w-3xl mx-auto p-6 shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>

      {/* --- TRẠNG THÁI --- */}
      {data.status === "pending" ? (
        <div className="mb-4 flex items-center gap-2">
          <span>Trạng thái:</span>
          <Switch
            checked={true}
            checkedChildren="Pending"
            unCheckedChildren="Done"
            onChange={togglePending}
          />
        </div>
      ) : (
        <Tag color={statusColor} className="mb-4 text-base px-3 py-1">
          {statusLabel}
        </Tag>
      )}

      {/* --- THÔNG TIN CHI TIẾT --- */}
      <Descriptions bordered column={1} size="middle">
        <Descriptions.Item label="Người gửi">
          {data.senderName}
        </Descriptions.Item>

        <Descriptions.Item label="Số điện thoại">
          {data.senderPhone}
        </Descriptions.Item>

        <Descriptions.Item label="Nguồn nhận">
          <Tag color="purple">{data.nguonNhan}</Tag>
        </Descriptions.Item>

        <Descriptions.Item label="Phân loại đơn">
          <Tag color="cyan">{data.phanLoaiDon}</Tag>
        </Descriptions.Item>

        <Descriptions.Item label="Ngày ban hành">
          {data.ngayBanHanh
            ? new Date(data.ngayBanHanh).toLocaleDateString("vi-VN")
            : "—"}
        </Descriptions.Item>

        <Descriptions.Item label="Đơn vị nhận xử lý">
          {data.assignedUnit && data.assignedUnit.length > 0 ? (
            data.assignedUnit.map((u: string) => (
              <Tag color="blue" key={u} className="mr-1">
                {u}
              </Tag>
            ))
          ) : (
            <span>Chưa phân công</span>
          )}
        </Descriptions.Item>

        <Descriptions.Item label="Kết quả giải quyết">
          {data.ketQuaXuLy && data.ketQuaXuLy.trim().length > 0 ? (
            <p className="whitespace-pre-line">{data.ketQuaXuLy}</p>
          ) : (
            <i>Chưa có kết quả</i>
          )}
        </Descriptions.Item>
      </Descriptions>

      {/* --- NỘI DUNG ĐƠN --- */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Nội dung đơn</h3>
      <p className="whitespace-pre-line leading-relaxed">{data.content}</p>
    </Card>
  );
}
