import { useState, useEffect } from "react";
import { LinkHeader } from "@/shared/components/link-header";
import { User, Stack, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/shared/config/emailjs-config";
import { IMaskInput } from "react-imask";

export function Header({ hideLinks = false }: { hideLinks?: boolean }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Detectar tamanho da tela para ajustar o layout
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // Detectar scroll para adicionar sombra
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Configurar os listeners
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Limpar os listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        message: `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nProfissão: ${formData.profession}\nDescrição: ${formData.description}`,
      };

      await emailjs.send(
        "service_6l4fmtz",
        "template_trzd70n",
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      alert("Mensagem enviada com sucesso!");
      setIsContactModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        profession: "",
        description: "",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (hideLinks) {
    return (
      <header
        className={`p-4 sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow"
        }`}
      >
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            width={isMediumScreen ? 80 : 90}
            height={isMediumScreen ? 80 : 90}
            alt="Logo"
            className="max-h-[50px] sm:max-h-[60px] md:max-h-[65px] lg:max-h-[80px]"
          />
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow"
        }`}
      >
        <div className="flex flex-row items-center justify-between container mx-auto px-2 sm:px-4 md:px-6 py-2 md:py-3 lg:py-4">
          <div onClick={() => router.push("/")} className="cursor-pointer">
            <Image
              src="/images/logo.svg"
              width={isMediumScreen ? 80 : 90}
              height={isMediumScreen ? 80 : 90}
              alt="Logo"
              className="max-h-[50px] sm:max-h-[60px] md:max-h-[65px] lg:max-h-[80px]"
            />
          </div>

          {/* Menu para desktop */}
          <div className="hidden lg:block">
            <LinkHeader onContactClick={() => setIsContactModalOpen(true)} />
          </div>

          {/* Botões para desktop e tablet */}
          <div className="hidden md:flex flex-row items-center space-x-2 lg:space-x-4">
            <div
              className="flex flex-row items-center gap-2 lg:gap-3 rounded-full border-[1px] h-10 lg:h-12 px-3 lg:px-5 border-border_primary cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => router.push("/cadastro")}
            >
              <p className="font-montserrat font-medium text-xs md:text-xs lg:text-sm xl:text-sm whitespace-nowrap">
                Cadastre-se
              </p>
              <User size={18} />
            </div>
            <div
              className="flex flex-row items-center gap-2 lg:gap-3 rounded-full border-[1px] h-10 lg:h-12 px-3 lg:px-5 border-border_primary bg-primary cursor-pointer hover:bg-opacity-90 transition-colors"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1zr0zh-P7R_Lb0L-TOk_yUJQnc_9PO0Dk",
                  "_blank"
                )
              }
            >
              <p className="font-montserrat font-medium text-white text-xs md:text-xs lg:text-sm xl:text-sm whitespace-nowrap">
                Catálogo
              </p>
              <Stack className="text-white" size={18} />
            </div>
          </div>

          {/* Botões para mobile */}
          <div className="md:hidden flex flex-row items-center gap-2">
            <div
              className="flex flex-row items-center gap-2 rounded-full border-[1px] h-9 px-3 border-border_primary cursor-pointer"
              onClick={() => router.push("/cadastro")}
            >
              <p className="font-montserrat font-medium text-xs sm:text-sm">
                Cadastre-se
              </p>
              <User size={18} />
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-start px-6 space-y-4 my-4 animate-fadeIn">
            <p
              className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection("about-section")}
            >
              Sobre
            </p>
            <div className="w-full h-[1px] bg-[#C2B8A6]" />
            <p
              className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection("distributor-section")}
            >
              Parceria Wella
            </p>
            <div className="w-full h-[1px] bg-[#C2B8A6]" />
            <p
              className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1zr0zh-P7R_Lb0L-TOk_yUJQnc_9PO0Dk",
                  "_blank"
                )
              }
            >
              Catálogo
            </p>
            <div className="w-full h-[1px] bg-[#C2B8A6]" />
            <p
              className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
              onClick={() => window.open("https://wellaedu.com.br/", "_blank")}
            >
              Cursos & Capacitação
            </p>
            <div className="w-full h-[1px] bg-[#C2B8A6]" />
            <p
              className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection("structure-section")}
            >
              Estrutura
            </p>
            <div className="w-full h-[1px] bg-[#C2B8A6]" />
            <p
              className="font-montserrat font-normal text-base text-black cursor-pointer hover:text-primary transition-colors"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contato
            </p>
          </div>
        )}
      </header>

      {/* Modal de Contato */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Entre em Contato</h2>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <IMaskInput
                  mask="(00) 00000-0000"
                  name="phone"
                  value={formData.phone}
                  onAccept={(value) =>
                    setFormData((prev) => ({ ...prev, phone: value }))
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profissão
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
