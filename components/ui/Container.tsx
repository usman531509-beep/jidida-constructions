import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-[min(1180px,calc(100%-40px))]", className)}>
      {children}
    </div>
  );
}
