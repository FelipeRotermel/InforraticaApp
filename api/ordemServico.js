import axios from "axios";
export default class OrdemServicoApi {
  async buscarTodasAsOrdensServico() {
    const response = await axios.get("http://191.52.55.47:19003/ordemservico/");
    return response.data;
  }

  async buscarOrdemServico(id) {
    const response = await axios.get(`http://191.52.55.47:19003/ordemservico/${id}`);
    return response.data;
  }

  async adicionarOrdemServico(ordemservico) {
    const response = await axios.post("http://191.52.55.47:19003/ordemservico/", ordemservico);
    return response.data;
  }

  async excluirOrdemServico(id) {
    const response = await axios.delete(`http://191.52.55.47:19003/ordemservico/${id}`);
    return response.data;
  }

  async atualizarOrdemServico(ordemservico) {
    const response = await axios.put(
      `http://191.52.55.47:19003/ordemservico/${ordemservico.id}/`,
      ordemservico
    );
    return response.data;
  }
}