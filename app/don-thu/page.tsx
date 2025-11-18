
"use client";

import { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { API_URL } from "@/lib/api";

const ViewPage=()=>{
const [data, setData] = useState([]);

  const load = async () => {
    const res = await fetch(`${API_URL}/donthu`);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    load();
  }, []);

  const columns = [
    { title: "Tiêu đề", dataIndex: "title", key: "title" },
    { title: "Người gửi", dataIndex: "senderName", key: "senderName" },
    { title: "SĐT", dataIndex: "senderPhone", key: "senderPhone" }, { title: "Đơn vị nhận xử lý", dataIndex: "assignedUnit", key: "assignedUnit" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const color =
          status === "pending"
            ? "orange"
            : status === "processing"
            ? "blue"
            : status === "done"
            ? "green"
            : "red";
        const label =
          status === "pending"
            ? "Đang chờ"
            : status === "processing"
            ? "Đang xử lý"
            : status === "done"
            ? "Hoàn tất"
            : "Lỗi";
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
  title: "Hành động",
  key: "action",
  render: (_: any, row: any) => (
    <div className="flex gap-2">
      <a href={`/don-thu/view/${row._id}`} className="text-blue-600">
        👁️ Xem
      </a>
      <a href={`/don-thu/edit/${row._id}`} className="text-orange-500">
        ✏️ Sửa
      </a>
    </div>
  ),
}
  ];
    
  return(<>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">📑 Danh sách đơn thư</h2>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />
    </div></>)
}

export default ViewPage;
  
