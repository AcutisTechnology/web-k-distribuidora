"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Header } from "@/features/landing/header";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CNPJService } from "@/shared/config/cnpj-service";
import { IMaskInput } from "react-imask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/shared/config/emailjs-config";

// Definindo o schema de validação com Zod
const formSchema = z.object({
  cnpj: z.string().min(18, "CNPJ inválido").max(18, "CNPJ inválido").optional(),
  nome: z.string().min(3, "Nome é obrigatório").optional(),
  fantasia: z.string().min(3, "Nome fantasia é obrigatório").optional(),
  natureza: z.string().min(3, "Natureza é obrigatória").optional(),
  atividade: z.string().min(3, "Atividade é obrigatória").optional(),
  situacao: z.string().min(3, "Situação é obrigatória").optional(),
  dataAbertura: z.string().min(8, "Data de abertura é obrigatória").optional(),
  telefone: z
    .string()
    .min(14, "Telefone inválido")
    .max(16, "Telefone inválido")
    .optional(),
  cep: z.string().min(9, "CEP inválido").max(9, "CEP inválido").optional(),
  logradouro: z.string().min(3, "Rua é obrigatória").optional(),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  bairro: z.string().min(3, "Bairro é obrigatório").optional(),
  cidade: z.string().min(3, "Cidade é obrigatória").optional(),
  uf: z
    .string()
    .min(2, "UF é obrigatória")
    .max(2, "UF é obrigatória")
    .optional(),
  instagram: z.string().min(3, "Instagram é obrigatório").optional(),
  nomeProprietario: z
    .string()
    .min(3, "Nome do proprietário é obrigatório")
    .optional(),
  cpf: z.string().min(14, "CPF inválido").max(14, "CPF inválido").optional(),
  email: z.string().email("E-mail inválido").optional(),
  telefoneProprietario: z
    .string()
    .min(14, "Telefone inválido")
    .max(16, "Telefone inválido")
    .optional(),
  municipio: z.string().optional(),
  solicitante: z.string().optional(),
});

// Tipo inferido do schema
type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Inicializar o EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const {
    control,
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      cnpj: "",
      nome: "",
      fantasia: "",
      natureza: "",
      atividade: "",
      situacao: "",
      dataAbertura: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: " ",
      bairro: "",
      cidade: "",
      uf: "",
      instagram: "",
      nomeProprietario: "",
      cpf: "",
      email: "",
      telefoneProprietario: "",
      municipio: "",
      solicitante: "",
    },
  });

  const cnpj = watch("cnpj");

  const handleBlur = async () => {
    if (cnpj && cnpj.replace(/\D/g, "").length === 14) {
      try {
        const data = await CNPJService.fetch(cnpj.replace(/\D/g, ""));
        setValue("nome", data.razao_social);
        setValue("fantasia", data.estabelecimento.nome_fantasia);
        setValue("logradouro", data.estabelecimento.logradouro);
        setValue("municipio", data.estabelecimento.estado.nome);
        setValue("uf", data.estabelecimento.estado.sigla);
        setValue("cep", data.estabelecimento.cep);
        setValue("natureza", data.natureza_juridica.descricao);
        setValue(
          "atividade",
          data.estabelecimento.atividade_principal.descricao
        );
        setValue("situacao", data.estabelecimento.situacao_cadastral);
        setValue("cidade", data.estabelecimento.cidade.nome);
        setValue("complemento", data.estabelecimento.complemento);
        setValue("bairro", data.estabelecimento.bairro);
        setValue("numero", data.estabelecimento.numero);
        setValue("email", data.estabelecimento.email);
        setValue(
          "dataAbertura",
          `${data.estabelecimento.data_inicio_atividade.split("-")[2]}/${
            data.estabelecimento.data_inicio_atividade.split("-")[1]
          }/${data.estabelecimento.data_inicio_atividade.split("-")[0]}`
        );
        setIsDisabled(false);
      } catch (error) {
        console.error("Error fetching CNPJ data:", error);
        // Habilitar o formulário mesmo que o CNPJ não seja encontrado
        setIsDisabled(false);
        alert(
          "CNPJ não encontrado ou serviço indisponível. Por favor, preencha os dados manualmente."
        );
      }
    }
  };

  const handleNextStep = () => {
    // Validar campos da etapa atual antes de avançar
    if (step === 1) {
      // Validar campos da primeira etapa
      const fields = [
        "cnpj",
        "nome",
        "fantasia",
        "natureza",
        "atividade",
        "situacao",
        "dataAbertura",
        "telefone",
      ];
      const hasErrors = fields.some(
        (field) => errors[field as keyof FormValues]
      );

      if (hasErrors) {
        console.log("Erros encontrados:", hasErrors);
        return;
      }
    } else if (step === 2) {
      // Validar campos da segunda etapa
      const fields = ["cep", "logradouro", "bairro", "cidade", "uf"];
      const hasErrors = fields.some(
        (field) => errors[field as keyof FormValues]
      );

      if (hasErrors) {
        alert(
          "Por favor, preencha todos os campos obrigatórios corretamente antes de avançar."
        );
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Função para limpar o formulário
  const resetForm = () => {
    reset({
      cnpj: "",
      nome: "",
      fantasia: "",
      natureza: "",
      atividade: "",
      situacao: "",
      dataAbertura: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      instagram: "",
      nomeProprietario: "",
      cpf: "",
      email: "",
      telefoneProprietario: "",
      municipio: "",
      solicitante: "",
    });
    setIsDisabled(true);
    setStep(1);
  };

  const onSubmit = async (data: FormValues) => {
    console.log("Formulário enviado com sucesso!", { data });

    // Verificar se o formulário está habilitado
    if (isDisabled) {
      alert("Por favor, preencha o CNPJ para habilitar o formulário.");
      return;
    }

    // Validar campos obrigatórios do terceiro passo
    const fields = [
      "nomeProprietario",
      "cpf",
      "instagram",
      "telefoneProprietario",
      "solicitante",
    ];
    const hasErrors = fields.some(
      (field) =>
        !data[field as keyof FormValues] || errors[field as keyof FormValues]
    );

    if (hasErrors) {
      console.log(
        "Erros encontrados:",
        fields.filter(
          (field) =>
            !data[field as keyof FormValues] ||
            errors[field as keyof FormValues]
        )
      );
      alert(
        "Por favor, preencha todos os campos obrigatórios corretamente antes de enviar."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Preparando os dados para o EmailJS
      const templateParams = {
        to_name: "K Distribuidora",
        from_name: data.nomeProprietario || data.nome,
        message: `
DADOS DA EMPRESA:
CNPJ: ${data.cnpj}
Razão Social: ${data.nome}
Nome Fantasia: ${data.fantasia}
Natureza: ${data.natureza}
Atividade: ${data.atividade}
Situação: ${data.situacao}
Data de Abertura: ${data.dataAbertura}
Telefone: ${data.telefone}

ENDEREÇO:
CEP: ${data.cep}
Logradouro: ${data.logradouro}
Número: ${data.numero || "N/A"}
Complemento: ${data.complemento || "N/A"}
Bairro: ${data.bairro}
Cidade: ${data.cidade}
UF: ${data.uf}
Instagram: ${data.instagram}

DADOS DO PROPRIETÁRIO:
Nome: ${data.nomeProprietario}
CPF: ${data.cpf}
Email: ${data.email || "N/A"}
Telefone: ${data.telefoneProprietario || "N/A"}

OUTROS DADOS:
Município: ${data.municipio || "N/A"}
Solicitante: ${data.solicitante || "N/A"}
`,
        // Mantendo os campos individuais para compatibilidade
        cnpj: data.cnpj,
        razao_social: data.nome,
        nome_fantasia: data.fantasia,
        natureza: data.natureza,
        atividade: data.atividade,
        situacao: data.situacao,
        data_abertura: data.dataAbertura,
        telefone: data.telefone,
        cep: data.cep,
        logradouro: data.logradouro,
        numero: data.numero || "N/A",
        complemento: data.complemento || "N/A",
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        instagram: data.instagram,
        nome_proprietario: data.nomeProprietario,
        cpf: data.cpf,
        email: data.email || "N/A",
        telefone_proprietario: data.telefoneProprietario || "N/A",
        municipio: data.municipio || "N/A",
        solicitante: data.solicitante || "N/A",
        // Adicionando todos os dados em um formato mais estruturado para garantir que sejam enviados
        dados_completos: JSON.stringify(data, null, 2),
      };

      console.log("Enviando dados para o EmailJS:", templateParams);

      // Enviando o email usando EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email enviado com sucesso!", response);

      // Mostrar mensagem de sucesso
      setSubmitSuccess(true);
      setSuccessMessage(
        `Cadastro enviado com sucesso! Em breve entraremos em contato.`
      );

      // Resetar o formulário e o estado após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
        setSuccessMessage("");
        resetForm();
        // Redirecionar para a página inicial ou outra página
        // window.location.href = "/";
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitError(true);
      setErrorMessage(
        "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
      );

      // Resetar o estado de erro após 5 segundos
      setTimeout(() => {
        setSubmitError(false);
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                      <div>
                        <IMaskInput
                          mask="00.000.000/0000-00"
                          value={field.value || ""}
                          unmask={false}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={() => {
                            field.onBlur();
                            handleBlur();
                          }}
                          className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${
                            errors.cnpj
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]"
                          } focus:ring-1`}
                          placeholder="Digite o CNPJ"
                          disabled={false}
                        />
                      </div>
                    )}
                  />
                  {errors.cnpj && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cnpj.message}
                    </p>
                  )}
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
                    Contato do Financeiro{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="telefone"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <IMaskInput
                          mask="(00) 00000-0000"
                          value={field.value || ""}
                          unmask={false}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${
                            errors.telefone
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]"
                          } focus:ring-1`}
                          placeholder="Digite o telefone do financeiro"
                        />
                      </div>
                    )}
                  />
                  {errors.telefone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.telefone.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    CEP <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="cep"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <IMaskInput
                          mask="00000-000"
                          value={field.value || ""}
                          unmask={false}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${
                            errors.cep
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]"
                          } focus:ring-1`}
                          placeholder="Digite o CEP"
                          disabled={isDisabled}
                        />
                      </div>
                    )}
                  />
                  {errors.cep && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cep.message}
                    </p>
                  )}
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
                    Instagram <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite seu Instagram"
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                    {...register("instagram")}
                    disabled={isDisabled}
                  />
                  {errors.instagram && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.instagram.message}
                    </p>
                  )}
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
                  <Controller
                    name="cpf"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <IMaskInput
                          mask="000.000.000-00"
                          value={field.value || ""}
                          unmask={false}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${
                            errors.cpf
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]"
                          } focus:ring-1`}
                          placeholder="Digite o CPF"
                          disabled={isDisabled}
                        />
                      </div>
                    )}
                  />
                  {errors.cpf && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cpf.message}
                    </p>
                  )}
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
                    Contato do Proprietário{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="telefoneProprietario"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <IMaskInput
                          mask="(00) 00000-0000"
                          value={field.value || ""}
                          unmask={false}
                          onAccept={(value) => field.onChange(value)}
                          onBlur={field.onBlur}
                          className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${
                            errors.telefoneProprietario
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]"
                          } focus:ring-1`}
                          placeholder="Digite o telefone do proprietário"
                        />
                      </div>
                    )}
                  />
                  {errors.telefoneProprietario && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.telefoneProprietario.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-montserrat font-medium text-[#141414]">
                    Solicitante <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register("solicitante")}
                      disabled={isDisabled}
                      className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777] bg-white appearance-none"
                    >
                      <option value="nenhum">Nenhum</option>
                      <option value="Kamalla">Kamalla</option>
                      <option value="Lucas Iury">Lucas Iury</option>
                      <option value="Marcos">Marcos</option>
                      <option value="Neya">Neya</option>
                      <option value="Patricia">Patricia</option>
                      <option value="Rayanne">Rayanne</option>
                      <option value="Cláudio">Cláudio</option>
                      <option value="Verônica">Verônica</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4 text-[#a89777]" />
                    </div>
                  </div>
                  {errors.solicitante && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.solicitante.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Mensagem de sucesso */}
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mt-6 mb-4 flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>{successMessage}</span>
              </div>
            )}

            {/* Mensagem de erro */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-6 mb-4 flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Botões de navegação */}
            <div className="flex justify-between mt-12">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="flex items-center px-6 py-3 bg-white border border-[#a89777] text-[#a89777] rounded-lg font-montserrat font-medium hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
                  Voltar
                </button>
              )}

              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex items-center px-6 py-3 bg-[#a89777] text-white rounded-lg font-montserrat font-medium hover:bg-[#97876a] transition-colors"
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center px-8 py-3 ${
                      submitSuccess
                        ? "bg-green-600"
                        : submitError
                        ? "bg-red-600"
                        : "bg-[#a89777] hover:bg-[#97876a]"
                    } text-white rounded-lg font-montserrat font-medium transition-colors relative overflow-hidden`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Enviado com sucesso!
                      </>
                    ) : submitError ? (
                      <>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        Erro ao enviar. Tente novamente.
                      </>
                    ) : (
                      <>Finalizar cadastro</>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
