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
      {/* Teal Background for Content Area */}
      <div className="absolute right-0 top-0 bottom-0 w-full bg-primary" />

      {/* Background Image Section (Left 40%) */}
      {backgroundImage && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[40%] bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Double-Angle Gold Chevron Overlay (Greater-than shape) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full md:w-[50%] bg-accent hidden md:block"
        style={{
          clipPath: "polygon(0 0, 90% 0, 75% 50%, 90% 100%, 0 100%)",
        }}
      />

      {/* Mobile: Full gold background */}
      <div className="absolute left-0 top-0 bottom-0 w-full bg-accent md:hidden" />

      {/* Content Section (Right 60%) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="md:ml-[45%] md:pl-12 py-20">
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
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-t-[40px] border-transparent"
        style={{ borderTopColor: "hsl(var(--accent))" }}
      />
    </section>
  );
};

export default HeroWithChevron;
