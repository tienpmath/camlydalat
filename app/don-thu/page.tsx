// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { Table, Tag } from "antd";
// // // import { API_URL } from "@/lib/api";

// // // const ViewPage = () => {
// // //   const [data, setData] = useState([]);

// // //   const load = async () => {
// // //     const res = await fetch(`${API_URL}/donthu`);
// // //     const json = await res.json();
// // //     setData(json);
// // //     console.log("row.phanLoaiDon", json);
// // //   };

// // //   useEffect(() => {
// // //     load();
// // //   }, []);

// // //   // const columns = [
// // //   //   { title: "Tiêu đề", dataIndex: "title", key: "title" },
// // //   //   { title: "Người gửi", dataIndex: "senderName", key: "senderName" },
// // //   //   { title: "SĐT", dataIndex: "senderPhone", key: "senderPhone" },

// // //   //   {
// // //   //     title: "Nguồn nhận",
// // //   //     dataIndex: "nguonNhan",
// // //   //     key: "nguonNhan",
// // //   //     render: (v: string) => <Tag color="purple">{v}</Tag>,
// // //   //   },

// // //   //   {
// // //   //     title: "Phân loại",
// // //   //     dataIndex: "phanLoaiDon",
// // //   //     key: "phanLoaiDon",
// // //   //     render: (v: string) => <Tag color="cyan">{v}</Tag>,
// // //   //   },

// // //   //   {
// // //   //     title: "Ngày ban hành",
// // //   //     dataIndex: "ngayBanHanh",
// // //   //     key: "ngayBanHanh",
// // //   //     render: (date: string) =>
// // //   //       date ? new Date(date).toLocaleDateString("vi-VN") : "—",
// // //   //   },

// // //   //   {
// // //   //     title: "Đơn vị xử lý",
// // //   //     dataIndex: "assignedUnit",
// // //   //     key: "assignedUnit",
// // //   //     render: (units: string[]) =>
// // //   //       units && units.length > 0 ? (
// // //   //         units.map((u) => (
// // //   //           <Tag color="blue" key={u} className="mr-1">
// // //   //             {u}
// // //   //           </Tag>
// // //   //         ))
// // //   //       ) : (
// // //   //         <span>Chưa phân công</span>
// // //   //       ),
// // //   //   },

// // //   //   {
// // //   //     title: "Trạng thái",
// // //   //     dataIndex: "status",
// // //   //     key: "status",
// // //   //     render: (status: string) => {
// // //   //       const color =
// // //   //         status === "pending"
// // //   //           ? "orange"
// // //   //           : status === "processing"
// // //   //           ? "blue"
// // //   //           : status === "done"
// // //   //           ? "green"
// // //   //           : "red";

// // //   //       const label =
// // //   //         status === "pending"
// // //   //           ? "Đang chờ"
// // //   //           : status === "processing"
// // //   //           ? "Đang xử lý"
// // //   //           : status === "done"
// // //   //           ? "Hoàn tất"
// // //   //           : "Lỗi";

// // //   //       return <Tag color={color}>{label}</Tag>;
// // //   //     },
// // //   //   },

// // //   //   {
// // //   //     title: "Hành động",
// // //   //     key: "action",
// // //   //     render: (_: any, row: any) => (
// // //   //       <div className="flex gap-2">
// // //   //         <a href={`/don-thu/view/${row._id}`} className="text-blue-600">
// // //   //           👁️ Xem
// // //   //         </a>
// // //   //         <a href={`/don-thu/edit/${row._id}`} className="text-orange-500">
// // //   //           ✏️ Sửa
// // //   //         </a>
// // //   //       </div>
// // //   //     ),
// // //   //   },
// // //   // ];

// // //  const columns = [
// // //     { title: "Tiêu đề", dataIndex: "title", key: "title" },
// // //     { title: "Người gửi", dataIndex: "senderName", key: "senderName" },
// // //     { title: "SĐT", dataIndex: "senderPhone", key: "senderPhone" },
// // //     { title: "Đơn vị nhận xử lý", dataIndex: "assignedUnit", key: "assignedUnit" },
// // //     { title: "Phân loại", dataIndex: "phanLoaiDon", key: "phanLoaiDon" },
// // //     { title: "Ngày ban hành", dataIndex: "ngayBanHanh", key: "ngayBanHanh" },
// // //     { title: "Kết quả", dataIndex: "ketQuaXuLy", key: "ketQuaXuLy" },

// // //     {
// // //       title: "Trạng thái",
// // //       dataIndex: "status",
// // //       key: "status",
// // //       render: (status: string) => {
// // //         const color =
// // //           status === "pending"
// // //             ? "orange"
// // //             : status === "processing"
// // //             ? "blue"
// // //             : status === "done"
// // //             ? "green"
// // //             : "red";
// // //         const label =
// // //           status === "pending"
// // //             ? "Đang chờ"
// // //             : status === "processing"
// // //             ? "Đang xử lý"
// // //             : status === "done"
// // //             ? "Hoàn tất"
// // //             : "Lỗi";
// // //         return <Tag color={color}>{label}</Tag>;
// // //       },
// // //     },

// // //     {
// // //       title: "Hành động",
// // //       key: "action",
// // //       render: (_: any, row: any) => (
// // //         <div className="flex gap-2">
// // //           <a href={`/don-thu/view/${row._id}`} className="text-blue-600">
// // //             👁️ Xem
// // //           </a>
// // //           <a href={`/don-thu/edit/${row._id}`} className="text-orange-500">
// // //             ✏️ Sửa
// // //           </a>
// // //         </div>
// // //       ),
// // //     },
// // //   ];
// // //    // 🟧 🟥 Điều kiện tô màu dòng
// // //   const rowClassName = (row: any) => {
// // //     if (!row.ngayBanHanh || row.phanLoaiDon) return "";
// // // console.log("row.phanLoaiDon", row.ngayBanHanh);
// // //     const issued = new Date(row.ngayBanHanh);
// // //     const now = new Date();
// // //     const diffDays = Math.floor((now.getTime() - issued.getTime()) / (1000 * 60 * 60 * 24));

// // //     // Kiến nghị + Phản ánh → 20 ngày → cam
// // //     if (["kiến nghị", "phản ánh"].includes(row.phanLoaiDon) && diffDays > 20)
// // //       return "row-warning"; // cam

// // //     // Khiếu nại + Tố cáo → 30 ngày → đỏ
// // //     if (["khiếu nại", "tố cáo"].includes(row.phanLoaiDon) && diffDays > 30)
// // //       return "row-danger"; // đỏ

// // //     return "";
// // //   };


// // //   return (
// // //     // <div className="bg-white p-4 rounded shadow">
// // //     //   <h2 className="text-xl font-bold mb-4">📑 Danh sách đơn thư</h2>
// // //     //   <Table
// // //     //     columns={columns}
// // //     //     dataSource={data}
// // //     //     rowKey="_id"
// // //     //     pagination={{ pageSize: 10 }}
// // //     //   />
// // //     // </div>
// // //      <>
// // //       {/* CSS màu dòng */}
// // //       <style>{`
// // //         .row-warning td {
// // //           background-color: #fff7e6 !important; /* cam nhạt */
// // //         }
// // //         .row-danger td {
// // //           background-color: #ffe6e6 !important; /* đỏ nhạt */
// // //         }
// // //       `}</style>

// // //       <div className="bg-white p-4 rounded shadow">
// // //         <h2 className="text-xl font-bold mb-4">📑 Danh sách đơn thư</h2>

// // //         <Table
// // //           columns={columns}
// // //           dataSource={data}
// // //           rowKey="_id"
// // //           pagination={{ pageSize: 5 }}
// // //           rowClassName={rowClassName}
// // //         />
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ViewPage;
// // "use client";

// // import { useEffect, useState } from "react";
// // import { Table, Tag } from "antd";
// // import { API_URL } from "@/lib/api";

// // const ViewPage = () => {
// //   const [data, setData] = useState<any[]>([]);

// //   const load = async () => {
// //     const res = await fetch(`${API_URL}/donthu`);
// //     const json = await res.json();
// //     setData(json);
// //   };

// //   useEffect(() => {
// //     load();
// //   }, []);

// //   const columns = [
// //     { title: "Tiêu đề", dataIndex: "title", key: "title" },
// //     { title: "Người gửi", dataIndex: "senderName", key: "senderName" },
// //     { title: "SĐT", dataIndex: "senderPhone", key: "senderPhone" },

// //     {
// //       title: "Nguồn nhận",
// //       dataIndex: "nguonNhan",
// //       key: "nguonNhan",
// //       render: (v: string) => <Tag color="purple">{v}</Tag>,
// //     },

// //     {
// //       title: "Phân loại",
// //       dataIndex: "phanLoaiDon",
// //       key: "phanLoaiDon",
// //       render: (v: string) => <Tag color="cyan">{v}</Tag>,
// //     },

// //     {
// //       title: "Ngày ban hành",
// //       dataIndex: "ngayBanHanh",
// //       key: "ngayBanHanh",
// //       render: (date: string) =>
// //         date ? new Date(date).toLocaleDateString("vi-VN") : "—",
// //     },

// //     {
// //       title: "Đơn vị xử lý",
// //       dataIndex: "assignedUnit",
// //       key: "assignedUnit",
// //       render: (units: string[]) =>
// //         units && units.length > 0 ? (
// //           units.map((u) => (
// //             <Tag color="blue" key={u} className="mr-1">
// //               {u}
// //             </Tag>
// //           ))
// //         ) : (
// //           <span>Chưa phân công</span>
// //         ),
// //     },

// //     {
// //       title: "Kết quả",
// //       dataIndex: "ketQuaXuLy",
// //       key: "ketQuaXuLy",
// //       render: (v: string) =>
// //         v && v.trim().length > 0 ? (
// //           <span className="whitespace-pre-line">{v}</span>
// //         ) : (
// //           <i>Chưa có</i>
// //         ),
// //     },

// //     {
// //       title: "Trạng thái",
// //       dataIndex: "status",
// //       key: "status",
// //       render: (status: string) => {
// //         const color =
// //           status === "pending"
// //             ? "orange"
// //             : status === "processing"
// //             ? "blue"
// //             : status === "done"
// //             ? "green"
// //             : "red";

// //         const label =
// //           status === "pending"
// //             ? "Đang chờ"
// //             : status === "processing"
// //             ? "Đang xử lý"
// //             : status === "done"
// //             ? "Hoàn tất"
// //             : "Lỗi";

// //         return <Tag color={color}>{label}</Tag>;
// //       },
// //     },

// //     {
// //       title: "Hành động",
// //       key: "action",
// //       render: (_: any, row: any) => (
// //         <div className="flex gap-2">
// //           <a href={`/don-thu/view/${row._id}`} className="text-blue-600">
// //             👁️ Xem
// //           </a>
// //           <a href={`/don-thu/edit/${row._id}`} className="text-orange-500">
// //             ✏️ Sửa
// //           </a>
// //         </div>
// //       ),
// //     },
// //    ];
// //    const rowClassName = (row: any) => {
// //   // 1️⃣ Nếu đã hoàn tất → xanh
// //   if (row.status === "done") return "row-done";

// //   // 2️⃣ Nếu chưa có ngày ban hành hoặc đã có kết quả → không tô màu
// //   if (!row.ngayBanHanh || (row.ketQuaXuLy && row.ketQuaXuLy.trim() !== "")) return "";

// //   const issuedDate = new Date(row.ngayBanHanh);
// //   if (isNaN(issuedDate.getTime())) return "";

// //   const now = new Date();
// //   const diffDays = Math.floor((now.getTime() - issuedDate.getTime()) / (1000 * 60 * 60 * 24));

// //   const loai = row.phanLoaiDon?.toLowerCase() || "";

// //   // Kiến nghị / Phản ánh → >20 ngày → cam
// //   if (["kiến nghị", "phản ánh"].includes(loai) && diffDays > 20) return "row-warning";

// //   // Khiếu nại / Tố cáo → >30 ngày → đỏ
// //   if (["khiếu nại", "tố cáo"].includes(loai) && diffDays > 30) return "row-danger";

// //   return "";
// // };
// //   // // 🔥 rowClassName để tô màu cam/đỏ
// //   // const rowClassName = (row: any) => {
// //   //   if (!row.ngayBanHanh || row.ketQuaXuLy) return "";

// //   //   const issuedDate = new Date(row.ngayBanHanh);
// //   //   const now = new Date();
// //   //   const diffDays = Math.floor((now.getTime() - issuedDate.getTime()) / (1000 * 60 * 60 * 24));

// //   //   // Kiến nghị / Phản ánh → 20 ngày → cam
// //   //   if (["kiến nghị", "phản ánh"].includes(row.phanLoaiDon) && diffDays > 20)
// //   //     return "row-warning";

// //   //   // Khiếu nại / Tố cáo → 30 ngày → đỏ
// //   //   if (["khiếu nại", "tố cáo"].includes(row.phanLoaiDon) && diffDays > 30)
// //   //     return "row-danger";

// //   //   return "";
// //   // };

// //   return (
// //     <>
// //       {/* CSS màu dòng */}
// //       <style>{`
// //         .row-done td {
// //   background-color: #e6ffed !important; /* xanh nhạt */
// // }
// //         .row-warning td {
// //           background-color: #fff7e6 !important; /* cam nhạt */
// //         }
// //         .row-danger td {
// //           background-color: #ffe6e6 !important; /* đỏ nhạt */
// //         }
// //       `}</style>

// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-xl font-bold mb-4">📑 Danh sách đơn thư</h2>

// //         <Table
// //           columns={columns}
// //           dataSource={data}
// //           rowKey="_id"
// //           pagination={{ pageSize: 10 }}
// //           rowClassName={rowClassName} // ✅ truyền hàm đúng
// //         />
// //       </div>
// //     </>
// //   );
// // };

// // export default ViewPage;
// "use client";

// import { useEffect, useState } from "react";
// import { Table, Tag, Card, Row, Col } from "antd";
// import { API_URL } from "@/lib/api";

// const ViewPage = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [stats, setStats] = useState<any>({
//     total: 0,
//     done: 0,
//     pending: 0,
//     unitStats: {} as Record<string, number>,
//   });

//   const load = async () => {
//     const res = await fetch(`${API_URL}/donthu`);
//     const json = await res.json();
//     setData(json);

//     // 🟢 Tính thống kê
//     const total = json.length;
//     const done = json.filter((d: any) => ["done", "hoàn tất"].includes((d.status || "").toLowerCase())).length;
//     const pending = total - done;

//     // const unitStats: Record<string, number> = {};
//     // json.forEach((d: any) => {
//     //   if (d.assignedUnit && d.assignedUnit.length > 0) {
//     //     d.assignedUnit.forEach((u: string) => {
//     //       unitStats[u] = (unitStats[u] || 0) + 1;
//     //     });
//     //   }
//     // });

//   const unitStats: Record<string, { total: number; pending: number }> = {};
  
// json.forEach((d: any) => {
//   if (d.assignedUnit && d.assignedUnit.length > 0) {
//     d.assignedUnit.forEach((u: string) => {
//       if (!unitStats[u]) unitStats[u] = { total: 0, pending: 0 };
//       unitStats[u].total += 1;
//       const s = (d.status || "").toLowerCase();
//       if (!["done", "hoàn tất"].includes(s)) unitStats[u].pending += 1;
//     });
//   }
// });
// setStats({ total, done, pending, unitStats });
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const columns = [
//     { title: "Tiêu đề", dataIndex: "title", key: "title" },
//     { title: "Người gửi", dataIndex: "senderName", key: "senderName" },
//     { title: "SĐT", dataIndex: "senderPhone", key: "senderPhone" },
//     {
//       title: "Nguồn nhận",
//       dataIndex: "nguonNhan",
//       key: "nguonNhan",
//       render: (v: string) => <Tag color="purple">{v}</Tag>,
//     },
//     {
//       title: "Phân loại",
//       dataIndex: "phanLoaiDon",
//       key: "phanLoaiDon",
//       render: (v: string) => <Tag color="cyan">{v}</Tag>,
//     },
//     {
//       title: "Ngày ban hành",
//       dataIndex: "ngayBanHanh",
//       key: "ngayBanHanh",
//       render: (date: string) =>
//         date ? new Date(date).toLocaleDateString("vi-VN") : "—",
//     },
//     {
//       title: "Đơn vị xử lý",
//       dataIndex: "assignedUnit",
//       key: "assignedUnit",
//       render: (units: string[]) =>
//         units && units.length > 0 ? (
//           units.map((u) => (
//             <Tag color="blue" key={u} className="mr-1">
//               {u}
//             </Tag>
//           ))
//         ) : (
//           <span>Chưa phân công</span>
//         ),
//     },
//     {
//       title: "Kết quả",
//       dataIndex: "ketQuaXuLy",
//       key: "ketQuaXuLy",
//       render: (v: string) =>
//         v && v.trim().length > 0 ? (
//           <span className="whitespace-pre-line">{v}</span>
//         ) : (
//           <i>Chưa có</i>
//         ),
//     },
//     {
//       title: "Trạng thái",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => {
//         const color =
//           status === "pending"
//             ? "orange"
//             : status === "processing"
//             ? "blue"
//             : status === "done" || status === "hoàn tất"
//             ? "green"
//             : "red";

//         const label =
//           status === "pending"
//             ? "Đang chờ"
//             : status === "processing"
//             ? "Đang xử lý"
//             : status === "done" || status === "hoàn tất"
//             ? "Hoàn tất"
//             : "Lỗi";

//         return <Tag color={color}>{label}</Tag>;
//       },
//     },
//     {
//       title: "Hành động",
//       key: "action",
//       render: (_: any, row: any) => (
//         <div className="flex gap-2">
//           <a href={`/don-thu/view/${row._id}`} className="text-blue-600">
//             👁️ Xem
//           </a>
//           <a href={`/don-thu/edit/${row._id}`} className="text-orange-500">
//             ✏️ Sửa
//           </a>
//         </div>
//       ),
//     },
//   ];

//   const rowClassName = (row: any) => {
//     const status = (row.status || "").toLowerCase();
//     if (status === "done" || status === "hoàn tất") return "row-done";
//     if (!row.ngayBanHanh || (row.ketQuaXuLy && row.ketQuaXuLy.trim() !== "")) return "";

//     const issuedDate = new Date(row.ngayBanHanh);
//     if (isNaN(issuedDate.getTime())) return "";
//     const now = new Date();
//     const diffDays = Math.floor((now.getTime() - issuedDate.getTime()) / (1000 * 60 * 60 * 24));

//     const loai = (row.phanLoaiDon || "").toLowerCase();
//     if (["kiến nghị", "phản ánh"].includes(loai) && diffDays > 20) return "row-warning";
//     if (["khiếu nại", "tố cáo"].includes(loai) && diffDays > 30) return "row-danger";
//     return "";
//   };

//   return (
//     <>
//       <style>{`
//         .row-done td { background-color: #e6ffed !important; }
//         .row-warning td { background-color: #fff7e6 !important; }
//         .row-danger td { background-color: #ffe6e6 !important; }
//       `}</style>

//       <div className="bg-white p-4 rounded shadow mb-4">
//         <h2 className="text-xl font-bold mb-2">📊 Thống kê đơn thư</h2>
//         <Row gutter={[16, 16]}>
//           <Col span={6}><Card>Tổng số đơn: {stats.total}</Card></Col>
//           <Col span={6}><Card>Đơn chưa xong: {stats.pending}</Card></Col>
//           <Col span={6}><Card>Đơn đã xong: {stats.done}</Card></Col>
//           <Col span={6}>
//             <Card>
//   <div>Thống kê theo cơ quan:</div>
//   {Object.entries(stats.unitStats as Record<string, { total: number; pending: number }>).map(([u, counts]) => (
//     <div key={u}>
//       <b>{u}:</b> tổng {counts.total}, chưa hoàn thành {counts.pending}
//     </div>
//   ))}
// </Card>
//           </Col>
//         </Row>
//       </div>

//       <div className="bg-white p-4 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">📑 Danh sách đơn thư</h2>
//         <Table
//           columns={columns}
//           dataSource={data}
//           rowKey="_id"
//           pagination={{ pageSize: 10 }}
//           rowClassName={rowClassName}
//         />
//       </div>
//     </>
//   );
// };

// export default ViewPage;


"use client";

import { useEffect, useState } from "react";
import { Table, Tag, Card, Row, Col, Button } from "antd";
import * as XLSX from "xlsx";
import { API_URL } from "@/lib/api";
import { Document, Packer, Paragraph,Table as DocxTable, TableCell, TableRow, WidthType, ShadingType, TextRun } from "docx";
import { saveAs } from "file-saver";


const ViewPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    total: 0,
    done: 0,
    pending: 0,
    unitStats: {} as Record<string, { total: number; pending: number }>,
  });

  const load = async () => {
    const res = await fetch(`${API_URL}/donthu`);
    const json = await res.json();
    setData(json);

    // 🔹 Thống kê
    const total = json.length;
    const done = json.filter((d: any) => ["done", "hoàn tất"].includes((d.status || "").toLowerCase())).length;
    const pending = total - done;

    const unitStats: Record<string, { total: number; pending: number }> = {};
    json.forEach((d: any) => {
      if (d.assignedUnit && d.assignedUnit.length > 0) {
        d.assignedUnit.forEach((u: string) => {
          if (!unitStats[u]) unitStats[u] = { total: 0, pending: 0 };
          unitStats[u].total += 1;
          const s = (d.status || "").toLowerCase();
          if (!["done", "hoàn tất"].includes(s)) unitStats[u].pending += 1;
        });
      }
    });

    setStats({ total, done, pending, unitStats });
  };

  useEffect(() => {
    load();
  }, []);
// 🔹 Xuất Excel

const exportToExcel = () => {
  const exportData = data.map((row) => ({
    "Tiêu đề": row.title,
    "Người gửi": row.senderName,
    "SĐT": row.senderPhone,
    "Nguồn nhận": row.nguonNhan,
    "Phân loại": row.phanLoaiDon,
    "Ngày ban hành": row.ngayBanHanh ? new Date(row.ngayBanHanh).toLocaleDateString("vi-VN") : "",
    "Đơn vị xử lý": row.assignedUnit?.join(", ") || "",
    "Kết quả": row.ketQuaXuLy || "",
    "Trạng thái": row.status || "",
  }));

  const ws1 = XLSX.utils.json_to_sheet(exportData);
const unitData = Object.entries(stats.unitStats as Record<string, { total: number; pending: number }>).map(
  ([u, counts]) => ({
    "Đơn vị": u,
    "Tổng số đơn": counts.total,
    "Chưa hoàn thành": counts.pending,
  })
);

  // Sheet 2: Thống kê theo cơ quan từ state.stats
  // const unitData = Object.entries(stats.unitStats).map(([u, counts]) => ({
  //   "Đơn vị": u,
  //   "Tổng số đơn": counts.total,
  //   "Chưa hoàn thành": counts.pending,
  // }));

  const ws2 = XLSX.utils.json_to_sheet(unitData);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws1, "DanhSachDonThu");
  XLSX.utils.book_append_sheet(wb, ws2, "ThongKeDonVi");

  const buf = XLSX.write(wb, { type: "array", bookType: "xlsx" });
  const file = new Blob([buf], { type: "application/octet-stream" });
  saveAs(file, "DanhSachDonThu.xlsx");
};

const exportToWord = () => {
 
  const tableRows = [];

  // Header
  tableRows.push(
    new TableRow({
      children: columns.map((col) =>
      new TableCell({
  width: { size: 100 / columns.length, type: WidthType.PERCENTAGE },
  children: [
    new Paragraph({
      children: [new TextRun({ text: col.title, bold: true })], // ✅ đặt bold trong TextRun
    }),
  ],
})
      ),
    })
  );

  // Rows
  data.forEach((row) => {
    const status = (row.status || "").toLowerCase();
    let bgColor = "FFFFFF"; // mặc định trắng
    if (status === "pending") bgColor = "FFFF99";
    else if (status === "processing") bgColor = "99CCFF";
    else if (status === "done" || status === "hoàn tất") bgColor = "CCFFCC";
    else bgColor = "FFCCCC";

    tableRows.push(
      new TableRow({
        children: columns.map((col) => {
          let value: string = "";
          switch (col.dataIndex) {
            case "title": value = row.title; break;
            case "senderName": value = row.senderName; break;
            case "senderPhone": value = row.senderPhone; break;
            case "nguonNhan": value = row.nguonNhan; break;
            case "phanLoaiDon": value = row.phanLoaiDon; break;
            case "ngayBanHanh": value = row.ngayBanHanh ? new Date(row.ngayBanHanh).toLocaleDateString("vi-VN") : ""; break;
            case "assignedUnit": value = row.assignedUnit?.join(", ") || ""; break;
            case "ketQuaXuLy": value = row.ketQuaXuLy || ""; break;
            case "status": value = row.status || ""; break;
            default: value = "";
          }

       return new TableCell({
  shading: { type: ShadingType.CLEAR, fill: col.dataIndex === "status" ? bgColor : "FFFFFF" },
  children: [new Paragraph(value || "")], // ✅ đảm bảo string
});
        }),
      })
    );
  });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({ text: "📑 Danh sách đơn thư", heading: "Heading1" }),
          new DocxTable({ rows: tableRows, width: { size: 100, type: WidthType.PERCENTAGE } }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "DanhSachDonThu.docx");
  });
};
  // 🔹 Nút mới: Xuất Excel với màu trạng thái
const exportExcelWithColors = () => {
  const wb = XLSX.utils.book_new();

  // Dữ liệu
  const exportData = data.map((row) => ({
    "Tiêu đề": row.title,
    "Người gửi": row.senderName,
    "SĐT": row.senderPhone,
    "Nguồn nhận": row.nguonNhan,
    "Phân loại": row.phanLoaiDon,
    "Ngày ban hành": row.ngayBanHanh ? new Date(row.ngayBanHanh).toLocaleDateString("vi-VN") : "",
    "Đơn vị xử lý": row.assignedUnit?.join(", ") || "",
    "Kết quả": row.ketQuaXuLy || "",
    "Trạng thái": row.status || "",
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);

  // Màu trạng thái
  Object.keys(exportData).forEach((_, rowIdx) => {
    const row = data[rowIdx];
    const status = (row.status || "").toLowerCase();
    let fillColor = "";

    if (status === "pending") fillColor = "FFFF99"; // cam nhạt
    else if (status === "processing") fillColor = "99CCFF"; // xanh dương nhạt
    else if (status === "done" || status === "hoàn tất") fillColor = "CCFFCC"; // xanh lá nhạt
    else fillColor = "FFCCCC"; // đỏ nhạt

    const cellRef = `J${rowIdx + 2}`; // cột J = Trạng thái, +2 vì header row
    if (!ws[cellRef]) return;
    ws[cellRef].s = {
      fill: { fgColor: { rgb: fillColor } },
    };
  });

  XLSX.utils.book_append_sheet(wb, ws, "DanhSachDonThu_Mau");
  const buf = XLSX.write(wb, { type: "array", bookType: "xlsx" });
  saveAs(new Blob([buf], { type: "application/octet-stream" }), "DanhSachDonThu_Mau.xlsx");
};
  const columns = [
    { title: "Tiêu đề", dataIndex: "title", key: "title" },
    { title: "Người gửi", dataIndex: "senderName", key: "senderName" },
    { title: "SĐT", dataIndex: "senderPhone", key: "senderPhone" },
    {
      title: "Nguồn nhận",
      dataIndex: "nguonNhan",
      key: "nguonNhan",
      render: (v: string) => <Tag color="purple">{v}</Tag>,
    },
    {
      title: "Phân loại",
      dataIndex: "phanLoaiDon",
      key: "phanLoaiDon",
      render: (v: string) => <Tag color="cyan">{v}</Tag>,
    },
    {
      title: "Ngày ban hành",
      dataIndex: "ngayBanHanh",
      key: "ngayBanHanh",
      render: (date: string) =>
        date ? new Date(date).toLocaleDateString("vi-VN") : "—",
    },
    {
      title: "Đơn vị xử lý",
      dataIndex: "assignedUnit",
      key: "assignedUnit",
      render: (units: string[]) =>
        units && units.length > 0 ? (
          units.map((u) => (
            <Tag color="blue" key={u} className="mr-1">
              {u}
            </Tag>
          ))
        ) : (
          <span>Chưa phân công</span>
        ),
    },
    {
      title: "Kết quả",
      dataIndex: "ketQuaXuLy",
      key: "ketQuaXuLy",
      render: (v: string) =>
        v && v.trim().length > 0 ? (
          <span className="whitespace-pre-line">{v}</span>
        ) : (
          <i>Chưa có</i>
        ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const color =
          status === "pending"
            ? "orange"
            : status === "processing"
            ? "blue"
            : status === "done" || status === "hoàn tất"
            ? "green"
            : "red";

        const label =
          status === "pending"
            ? "Đang chờ"
            : status === "processing"
            ? "Đang xử lý"
            : status === "done" || status === "hoàn tất"
            ? "Hoàn tất"
            : "Lỗi";

        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, row: any) => (
        <div className="flex gap-2">
          <a href={`/don-thu/view/${row._id}`} className="text-blue-600">
            👁️ Xem
          </a>
          <a href={`/don-thu/edit/${row._id}`} className="text-orange-500">
            ✏️ Sửa
          </a>
        </div>
      ),
    },
  ];

  const rowClassName = (row: any) => {
    const status = (row.status || "").toLowerCase();
    if (status === "done" || status === "hoàn tất") return "row-done";
    if (!row.ngayBanHanh || (row.ketQuaXuLy && row.ketQuaXuLy.trim() !== "")) return "";

    const issuedDate = new Date(row.ngayBanHanh);
    if (isNaN(issuedDate.getTime())) return "";
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - issuedDate.getTime()) / (1000 * 60 * 60 * 24));

    const loai = (row.phanLoaiDon || "").toLowerCase();
    if (["kiến nghị", "phản ánh"].includes(loai) && diffDays > 20) return "row-warning";
    if (["khiếu nại", "tố cáo"].includes(loai) && diffDays > 30) return "row-danger";
    return "";
  };

  return (
    <>
      <style>{`
        .row-done td { background-color: #e6ffed !important; }
        .row-warning td { background-color: #fff7e6 !important; }
        .row-danger td { background-color: #ffe6e6 !important; }
      `}</style>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">📊 Thống kê đơn thư</h2>
        <Row gutter={[16, 16]}>
          <Col span={6}><Card>Tổng số đơn: {stats.total}</Card></Col>
          <Col span={6}><Card>Đơn chưa xong: {stats.pending}</Card></Col>
          <Col span={6}><Card>Đơn đã xong: {stats.done}</Card></Col>
          <Col span={6}>
            <Card>
              <div>Thống kê theo cơ quan:</div>
              {Object.entries(stats.unitStats as Record<string, { total: number; pending: number }>).map(([u, counts]) => (
                <div key={u}>
                  <b>{u}:</b> tổng {counts.total}, chưa hoàn thành {counts.pending}
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>

     <div className="bg-white p-4 rounded shadow mb-4 flex gap-2 justify-end">
  <Button type="primary" onClick={exportToExcel}>📥 Xuất Excel</Button>
  <Button type="default" onClick={exportExcelWithColors}>📊 Xuất Excel màu trạng thái</Button>
    <Button type="dashed" onClick={exportToWord}>📄 Xuất Word</Button>

</div>


      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">📑 Danh sách đơn thư</h2>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="_id"
          pagination={{ pageSize: 10 }}
          rowClassName={rowClassName}
        />
      </div>
    </>
  );
};

export default ViewPage;
