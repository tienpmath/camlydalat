"use client";

import { useEffect, useState } from "react";
import { Card, Statistic, Row, Col, Spin } from "antd";
import { API_URL } from "@/lib/api";

interface Summary {
  total: number;
  completed: number;
  pending: number;
  error: number;
}

export default function SummaryCard() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(`${API_URL}/donthu/report/summary`);
        const data = await res.json();
        // aggregate trả về array 1 phần tử
        setSummary(data[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);

  if (loading) return <Spin tip="Loading..." className="m-10" />;

  if (!summary) return <p>Không có dữ liệu</p>;

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <Statistic title="Tổng đơn" value={summary.total} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Hoàn tất" value={summary.completed} valueStyle={{ color: "#52c41a" }} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Chưa hoàn tất" value={summary.pending} valueStyle={{ color: "#fa8c16" }} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Đơn lỗi" value={summary.error} valueStyle={{ color: "#f5222d" }} />
        </Card>
      </Col>
    </Row>
  );
}
