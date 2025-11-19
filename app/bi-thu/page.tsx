"use client";

import { useState } from "react";
import { Input, Collapse, Table, Button } from "antd";
import { SearchOutlined, PhoneOutlined } from "@ant-design/icons";
import { DSBITHU } from "../constants/donthu";
import { exportToExcel } from "../utils/exportExcel";

// Hàm highlight từ khóa
const highlightText = (text: string, keyword: string) => {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, idx) =>
        regex.test(part) ? (
          <span key={idx} style={{ backgroundColor: "yellow" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default function DanhSachPage() {
  const [keyword, setKeyword] = useState("");

  // Lọc nhóm theo từ khóa
  const filteredGroups = DSBITHU.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      [item.name, item.role, item.phone].join(" ").toLowerCase().includes(keyword.toLowerCase())
    ),
  }));

  // Danh sách tổng hợp tất cả items phù hợp
  const searchResults = filteredGroups.flatMap((group) =>
    group.items.map((item) => ({ ...item, group: group.group }))
  );

  // Cột bảng
  const columns = [
    {
      title: "STT",
      key: "index",
      width: 60,
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <>Đồng chí: <b>{highlightText(text, keyword)}</b></>,
    },
    {
      title: "Chức vụ / Vai trò",
      dataIndex: "role",
      key: "role",
      render: (text: string) => highlightText(text, keyword),
    },
    {
      title: "Chi bộ / Nhóm",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (phone: string) => (
        <Button
          type="link"
          icon={<PhoneOutlined />}
          onClick={() => window.open(`tel:${phone}`)}
        >
          {highlightText(phone, keyword)}
        </Button>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 26, fontWeight: 700 }}>
        Danh sách liên hệ
      </h1>
  <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => exportToExcel(DSBITHU, "Danh_sach_Can_bo")}
      >
        Xuất Excel
      </Button>
      {/* Input tìm kiếm */}
      <Input
        size="large"
        placeholder="Tìm kiếm theo tên, vai trò hoặc số điện thoại..."
        prefix={<SearchOutlined />}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: 20 }}
        allowClear
      />

      {keyword ? (
        // Hiển thị kết quả tìm kiếm tổng hợp
        <Table
          columns={columns}
          dataSource={searchResults.map((item, index) => ({ ...item, key: index }))}
          pagination={false}
          bordered
        />
      ) : (
        // Hiển thị Accordion nhóm bình thường
        <Collapse accordion>
          {filteredGroups.map((group, idx) => (
            <Collapse.Panel
              key={idx}
              header={`${group.group} (${group.items.length})`}
            >
              <Table
                columns={columns.filter(col => col.key !== "group")} // Không hiển thị cột nhóm trong Accordion
                dataSource={group.items.map((item, index) => ({ ...item, key: index }))}
                pagination={false}
                bordered
              />
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}
