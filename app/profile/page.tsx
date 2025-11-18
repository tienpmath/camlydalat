
import React from "react";
import { auth } from "../auth";

export default async function ProfilePage() {
  const session = await auth(); // auth() là helper từ auth.js (nếu cấu hình như trước)
  const token = (session as any)?.access_token;

  if (!token) {
    return <div>Chưa đăng nhập</div>;
  }

  // const res = await fetch("https://apicampy.vercel.app/profile", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   // ensure server-side fetch doesn't cache old token:
  //   next: { revalidate: 0 },
  // });

  //const profile = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Profile</h1>
      <pre>{JSON.stringify(token, null, 2)}</pre>
    </div>
  );
}
