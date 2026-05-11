export const metadata = {
  title: "deSinclair",
  description: "Next.js App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
