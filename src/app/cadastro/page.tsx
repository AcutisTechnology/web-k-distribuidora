"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Header } from "@/features/landing/header";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CNPJService } from "@/shared/config/cnpj-service";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const { control, register, setValue, watch, handleSubmit } = useForm();
  const cnpj = watch("cnpj");

  const handleBlur = async () => {
    if (cnpj && cnpj.replace(/\D/g, "").length === 14) {
      try {
        const data = await CNPJService.fetch(cnpj.replace(/\D/g, ""));
        setValue("nome", data.razao_social);
        setValue("fantasia", data.estabelecimento.nome_fantasia);
        setValue("telefone", data.estabelecimento.telefone1);
        setValue("logradouro", data.estabelecimento.logradouro);
        setValue("municipio", data.estabelecimento.estado.nome);
        setValue("uf", data.estabelecimento.estado.sigla);
        setValue("cep", data.estabelecimento.cep);
        setValue("natureza", data.natureza_juridica.descricao);
        setValue(
          "atividade",
          data.estabelecimento.atividade_principal.descricao,
        );
        setValue("situacao", data.estabelecimento.situacao_cadastral);
        setValue("cidade", data.estabelecimento.cidade.nome);
        setValue("complemento", data.estabelecimento.complemento);
        setValue("bairro", data.estabelecimento.bairro);
        setValue("numero", data.estabelecimento.numero);
        setValue("nomeProprietario", data.razao_social.slice(10));
        setValue("email", data.estabelecimento.email);
        setValue(
          "dataAbertura",
          `${data.estabelecimento.data_inicio_atividade.split("-")[2]}/${
            data.estabelecimento.data_inicio_atividade.split("-")[1]
          }/${data.estabelecimento.data_inicio_atividade.split("-")[0]}`,
        );
        setIsDisabled(false);
      } catch (error) {
        console.error("Error fetching CNPJ data:", error);
      }
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    CNPJ <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="cnpj"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Digite o CNPJ"
                        className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                      />
                    )}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Nome (Razão Social) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite a Razão Social"
                    {...register("nome")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Nome fantasia <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite o nome fantasia"
                    {...register("fantasia")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Natureza <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Informe a natureza"
                    {...register("natureza")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Atividade <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite a atividade"
                    {...register("atividade")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Situação <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Informe a situação"
                    {...register("situacao")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Data de abertura <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Informe a data de abertura"
                    {...register("dataAbertura")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="Digite o telefone"
                    {...register("telefone")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    CEP <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    {...register("cep")}
                    placeholder="Digite o CEP"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Rua <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    {...register("logradouro")}
                    placeholder="Digite a rua"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Número
                  </label>
                  <Input
                    type="text"
                    {...register("numero")}
                    placeholder="Digite o número"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Complemento
                  </label>
                  <Input
                    type="text"
                    {...register("complemento")}
                    placeholder="Digite o complemento"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Bairro <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    {...register("bairro")}
                    placeholder="Digite o bairro"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Cidade <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    {...register("cidade")}
                    placeholder="Digite a cidade"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    UF <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    {...register("uf")}
                    placeholder="Digite a UF"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    disabled={isDisabled}
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
                    disabled={isDisabled}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Nome do proprietário <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite o nome do proprietário"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    {...register("nomeProprietario")}
                    disabled={isDisabled}
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
                    {...register("cpf")}
                    disabled={isDisabled}
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
                    {...register("email")}
                    disabled={isDisabled}
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
                    {...register("telefone")}
                    disabled={isDisabled}
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
                    {...register("solicitante")}
                    disabled={isDisabled}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="px-6 py-3 bg-[#a89777] text-white font-montserrat rounded-full hover:bg-[#927f5f] flex items-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Etapa anterior
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-[#a89777] text-white font-montserrat rounded-full hover:bg-[#927f5f] flex items-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isDisabled}
                >
                  Próxima etapa
                  <ChevronRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#a89777] text-white font-montserrat rounded-full hover:bg-[#927f5f] flex items-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
