import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas text-deep">
      <Navbar />
      <div className="pt-[73px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
