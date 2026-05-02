import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VT Task 2",
  description: "Complex animation design task",
};

export default function Task2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
