import { ReactNode } from "react";
import heroBanner from "@/assets/hero-banner5.png";

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
  const bgImage = backgroundImage || heroBanner;

  return (
    <>
      <section className={`relative overflow-visible ${className}`}>
        {/* Mobile Layout - banner with title only */}
        <div className="md:hidden relative">
          <img
            src={bgImage}
            alt=""
            className="w-full h-auto object-cover"
          />
          {/* Title overlay on image */}
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center px-6">
            <h1 className="text-primary-foreground text-center">{title}</h1>
          </div>
        </div>

        {/* Desktop Layout - original side-by-side design */}
        <div className="hidden md:flex relative min-h-[600px] items-center">
          {/* Full Banner Background */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          {/* Content Section - positioned in teal area on right */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="md:ml-[55%] py-20">
              <div className="max-w-2xl text-primary-foreground">
                <h1 className="mb-6">{title}</h1>
                {subtitle && <p className="text-2xl md:text-3xl font-heading mb-6">{subtitle}</p>}
                {description && <div className="mb-8 opacity-95">{description}</div>}
                {children && <div className="flex flex-wrap gap-4">{children}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Triangle hanging off bottom of banner - overlaps slightly for seamless connection */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[38px] z-20">
          <div
            className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[40px] border-t-primary"
          />
        </div>
      </section>

      {/* Mobile: Additional content below banner */}
      {(subtitle || description || children) && (
        <section className="md:hidden pt-16 pb-6 px-6 bg-background">
          <div className="max-w-2xl mx-auto">
            {subtitle && <p className="text-2xl font-heading font-bold mb-6 text-accent">{subtitle}</p>}
            {description && <div className="mb-8 text-foreground">{description}</div>}
            {children && <div className="flex flex-wrap gap-4 justify-center [&_button]:bg-accent [&_button]:text-accent-foreground [&_button]:border-primary [&_button:hover]:bg-primary [&_button:hover]:text-primary-foreground">{children}</div>}
          </div>
        </section>
      )}
    </>
  );
};

export default HeroWithChevron;
