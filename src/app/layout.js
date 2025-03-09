import "./globals.css";

export const metadata = {
  title: "Diamond2",
  description: "Diamond2 A fashion jewelry brand",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en" >
      <head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
