"use client";
import { useEffect, useState } from "react";
import { Table, Button, Input, Space, Tag, Popconfirm, message, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StaffPage() {
   const router = useRouter();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState<Array<{ _id: string; name: string }>>([]);
  //const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState("");

  const fetchDataPB = async () => {
    const res = await fetch(`https://apicampy.vercel.app/api/department`);
    const json = await res.json();   setDepartments(json);
    
  };

  const fetchData = async () => {
    const res = await fetch(`https://apicampy.vercel.app/api/staff?search=${search}&departmentId=${departmentId}`);
    const json = await res.json();   
    setData(json);
  };
  // // 📌 Gửi API lên NestJS
  // const onFinish = async (values: any) => {
  //   try {
  //     const res = await fetch("http://localhost:3000/staff", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...values,
  //         departmentId, // ⬅ LẤY TỪ SELECT
  //       }),
  //     });

  //     if (!res.ok) throw new Error("Create failed");

  //     message.success("Thêm cán bộ thành công!");
  //     router.push("/staff");
  //   } catch (error) {
  //     message.error("Có lỗi xảy ra!");
  //   }
  // };

const deleteStaff = async (id:any) => {
  await fetch("https://apicampy.vercel.app/api/staff/" + id, { method: "DELETE" });
  message.success("Đã xóa cán bộ");
  fetchData();
};

  useEffect(() => {
    fetchData();fetchDataPB();
  }, [departmentId,search]);

  const columns = [
    { title: "Họ tên", dataIndex: "fullName" },
    { title: "SĐT", dataIndex: "phone" },
    { title: "Chức vụ", dataIndex: "position" },
    {
      title: "Phòng ban",
      render: (record:any) => record.departmentId?.name ?? "—",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (v:any) =>
        v === "ACTIVE" ? <Tag color="green">Đang công tác</Tag> : <Tag color="red">Nghỉ</Tag>,
    },
    {
  title: "Hành động",
  render: (record:any) => (
    <>
      <Link href={`/staff/edit/${record._id}`}>
        <Button type="link">✏ Sửa</Button>
      </Link>

      <Popconfirm title="Xóa?" onConfirm={() => deleteStaff(record._id)}>
        <Button danger type="link">🗑 Xóa</Button>
      </Popconfirm>
    </>
  )
}
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1>Quản lý Cán bộ</h1>
<Select  style={{ width: 300 }}
  placeholder="Chọn phòng ban"
  value={departmentId}
  onChange={(v) => setDepartmentId(v)}
  options={departments.map((item) => ({
    label: item.name,
    value: item._id,
  }))}
/>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Tìm kiếm theo tên"
          onChange={(e) => setSearch(e.target.value)}
          allowClear
        />
        <Link href="/staff/create">
          <Button type="primary">Thêm cán bộ</Button>
        </Link>
      </Space>

      <Table rowKey="_id" dataSource={data} columns={columns} />
      
    </div>
  );
}
