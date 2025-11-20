'use client';
import React, { useState, useEffect } from "react";

// ------------------------------
//  UI PREMIUM + 5 TÍNH NĂNG NÂNG CẤP
//  1) Input chỉnh %
//  2) Progress bar
//  3) Lưu LocalStorage
//  4) Xuất Excel
//  5) Giao diện dạng bảng chuyên nghiệp
// ------------------------------

export default function ChiTieuPage() {
  const COLORS = {
    "kinh-te-xa-hoi": "border-indigo-400 bg-indigo-50/70",
    "xay-dung-dang": "border-emerald-400 bg-emerald-50/70",
  };

  const GROUP_ICONS = {
    "kinh-te-xa-hoi": "📊",
    "xay-dung-dang": "🏛️",
  };

  const initialData = [
    {
      id: "kinh-te-xa-hoi",
      title: "1. Chỉ tiêu kinh tế - xã hội",
      items: [
        { id: 1, text: "Thu ngân sách đạt kế hoạch.", progress: 100 },
        { id: 2, text: "Đảm bảo quốc phòng - an ninh...", progress: 100 },
        { id: 3, text: "Tỷ lệ BHYT toàn dân 96%", progress: 100 },
        { id: 4, text: "Tăng dân số tự nhiên < 0,1%...", progress: 100 },
        { id: 5, text: "Quản lý trật tự xây dựng - đô thị", progress: 100 },
        { id: 6, text: "Không phát sinh hộ nghèo/cận nghèo", progress: 100 },
        { id: 7, text: "Duy trì các trường đạt chuẩn quốc gia", progress: 100 },
        { id: 8, text: "Duy trì Trạm y tế chuẩn quốc gia", progress: 100 },
        { id: 9, text: "98% hộ gia đình văn hóa", progress: 100 },
        { id: 10, text: "Cơ quan đạt chuẩn văn hóa", progress: 100 },
      ],
    },
    {
      id: "xay-dung-dang",
      title: "2. Chỉ tiêu xây dựng Đảng, hệ thống chính trị",
      items: [
        { id: 1, text: "100% cán bộ đảng viên tu dưỡng...", progress: 100 },
        { id: 2, text: "Thực hiện kiểm tra giám sát...", progress: 100 },
        { id: 3, text: "90% tổ chức Đảng hoàn thành tốt nhiệm vụ", progress: 100 },
        { id: 4, text: "100% chỉ tiêu phát triển Đảng", progress: 100 },
        { id: 5, text: "Đảng bộ hoàn thành tốt nhiệm vụ", progress: 100 },
      ],
    },
  ];

  const [data, setData] = useState(initialData);
  const [expanded, setExpanded] = useState(new Set());
  const [query, setQuery] = useState("");

  // ------------------------------
  // 3) Lưu LocalStorage
  // ------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("chiTieuData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("chiTieuData", JSON.stringify(data));
  }, [data]);

  const toggle = (id:any) => {
    const s = new Set(expanded);
    s.has(id) ? s.delete(id) : s.add(id);
    setExpanded(s);
  };

  // Filter
  const filtered = data.map((group) => ({
    ...group,
    items: group.items.filter((it) => it.text.toLowerCase().includes(query.toLowerCase())),
  }));

  // ------------------------------
  // 4) Xuất Excel đơn giản dạng CSV
  // ------------------------------
  const exportExcel = () => {
    let csv = "Nhóm,Chỉ tiêu,Kết quả (%)\n";

    data.forEach((group) => {
      group.items.forEach((it) => {
        csv += `${group.title},${it.text.replace(/,/g, " ")},${it.progress}%\n`;
      });
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "chi_tieu.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto animate-fadeIn">
        {/* HEADER */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow-sm">Bộ chỉ tiêu — Nghị quyết số 01</h1>

          <div className="flex gap-3 mt-4 justify-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm chỉ tiêu..."
              className="w-1/2 border rounded-xl px-4 py-2 shadow-sm bg-white"
            />

            <button onClick={exportExcel} className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">Xuất Excel</button>
            <button onClick={() => window.print()} className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">In PDF</button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="space-y-6">
          {filtered.map((group) => (
            <section
              key={group.id}
              className={`border-l-4 ${COLORS[group.id as keyof typeof COLORS]} rounded-xl shadow bg-white p-5`}
            >
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggle(group.id)}>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">{GROUP_ICONS[group.id as keyof typeof GROUP_ICONS]}</span>
                  {group.title}
                </h2>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 shadow">{expanded.has(group.id) ? "Thu gọn" : "Mở"}</button>
              </div>

              {expanded.has(group.id) && (
                <table className="w-full mt-4 border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border w-10">#</th>
                      <th className="p-2 border text-left">Chỉ tiêu</th>
                      <th className="p-2 border w-32">% hoàn thành</th>
                    </tr>
                  </thead>

                  <tbody>
                    {group.items.map((it) => (
                      <tr key={it.id} className="border hover:bg-gray-50">
                        <td className="p-2 border text-center font-semibold text-indigo-700">{it.id}</td>
                        <td className="p-2 border">{it.text}</td>
                        <td className="p-2 border text-center">

                          {/* 1) INPUT SỬA % */}
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={it.progress}
                            onChange={(e) => {
                              const newVal = Number(e.target.value);
                              const updated = data.map((g) => ({
                                ...g,
                                items: g.items.map((x) => x.id === it.id && g.id === group.id ? { ...x, progress: newVal } : x),
                              }));
                              setData(updated);
                            }}
                            className="w-20 border rounded-lg px-2 py-1 text-center"
                          />

                          {/* 2) Progress bar */}
                          <div className="w-full h-2 bg-gray-200 rounded mt-2">
                            <div
                              className={`h-2 rounded transition-all ${
                                it.progress < 50 ? "bg-red-500" : it.progress < 80 ? "bg-yellow-500" : "bg-green-600"
                              }`}
                              style={{ width: `${it.progress}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}   

// End of file