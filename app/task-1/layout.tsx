import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VT Task 1",
  description: "Design task with animations",
};

export default function Task1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
