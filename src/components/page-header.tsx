import { cn } from "@/lib/utils";
import React from "react";

export default function PageHeader({
  page,
  className,
  children,
}: {
  page: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex justify-between p-4", className)}>
      <h2 className="text-2xl font-bold">{page}</h2>
      {children}
    </div>
  );
}
