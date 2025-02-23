"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Header } from "@/features/landing/header";
import { ChevronRight } from "lucide-react";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    console.log("aqui");
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-semibold font-montserrat text-[#141414] mb-2">
            Cadastro Pessoa Jurídica (CNPJ)
          </h1>
          <p className="text-[#606060] mb-12 font-montserrat font-normal">
            Canal exclusivo para profissionais de beleza, barbearias e salões da
            Paraíba.
          </p>

          {/* Progress Steps */}
          <div className="flex flex-wrap items-center mb-12">
            <div className="flex items-center mb-4 sm:mb-0">
              <div
                className={`w-8 h-8 rounded-full border-2 ${
                  step >= 1
                    ? "border-[#a89777] text-[#a89777]"
                    : "border-[#ebebeb] text-[#b2b2b2]"
                } flex items-center justify-center font-medium`}
              >
                1
              </div>
              <span
                className={`ml-3 ${
                  step >= 1 ? "text-[#141414]" : "text-[#b2b2b2]"
                } font-medium font-montserrat cursor-pointer`}
                onClick={() => setStep(1)}
              >
                Informações da empresa
              </span>
              <div className="w-32 h-[2px] mx-4 bg-[#ebebeb] hidden sm:block" />
            </div>
            <div className="flex items-center mb-4 sm:mb-0">
              <div
                className={`w-8 h-8 rounded-full border-2 ${
                  step >= 2
                    ? "border-[#a89777] text-[#a89777]"
                    : "border-[#ebebeb] text-[#b2b2b2]"
                } flex items-center justify-center font-medium`}
              >
                2
              </div>
              <span
                className={`ml-3 ${
                  step >= 2 ? "text-[#141414]" : "text-[#b2b2b2]"
                } font-montserrat cursor-pointer`}
                onClick={() => setStep(2)}
              >
                Endereço comercial
              </span>
              <div className="w-32 h-[2px] mx-4 bg-[#ebebeb] hidden sm:block" />
            </div>
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full border-2 ${
                  step >= 3
                    ? "border-[#a89777] text-[#a89777]"
                    : "border-[#ebebeb] text-[#b2b2b2]"
                } flex items-center justify-center font-medium`}
              >
                3
              </div>
              <span
                className={`ml-3 ${
                  step >= 3 ? "text-[#141414]" : "text-[#b2b2b2]"
                } font-montserrat cursor-pointer`}
                onClick={() => setStep(3)}
              >
                Seus dados pessoais
              </span>
            </div>
          </div>

          {/* Form */}
          {step === 1 && (
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  CNPJ <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o CNPJ"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Nome (Razão Social) <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite a Razão Social"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Nome fantasia <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o nome fantasia"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Natureza <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Informe a natureza"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Atividade <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite a atividade"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Situação <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Informe a situação"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Data de abertura <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Informe a data de abertura"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  placeholder="Digite o telefone"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
            </form>
          )}

          {step === 2 && (
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  CEP <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o CEP"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Rua <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite a rua"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Número
                </label>
                <Input
                  type="text"
                  placeholder="Digite o número"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Complemento
                </label>
                <Input
                  type="text"
                  placeholder="Digite o complemento"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Bairro <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o bairro"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Cidade <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite a cidade"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  UF <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite a UF"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Link do Instagram <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o link do Instagram"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
            </form>
          )}

          {step === 3 && (
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Nome do proprietário <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o nome do proprietário"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  CPF <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o CPF"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  E-mail
                </label>
                <Input
                  type="text"
                  placeholder="Digite o email"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Telefone
                </label>
                <Input
                  type="text"
                  placeholder="Digite o telefone"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Solicitante <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o nome do solicitante"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
              </div>
            </form>
          )}

          {/* Next Step Button */}
          <div className="flex justify-end mt-12">
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-[#a89777] text-white font-montserrat rounded-full hover:bg-[#927f5f] flex items-center gap-2"
            >
              Próxima etapa
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
