import api from '../plugins/api'

class OrdemServicoApi {
  async buscarTodasAsOrdensServico() {
    const response = await api.get('/ordemservico/user_orders/')
    return response.data
  }
}

export default new OrdemServicoApi()