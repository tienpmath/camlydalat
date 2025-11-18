import "./globals.css";

import {
  FileTextOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { Home, FileText, Settings } from "lucide-react";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout from "./components/Layout";
import { Content } from "antd/es/layout/layout";
//const { Sider, Content } = Layout;

export default function  RootLayout({ children }: any) {


  const menuItems = [
  {
    key: "1",
    icon: <Home size={18} />,
    label: <a href="/">Dashboard</a>,
  },
  {
    key: "2",
    icon: <FileText size={18} />,
    label: <a href="/department">Phòng Ban</a>,
  },
    {
    key: "3",
    icon: <FileText size={18} />,
    label: <a href="/staff">Cán bộ</a>,
  },
    {
    key: "4",
    icon: <FileText size={18} />,
    label: <a href="/donthu">Đơn thư</a>,
  },
  {
    key: "5",
    icon: <Settings size={18} />,
    label: <a href="/settings">Cài đặt</a>,
  },
];
  return (
    <html lang="vi">
      <body>
         <AntdRegistry> <Layout>
            <Content className="p-8 bg-gray-100">{children}</Content>
          </Layout>

       </AntdRegistry>
      </body>
    </html>
  );
}
