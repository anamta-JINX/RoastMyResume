import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function PageLayout({ children, className = "" }) {
  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-roast-black text-roast-cream ${className}`}
    >
      <Navbar />

      <div className="noise-overlay fixed inset-0 z-[1] pointer-events-none" />

      <div className="pointer-events-none fixed bottom-[-220px] left-1/2 z-0 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(194,59,34,0.2)_0%,transparent_70%)]" />

      <div className="pointer-events-none fixed left-[-140px] top-[-160px] z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.16)_0%,transparent_70%)] blur-3xl" />

      <div className="pointer-events-none fixed right-[-160px] top-[10%] z-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(194,59,34,0.18)_0%,transparent_72%)] blur-3xl" />

      <div className="relative z-[3] pt-16">{children}</div>

      <Footer />
    </main>
  );
}

export default PageLayout;