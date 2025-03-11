import { JSX } from "react";

interface BrandCardProps {
  text: string;
  className?: string;
  icon: JSX.Element;
}

export default function BrandCard({
  text,
  className = "",
  icon,
}: BrandCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${className} transform skew-x-12`}
    >
      <div className="relative bg-zinc-900 rounded-2xl p-4 sm:p-5 md:p-6 w-full shadow-lg border border-zinc-800 h-full">
        {/* Checkmark with circles animation */}
        <div className="absolute left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full opacity-75 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full opacity-50 animate-pulse" />
            <div className="absolute -inset-3 bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full opacity-25 animate-pulse" />
            <div className="relative bg-zinc-900 p-1.5 sm:p-2 rounded-full">
              {icon}
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="mt-14 sm:mt-16">
          <h3 className="text-white text-sm sm:text-base font-bold font-syne tracking-wide">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
}
