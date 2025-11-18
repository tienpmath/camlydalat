"use client";

import { useRouter } from "next/navigation";
import { Layout, Menu } from "antd";
import { Home, FileText, Settings, PlusCircle } from "lucide-react";

const { Sider } = Layout;

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    {
      key: "1",
      icon: <Home size={18} />,
      label: "Dashboard",
      onClick: () => router.push("/"),
    },{
      key: "2",
      icon: <FileText size={18} />,
      label: "Thống kê",
      onClick: () => router.push("/thongke"),
    },
{
      key: "3",
      icon: <FileText size={18} />,
      label: "Phòng ban",
      onClick: () => router.push("/department"),
    },
    {
      key: "4",
      icon: <FileText size={18} />,
      label: "Cán bộ",
      onClick: () => router.push("/staff"),
    },
    {
      key: "5",
      icon: <FileText size={18} />,
      label: "Đơn thư",
      onClick: () => router.push("/don-thu"),
    },
    {
      key: "6",
      icon: <PlusCircle size={18} />,
      label: "Tạo đơn mới",
      onClick: () => router.push("/don-thu/create"),
    },
    {
      key: "7",
      icon: <Settings size={18} />,
      label: "Cài đặt",
      onClick: () => router.push("/settings"),
    },
  ];

  return (
    <Sider width={220} theme="dark" breakpoint="lg" collapsedWidth="0">
      <div className="text-white text-xl font-bold p-4">📄 Quản lý đơn thư</div>
      <Menu theme="dark" mode="inline" items={menuItems} />
    </Sider>
  );
}
