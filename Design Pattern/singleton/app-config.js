// Implementação do Singleton com construtor privado
class AppConfig {
    constructor() {
      if (AppConfig.instance) {
        return AppConfig.instance;
      }
  
      this.apiKey = 'JLSDJIDH123898SDHKHD';
      this.apiUrl = 'http://mock.com.br';
      AppConfig.instance = this;
    }
  
    static getInstance() {
      if (!AppConfig.instance) {
        AppConfig.instance = new AppConfig();
      }
      return AppConfig.instance;
    }
  
    setApiUrl(apiUrl) {
      this.apiUrl = apiUrl;
    }
  
    // Método para fazer uma solicitação à API usando a configuração
    fetchData() {
      if (!this.apiUrl) {
        throw new Error('Url da API não pode ser nula');
      }
      console.log('Realizando uma chamada para o servidor ........')
    }
  }

  export default AppConfig;