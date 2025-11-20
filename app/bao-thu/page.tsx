"use client";

import { useRef } from "react";
import { Button } from "antd";
import { DS_CANBO } from "../constants/donthu";
import { DSBITHU } from "../constants/donthu";

export default function BaoThuNangCao() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!printRef.current) return;
    const printContent = printRef.current.innerHTML;
    const newWin = window.open("", "_blank", "width=1000,height=800");
    if (!newWin) return;
    newWin.document.write(`
      <html>
        <head>
          <title>In bao thư nâng cao</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .section-title { margin-top: 20px; margin-bottom: 10px; font-size: 18px; font-weight: bold; }
            .envelopes { display: flex; flex-wrap: wrap; gap: 10px; }
            .envelope {
              border: 1px solid #000;
              padding: 10px;
              width: 48%; /* 2 cột */
              box-sizing: border-box;
              margin-bottom: 10px;
              page-break-inside: avoid;
            }
            .name { font-weight: bold; font-size: 14px; }
            .role { font-style: italic; font-size: 13px; color: #555; }
            .address { font-size: 13px; margin-top: 4px; }
            @media print {
              body { padding: 0; }
              .envelope { border: 1px solid #000; }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWin.document.close();
    newWin.focus();
    newWin.print();
    newWin.close();
  };

  const renderEnvelopes = (data: any[], highlightColor?: string) => {
    return data.flatMap((group) =>
      group.items.map((item: any, index: number) => (
        <div
          className="envelope"
          key={`${group.group}-${index}`}
          style={{ backgroundColor: highlightColor || "#fff" }}
        >
          <div className="name">{item.name}</div>
          <div className="role">{item.role}</div>
          {item.address && <div className="address">{item.address}</div>}
        </div>
      ))
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Trộn thư - In bao thư nâng cao</h1>
      <Button type="primary" onClick={handlePrint} style={{ marginBottom: 20 }}>
        In tất cả
      </Button>

      <div ref={printRef}>
        <div className="section-title">Bí thư chi bộ</div>
        <div className="envelopes">{renderEnvelopes(DSBITHU, "#FFF9C4")}</div>

        <div className="section-title">Cán bộ</div>
        <div className="envelopes">{renderEnvelopes(DS_CANBO, "#C8E6C9")}</div>

        <div className="section-title">Cán bộ lãnh đạo</div>
      
      </div>
    </div>
  );
}
