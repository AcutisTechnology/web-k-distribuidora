import { ReactNode } from "react";

export function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`flex flex-row items-center h-14 px-7 rounded-full space-x-4 bg-primary mt-7 mb-10 border-2 border-border_secondary shadow-lg shadow-primary ${className}`}
    >
      {children}
    </button>
  );
}
