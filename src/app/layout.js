import "./globals.css";

export const metadata = {
  title: "Diamond2",
  description: "Diamond2 A fashion jewelry brand",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en" >
      <body>
        {children}
      </body>
    </html>
  );
}
