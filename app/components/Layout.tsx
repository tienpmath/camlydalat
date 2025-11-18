"use client";

import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Content, Footer } = Layout;

export default function RootLayout({ children }: any) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Header style={{ background: "#fff", padding: "0 20px", fontWeight: "bold" }}>
          Hệ thống Quản lý đơn thư
        </Header>

        <Content style={{ margin: "20px", background: "#f5f5f5", padding: 20 }}>
          {children}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          © 2025 - Hệ thống Quản lý đơn thư
        </Footer>
      </Layout>
    </Layout>
  );
}
