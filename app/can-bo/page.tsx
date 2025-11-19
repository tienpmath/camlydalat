'use client';
import { Button } from "antd";
import DanhSachTable from "../components/DanhSachTable";
import { DS_CANBO, DSBITHU } from "../constants/donthu";
import { exportToExcel } from "../utils/exportExcel";

export default function DanhSachCanBoPage() {
  return(<>
    <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => exportToExcel(DSBITHU, "Danh_sach_Can_bo")}
      >
        Xuất Excel
      </Button>
        <DanhSachTable data={DS_CANBO} title="Danh sách Cán bộ" />
  </>);  
};
