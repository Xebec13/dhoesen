import HeroTitlePrimary from "./hero-title/HeroTitlePrimary";
import HeroTitleSecondary from "./hero-title/HeroTitleSecondary";

interface HeroTitleProps {
  variant: "primary" | "secondary";
  className?: string;
}

const titles = {
  primary: HeroTitlePrimary,
  secondary: HeroTitleSecondary,
} as const;

export default function HeroTitle({ variant, className }: HeroTitleProps) {
  const Title = titles[variant];
  return <Title className={className} />;
}
