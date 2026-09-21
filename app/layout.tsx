import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const themeBootScript = `
  (function () {
    try {
      var theme = window.localStorage.getItem("talatech-theme");
      if (theme !== "dark" && theme !== "light") theme = "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export const metadata: Metadata = {
  title: "Talatech",
  description:
    "Website, security, and growth operations powered by real intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
