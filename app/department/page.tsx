"use client";
import { useEffect, useState } from "react";
import { Table, Button, Input, Space, Popconfirm, message } from "antd";
import Link from "next/link";

export default function DepartmentPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch("https://apicampy.vercel.app/api/department");
    const json = await res.json();

    setData(
      json.filter((d:any) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
const deleteDepartment = async (id: string) => {
  await fetch(`https://apicampy.vercel.app/api/department/${id}`, { method: "DELETE" });
  message.success("Đã xóa");
  fetchData();
};


  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Quản lý Phòng ban</h1>

      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Tìm kiếm tên phòng ban..."
          allowClear
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link href="/department/create">
          <Button type="primary">Thêm phòng ban</Button>
        </Link>
      </Space>

      <Table
        rowKey="_id"
        dataSource={data}
        columns={[
          { title: "Tên phòng ban", dataIndex: "name" },
          { title: "Mã phòng ban", dataIndex: "code" },
          // ⬇️ THÊM TẠI ĐÂY
  {
    title: "Hành động",
    render: (record) => (
      <>
        <Link href={`/departments/edit/${record._id}`}>
          <Button type="link">✏ Sửa</Button>
        </Link>

        <Popconfirm
          title="Xóa phòng ban?"
          onConfirm={() => deleteDepartment(record._id)}
        >
          <Button danger type="link">🗑 Xóa</Button>
        </Popconfirm>
      </>
    ),
  },
        ]}
      />
    </div>
  );
}
