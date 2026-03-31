// import "./globals.css";
// import "@fontsource/inter";

// export const metadata = {
//   title: "Scheduler App",
//   description: "Calendly-style scheduling app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 text-gray-900">
//         <main className="min-h-screen flex flex-col">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import "@fontsource/inter";
import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}