"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/dashboard");
  return (
    <h1>Super Admin</h1>
  );
}
