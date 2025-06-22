import "./globals.css";

export const metadata = {
  title: "@meltq (Tejas Vipin)",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-background m-0 h-screen flex items-end justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
