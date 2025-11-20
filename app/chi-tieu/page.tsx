'use client';
import React, { useState } from "react";

// ------------------------------
//  BẢN HOÀN CHỈNH — GIAO DIỆN ĐẸP (UI PREMIUM)
//  Tailwind + Card + Icon + Màu chủ đề + Animation
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

  const data = [
    {
      id: "kinh-te-xa-hoi",
      title: "1. Chỉ tiêu kinh tế - xã hội",
      items: [
        { id: 1, text: "Thu ngân sách đạt kế hoạch." },
        {
          id: 2,
          text: "Đảm bảo quốc phòng - an ninh, giữ vững ổn định chính trị, trật tự, an toàn xã hội; chuẩn bị tốt công tác tuyển quân năm 2026.",
        },
        { id: 3, text: "Tỷ lệ tham gia Bảo hiểm y tế toàn dân: 96%." },
        { id: 4, text: "Tỷ lệ tăng dân số tự nhiên dưới 0,1%; trẻ em suy dinh dưỡng dưới 6,0%." },
        {
          id: 5,
          text: "Triển khai tốt công tác quản lý trật tự xây dựng, trật tự đô thị và an toàn giao thông; duy trì và xây dựng mô hình, tuyến đường VMĐT, ATGT.",
        },
        { id: 6, text: "Duy trì công tác giảm nghèo bền vững. Không để phát sinh hộ nghèo và hộ cận nghèo theo tiêu chí mới." },
        { id: 7, text: "Duy trì các trường trên địa bàn đạt chuẩn quốc gia." },
        { id: 8, text: "Duy trì Trạm y tế phường đạt chuẩn quốc gia." },
        {
          id: 9,
          text: "Tỷ lệ hộ gia đình văn hóa đạt 98%; Tổ Dân phố văn hóa đạt 100%. Xây dựng khu dân cư \"đoàn kết, ấm no, hạnh phúc\".",
        },
        { id: 10, text: "Các cơ quan hành chính, sự nghiệp thuộc phường đạt cơ quan văn hóa; giữ vững danh hiệu phường văn minh đô thị." },
      ],
    },
    {
      id: "xay-dung-dang",
      title: "2. Chỉ tiêu xây dựng Đảng, hệ thống chính trị",
      items: [
        {
          id: 1,
          text: "100% cán bộ, đảng viên nghiêm túc tu dưỡng, rèn luyện đạo đức, lối sống; học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh và thực hiện các quy định về nêu gương.",
        },
        {
          id: 2,
          text: "Đảng ủy, Ủy ban Kiểm tra Đảng ủy và 100% tổ chức Đảng trực thuộc thực hiện hiệu quả chương trình, kế hoạch kiểm tra, giám sát, tự kiểm tra theo quy định.",
        },
        {
          id: 3,
          text: "90% tổ chức Đảng trực thuộc và đảng viên được đánh giá, xếp loại từ hoàn thành tốt nhiệm vụ trở lên; trong đó 25% tổ chức Đảng hoàn thành xuất sắc nhiệm vụ.",
        },
        { id: 4, text: "Phấn đấu đạt 100% chỉ tiêu về phát triển đảng theo kế hoạch." },
        { id: 5, text: "Đảng bộ và tập thể Ban Thường vụ Đảng ủy được đánh giá, xếp loại từ hoàn thành tốt nhiệm vụ trở lên." },
      ],
    },
  ];

  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(() => new Set());

  const toggle = (id) => {
    const s = new Set(expanded);
    s.has(id) ? s.delete(id) : s.add(id);
    setExpanded(s);
  };

  const filtered = data.map((group) => ({
    ...group,
    items: group.items.filter((it) => it.text.toLowerCase().includes(query.toLowerCase())),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto animate-fadeIn">
        {/* HEADER */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow-sm">
            Bộ chỉ tiêu — Nghị quyết số 01
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Giao diện đẹp — có tìm kiếm, hiệu ứng và phân nhóm màu sắc.
          </p>

          <div className="flex gap-3 mt-4 justify-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm chỉ tiêu..."
              className="w-1/2 border rounded-xl px-4 py-2 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />

            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700"
            >
              In / Lưu PDF
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="space-y-6">
          {filtered.map((group) => (
            <section
              key={group.id}
              className={`border-l-4 ${COLORS[group.id]} rounded-xl shadow bg-white p-5 transition-all duration-200 hover:shadow-md`}
            >
              {/* GROUP HEADER */}
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggle(group.id)}>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">{GROUP_ICONS[group.id]}</span>
                  {group.title}
                </h2>

                <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 shadow">
                  {expanded.has(group.id) ? "Thu gọn" : "Mở"}
                </button>
              </div>

              {/* ITEMS */}
              {expanded.has(group.id) && (
                <ul className="mt-4 space-y-3 animate-fadeIn">
                  {group.items.map((it) => (
                    <li key={it.id} className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
                      <div className="font-semibold text-indigo-700">{it.id})</div>
                      <div className="text-gray-700 mt-1 leading-relaxed">{it.text}</div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </main>

        <footer className="mt-8 text-xs text-gray-500 text-center">
          Giao diện đã tối ưu màu sắc, bóng đổ và hiệu ứng.
        </footer>
      </div>
    </div>
  );
}

// ------------------------------
// Animation utilities (Tailwind cần khai báo trong globals.css)
// ------------------------------
// @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }