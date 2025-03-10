import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@heroui/skeleton";

interface Props {
  isLoading: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function SkeletonWrapper({
  isLoading,
  fullWidth = true,
  children,
  className = "",
}: Props) {
  if (!isLoading) return <React.Fragment>{children}</React.Fragment>;

  return (
    <Skeleton className={cn(`h-fit w-fit rounded-lg ${className}`, fullWidth && "w-full")}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
}