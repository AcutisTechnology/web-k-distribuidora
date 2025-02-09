import { ReactNode } from "react";

export function HighlightButton({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`flex flex-row items-center space-x-4 bg-white rounded-full h-11 px-5 ${className}`}
    >
      <p className="font-syne font-semibold text-sm">{children}</p>
      {icon}
    </button>
  );
}
