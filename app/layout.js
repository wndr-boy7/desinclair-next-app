import "./globals.css";

export const metadata = {
  title: "deSinclair Technologies",
  description: "Next-gen storage platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
