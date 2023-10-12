import api from "../plugins/api";
export default class OrdemServicoApi {
  async buscarTodasAsOrdensServico() {
    const response = await api.get("/ordemservico/");
    return response.data;
  }

  async buscarOrdemServico(id) {
    const response = await api.get(`/ordemservico/${id}`);
    return response.data;
  }
}