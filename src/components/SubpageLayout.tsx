import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-[73px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
