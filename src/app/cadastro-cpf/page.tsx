"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Header } from "@/features/landing/header";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { IMaskInput } from "react-imask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from "@/shared/config/emailjs-config";

// Definindo o schema de validação com Zod
const formSchema = z.object({
  cpf: z.string().min(14, "CPF inválido").max(14, "CPF inválido").optional(),
  nome: z.string().min(3, "Nome é obrigatório").optional(),
  fantasia: z.string().min(3, "Nome fantasia é obrigatório").optional(),
  atividade: z.string().min(1, "Atividade é obrigatória").optional(),
  telefone: z.string().min(14, "Telefone inválido").max(16, "Telefone inválido").optional(),
  cep: z.string().min(9, "CEP inválido").max(9, "CEP inválido").optional(),
  logradouro: z.string().min(3, "Rua é obrigatória").optional(),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  bairro: z.string().min(3, "Bairro é obrigatório").optional(),
  cidade: z.string().min(3, "Cidade é obrigatória").optional(),
  uf: z.string().min(2, "UF é obrigatória").max(2, "UF é obrigatória").optional(),
  email: z.string().email("E-mail inválido").optional(),
  instagram: z.string().min(3, "Instagram é obrigatório").optional(),
  solicitante: z.string().optional(),
});

// Tipo inferido do schema
type FormValues = z.infer<typeof formSchema>;

export default function RegistrationFormCPF() {
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
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      cpf: "",
      nome: "",
      fantasia: "",
      atividade: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      email: "",
      instagram: "",
      solicitante: "",
    }
  });

  // Função para limpar o formulário
  const resetForm = () => {
    reset({
      cpf: "",
      nome: "",
      fantasia: "",
      atividade: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      email: "",
      instagram: "",
      solicitante: "",
    });
  };

  const onSubmit = async (data: FormValues) => {
    console.log("Formulário enviado com sucesso!", { data });
    
    // Validar campos obrigatórios
    const fields = ["cpf", "nome", "fantasia", "atividade", "telefone", "cep", "logradouro", "bairro", "cidade", "uf", "instagram"];
    const hasErrors = fields.some(field => !data[field as keyof FormValues] || errors[field as keyof FormValues]);
    
    if (hasErrors) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente antes de enviar.");
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
        from_name: data.nome,
        message: `
DADOS PESSOAIS:
CPF: ${data.cpf}
Nome: ${data.nome}
Nome Fantasia: ${data.fantasia}
Atividade: ${data.atividade}
Telefone: ${data.telefone}

ENDEREÇO:
CEP: ${data.cep}
Logradouro: ${data.logradouro}
Número: ${data.numero || "N/A"}
Complemento: ${data.complemento || "N/A"}
Bairro: ${data.bairro}
Cidade: ${data.cidade}
UF: ${data.uf}

CONTATO:
Email: ${data.email || "N/A"}
Instagram: ${data.instagram}
Solicitante: ${data.solicitante || "N/A"}
`,
        // Mantendo os campos individuais para compatibilidade
        cpf: data.cpf,
        nome: data.nome,
        nome_fantasia: data.fantasia,
        atividade: data.atividade,
        telefone: data.telefone,
        cep: data.cep,
        logradouro: data.logradouro,
        numero: data.numero || "N/A",
        complemento: data.complemento || "N/A",
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        email: data.email || "N/A",
        instagram: data.instagram,
        solicitante: data.solicitante || "N/A",
        // Adicionando todos os dados em um formato mais estruturado para garantir que sejam enviados
        dados_completos: JSON.stringify(data, null, 2)
      };
      
      console.log('Enviando dados para o EmailJS:', templateParams);
      
      // Enviando o email usando EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email enviado com sucesso!', response);
      
      // Mostrar mensagem de sucesso
      setSubmitSuccess(true);
      setSuccessMessage(`Cadastro enviado com sucesso! Em breve entraremos em contato.`);
      
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
      setErrorMessage("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
      
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
            Cadastro Pessoa Física (CPF)
          </h1>
          <p className="text-[#606060] mb-12 font-montserrat font-normal">
            Canal exclusivo para profissionais de beleza, barbearias e salões da
            Paraíba.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                        value={field.value || ''}
                        unmask={false}
                        onAccept={(value) => field.onChange(value)}
                        onBlur={field.onBlur}
                        className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${errors.cpf ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]'} focus:ring-1`}
                        placeholder="Digite o CPF"
                      />
                    </div>
                  )}
                />
                {errors.cpf && (
                  <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Nome <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  {...register("nome")}
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
                {errors.nome && (
                  <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Nome Fantasia <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o nome fantasia"
                  {...register("fantasia")}
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                />
                {errors.fantasia && (
                  <p className="text-red-500 text-xs mt-1">{errors.fantasia.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Atividade <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register("atividade")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777] bg-white appearance-none"
                  >
                    <option value="">Selecione</option>
                    <option value="Salão">Salão</option>
                    <option value="Barbearia">Barbearia</option>
                    <option value="Loja de cosméticos">Loja de cosméticos</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4 text-[#a89777]" />
                  </div>
                </div>
                {errors.atividade && (
                  <p className="text-red-500 text-xs mt-1">{errors.atividade.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="telefone"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <IMaskInput
                        mask="(00) 00000-0000"
                        value={field.value || ''}
                        unmask={false}
                        onAccept={(value) => field.onChange(value)}
                        onBlur={field.onBlur}
                        className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${errors.telefone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]'} focus:ring-1`}
                        placeholder="Digite o telefone"
                      />
                    </div>
                  )}
                />
                {errors.telefone && (
                  <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>
                )}
              </div>
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
                        value={field.value || ''}
                        unmask={false}
                        onAccept={(value) => field.onChange(value)}
                        onBlur={field.onBlur}
                        className={`w-full px-4 py-2.5 rounded-lg font-montserrat border ${errors.cep ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#d6d6d6] focus:border-[#a89777] focus:ring-[#a89777]'} focus:ring-1`}
                        placeholder="Digite o CEP"
                      />
                    </div>
                  )}
                />
                {errors.cep && (
                  <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>
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
                />
                {errors.logradouro && (
                  <p className="text-red-500 text-xs mt-1">{errors.logradouro.message}</p>
                )}
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
                />
                {errors.bairro && (
                  <p className="text-red-500 text-xs mt-1">{errors.bairro.message}</p>
                )}
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
                />
                {errors.cidade && (
                  <p className="text-red-500 text-xs mt-1">{errors.cidade.message}</p>
                )}
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
                />
                {errors.uf && (
                  <p className="text-red-500 text-xs mt-1">{errors.uf.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Email
                </label>
                <Input
                  type="text"
                  placeholder="Digite o email"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Instagram <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Digite o Instagram"
                  className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777]"
                  {...register("instagram")}
                />
                {errors.instagram && (
                  <p className="text-red-500 text-xs mt-1">{errors.instagram.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-montserrat font-medium text-[#141414]">
                  Solicitante
                </label>
                <div className="relative">
                  <select
                    {...register("solicitante")}
                    className="w-full px-4 py-2.5 rounded-lg font-montserrat border border-[#d6d6d6] focus:border-[#a89777] focus:ring-1 focus:ring-[#a89777] bg-white appearance-none"
                  >
                    <option value="Nenhum">Nenhum</option>
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
              </div>
            </div>

            {/* Mensagem de sucesso */}
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mt-6 mb-4 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{successMessage}</span>
              </div>
            )}

            {/* Mensagem de erro */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-6 mb-4 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Botão de envio */}
            <div className="flex justify-end mt-12">
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
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : submitSuccess ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Enviado com sucesso!
                  </>
                ) : submitError ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Erro ao enviar. Tente novamente.
                  </>
                ) : (
                  <>
                    Enviar
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 