import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Item {
  name: string;
  role: string;
  phone: string;
}

interface Group {
  group: string;
  items: Item[];
}

export const exportToExcel = (data: Group[], fileName: string) => {
  const wb = XLSX.utils.book_new();

  data.forEach((group) => {
    const wsData = group.items.map((item, index) => ({
      STT: index + 1,
      "Họ và tên": item.name,
      "Chức vụ / Vai trò": item.role,
      "Số điện thoại": item.phone,
    }));

    const ws = XLSX.utils.json_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, group.group.slice(0, 31)); // tên sheet max 31 ký tự
  });

  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  saveAs(new Blob([wbout], { type: "application/octet-stream" }), `${fileName}.xlsx`);
};
