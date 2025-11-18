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

  // const statusColor =
  //   data.status === "pending"
  //     ? "orange"
  //     : data.status === "processing"
  //     ? "blue"
  //     : data.status === "done"
  //     ? "green"
  //     : "red";
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
      : null; // pending sẽ dùng Switch

  const togglePending = async (checked: boolean) => {
    const newStatus = checked ? "pending" : "done"; // on = pending, off = done
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
    <Card className="max-w-2xl mx-auto p-6 shadow bg-white">
      <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
      {data.status === "pending" ? (
        <div className="mb-4 flex items-center gap-2">
          <span>Trạng thái:</span>
          <Switch
            checked={true} // pending = on
            checkedChildren="On"
            unCheckedChildren="Off"
            onChange={togglePending}
          />
        </div>
      ) : (
        <Tag color={statusColor} className="mb-4">
          {statusLabel}
        </Tag>
      )}

      <p>
        <b>Người gửi:</b> {data.senderName}
      </p>
      <p>
        <b>SĐT:</b> {data.senderPhone}
      </p>
         <Descriptions.Item label="Đơn vị nhận xử lý">
          {data.assignedUnit && data.assignedUnit.length > 0 ? (
            data.assignedUnit.map((u: string) => (
              <Tag color="blue" key={u} className="mr-1">{u}</Tag>
            ))
          ) : (
            <span>Chưa phân công</span>
          )}
        </Descriptions.Item>
      <hr className="my-4" />
      <p className="whitespace-pre-line">{data.content}</p>
    </Card>
  );
}
