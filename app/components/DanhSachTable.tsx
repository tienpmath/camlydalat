"use client";

import { useState } from "react";
import { Input, Collapse, Table, Button } from "antd";
import { SearchOutlined, PhoneOutlined } from "@ant-design/icons";

interface Item {
  name: string;
  role: string;
  phone: string;
  address?: string;
  note?: string;
}

interface Group {
  group: string;
  items: Item[];
}

interface Props {
  data: Group[];
  title: string;
}

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

export default function DanhSachTable({ data, title }: Props) {
  const [keyword, setKeyword] = useState("");

  const filteredGroups = data.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      [item.name, item.role, item.phone].join(" ").toLowerCase().includes(keyword.toLowerCase())
    ),
  }));

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
        {title}
      </h1>

      <Input
        size="large"
        placeholder="Tìm kiếm theo tên, vai trò hoặc số điện thoại..."
        prefix={<SearchOutlined />}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: 20 }}
        allowClear
      />

      {keyword ? (
        <Table
          columns={columns}
          dataSource={searchResults.map((item, index) => ({ ...item, key: index }))}
          pagination={false}
          bordered
        />
      ) : (
        <Collapse accordion>
          {filteredGroups.map((group, idx) => (
            <Collapse.Panel
              key={idx}
              header={`${group.group} (${group.items.length})`}
            >
              <Table
                columns={columns.filter(col => col.key !== "group")}
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
