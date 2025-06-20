import "./globals.css";

export const metadata = {
  title: "@meltq (Tejas Vipin)",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
