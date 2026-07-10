import type { IconName } from "@/ui/icons/icons-data";
import { iconsRegistry } from "@/ui/icons/icons-data";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export default function Icon({ name, className, size }: IconProps) {
  const Component = iconsRegistry[name];

  return <Component className={className} width={size} height={size} />;
}
