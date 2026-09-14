import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "纹脉｜让中国非遗成为世界品牌语言",
  description: "面向中小跨境电商卖家的非遗包装AI设计平台，生成包装视觉、文化文案、标签提示与3D展示方案。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
