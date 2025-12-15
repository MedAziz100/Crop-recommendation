// app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: 'Crop Recommendation System',
  description: 'A system to recommend crops based on soil and climate data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
