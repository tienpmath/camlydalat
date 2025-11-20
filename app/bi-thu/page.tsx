"use client";

import { useState } from "react";
import { Input, Collapse, Table, Button } from "antd";
import { SearchOutlined, PhoneOutlined } from "@ant-design/icons";
import { DSBITHU } from "../constants/donthu";
import { exportToExcel } from "../utils/exportExcel";

// Hàm bỏ dấu tiếng Việt
const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

// Highlight theo keyword không dấu
const highlightText = (text: string, keyword: string) => {
  if (!keyword) return text;

  const textNoTone = removeVietnameseTones(text.toLowerCase());
  const keywordNoTone = removeVietnameseTones(keyword.toLowerCase());

  const start = textNoTone.indexOf(keywordNoTone);
  if (start === -1) return text;

  const end = start + keywordNoTone.length;

  return (
    <>
      {text.substring(0, start)}
      <span style={{ backgroundColor: "yellow", fontWeight: "bold" }}>
        {text.substring(start, end)}
      </span>
      {text.substring(end)}
    </>
  );
};

export default function DanhSach2Page() {
  const [keyword, setKeyword] = useState("");

  // Lọc theo keyword (không dấu)
  const keywordNoTone = removeVietnameseTones(keyword.toLowerCase());

  const filteredGroups = DSBITHU.map((group) => ({
    ...group,
    items: group.items.filter((item) => {
      const text = [item.name, item.role, item.phone].join(" ");
      return removeVietnameseTones(text.toLowerCase()).includes(keywordNoTone);
    }),
  }));

  // Kết quả tìm kiếm toàn bảng
  const searchResults = filteredGroups.flatMap((group) =>
    group.items.map((item) => ({ ...item, group: group.group }))
  );

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
      render: (text: string) => (
        <>
          Đồng chí: <b>{highlightText(text, keyword)}</b>
        </>
      ),
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
        Danh sách liên hệ (Không dấu)
      </h1>

      {/* Button xuất Excel */}
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

      {/* Nếu có keyword → hiển thị bảng kết quả */}
      {keyword ? (
        <Table
          columns={columns}
          dataSource={searchResults.map((item, index) => ({
            ...item,
            key: index,
          }))}
          pagination={false}
          bordered
        />
      ) : (
        /* Không có keyword → hiển thị Collapse */
        <Collapse accordion>
          {filteredGroups.map((group, idx) => (
            <Collapse.Panel
              key={idx}
              header={`${group.group} (${group.items.length})`}
            >
              <Table
                columns={columns.filter((c) => c.key !== "group")}
                dataSource={group.items.map((item, index) => ({
                  ...item,
                  key: index,
                }))}
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
