"use client";
import { Form, Input, Button, Card, message } from "antd";
import { useRouter } from "next/navigation";

export default function CreateDepartment() {
  const router = useRouter();

  const submit = async (values:any) => {
    const res = await fetch("https://apicampy.vercel.app/api/department", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      message.success("Tạo phòng ban thành công!");
      router.push("/department");
    } else {
      message.error("Lỗi tạo phòng ban!");
    }
  };

  return (
    <Card style={{ maxWidth: 550, margin: "24px auto" }}>
      <h2>Thêm phòng ban</h2>

      <Form layout="vertical" onFinish={submit}>
        <Form.Item
          label="Tên phòng ban"
          name="name"
          rules={[{ required: true, message: "Không được để trống" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mã phòng ban"
          name="code"
          rules={[{ required: true, message: "Không được để trống" }]}
        >
          <Input />
        </Form.Item>

        <Button htmlType="submit" type="primary" block>
          Lưu
        </Button>
      </Form>
    </Card>
  );
}
