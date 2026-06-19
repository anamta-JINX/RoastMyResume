import { Link } from "react-router-dom";

function BrandLogo({ variant = "full", size = "md", showText = true }) {
  const isFull = variant === "full";

  const sizes = {
    sm: isFull ? "h-9" : "h-8 w-8",
    md: isFull ? "h-11" : "h-10 w-10",
    lg: isFull ? "h-16" : "h-14 w-14"
  };

  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <img
        src={isFull ? "/logof.png" : "/logo.png"}
        alt="RoastMyResume logo"
        className={`${sizes[size]} object-contain drop-shadow-[0_0_18px_rgba(194,59,34,0.35)] transition duration-300 group-hover:scale-105`}
      />

      {!isFull && showText ? (
        <span className="font-bebas text-3xl uppercase tracking-[0.05em] text-roast-cream">
          Roast<span className="text-roast-red">My</span>Resume
        </span>
      ) : null}
    </Link>
  );
}

export default BrandLogo;