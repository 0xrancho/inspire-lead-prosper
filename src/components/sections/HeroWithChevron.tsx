import { ReactNode } from "react";

interface HeroWithChevronProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const HeroWithChevron = ({
  backgroundImage,
  title,
  subtitle,
  description,
  children,
  className = "",
}: HeroWithChevronProps) => {
  return (
    <section className={`relative min-h-[600px] flex items-center overflow-hidden ${className}`}>
      {/* Background Image Section (Left 40%) */}
      {backgroundImage && (
        <div
          className="absolute left-0 top-0 bottom-0 w-full md:w-[40%] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Teal Background for Content Area (Right 60%) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] bg-primary z-0" />

      {/* Double Chevron: small teal then large gold */}
      <svg
        className="absolute top-0 bottom-0 hidden md:block z-10"
        style={{ left: "38%", width: "24%" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 18,0 36,50 18,100 0,100" fill="hsl(var(--primary))" />
        <polygon points="18,0 96,0 100,50 96,100 18,100" fill="hsl(var(--accent))" />
      </svg>

      {/* Mobile: keep clean layout; no extra overlays */}

      {/* Content Section (Right 60%) */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="md:ml-[54%] md:pl-12 py-20">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="mb-6">{title}</h1>
            {subtitle && <p className="text-2xl md:text-3xl font-heading mb-6">{subtitle}</p>}
            {description && <div className="mb-8 opacity-95">{description}</div>}
            {children && <div className="flex flex-wrap gap-4">{children}</div>}
          </div>
        </div>
      </div>

      {/* Bottom Chevron Pointer */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-t-[40px] border-transparent z-20"
        style={{ borderTopColor: "hsl(var(--accent))" }}
      />
    </section>
  );
};

export default HeroWithChevron;
