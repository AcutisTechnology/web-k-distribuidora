import { LinkHeader } from "@/shared/components/link-header";
import { User, Stack } from "@phosphor-icons/react";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <div className="flex flex-row items-center justify-between container mx-auto px-6 py-4">
        <Image src="/images/logo.png" width={80} height={80} alt="Logo" />

        <LinkHeader />

        <div className="flex flex-row items-center space-x-4">
          <div className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary">
            <p className="font-montserrat font-medium">Cadastre-se</p>
            <User size={24} />
          </div>
          <div className="flex flex-row items-center gap-3 rounded-full border-[1px] h-12 px-5 border-border_primary bg-primary">
            <p className="font-montserrat font-medium text-white">Catálogo</p>
            <Stack className="text-white" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
