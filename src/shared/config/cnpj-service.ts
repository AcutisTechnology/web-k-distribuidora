export class CNPJService {
  static async fetch(cnpj: string) {
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
