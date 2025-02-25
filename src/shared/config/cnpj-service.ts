interface CNPJResponse {
  nome: string;
  fantasia: string;
  email: string;
  telefone: string;
  logradouro: string;
  municipio: string;
  uf: string;
  cep: string;
}
export class CNPJService {
  static async fetch(cnpj: string): Promise<CNPJResponse> {
    try {
      const response = await fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`);
      if (!response.ok) {
        throw new Error("Failed to fetch CNPJ data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching CNPJ:", error);
      throw error;
    }
  }
}
