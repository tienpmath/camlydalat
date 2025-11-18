"use client";

import { useEffect, useState } from "react";
import { Card, Tag, Spin } from "antd";
import { API_URL } from "@/lib/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SummaryCard from "../components/summary";

interface Stats {
  month: string;
  completed: number;
  pending: number;
}

export default function Dashboard() {
  const [monthlyStats, setMonthlyStats] = useState<Stats[]>([]);
  const [weeklyStats, setWeeklyStats] = useState<Stats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const resMonth = await fetch(`${API_URL}/donthu/stats/month`);
        const resWeek = await fetch(`${API_URL}/donthu/stats/week`);
        const monthData = await resMonth.json();
        const weekData = await resWeek.json();
        setMonthlyStats(monthData);
        setWeeklyStats(weekData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) return <Spin tip="Loading..." className="m-10" />;

  return (
    <div className="space-y-8 p-6">
          <SummaryCard />
      <Card title="📊 Thống kê đơn thư theo tháng" className="shadow bg-white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyStats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#52c41a" name="Hoàn tất" />
            <Bar dataKey="pending" fill="#fa8c16" name="Chưa hoàn tất" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="📊 Thống kê đơn thư theo tuần" className="shadow bg-white">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyStats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#52c41a" name="Hoàn tất" />
            <Bar dataKey="pending" fill="#fa8c16" name="Chưa hoàn tất" />
          </BarChart>
        </ResponsiveContainer>
      </Card> 
    </div>
  );
}
