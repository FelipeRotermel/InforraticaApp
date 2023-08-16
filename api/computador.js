import axios from "axios";
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const response = await axios.get("http://191.52.55.47:19001/computadores/");
    return response.data;
  }

  async buscarComputador(id) {
    const response = await axios.get(`http://191.52.55.47:19001/computadores/${id}`);
    return response.data;
  }

  async adicionarComputador(computador) {
    const response = await axios.post("http://191.52.55.47:19001/computadores/", computador);
    return response.data;
  }

  async excluirComputador(id) {
    const response = await axios.delete(`http://191.52.55.47:19001/computadores/${id}`);
    return response.data;
  }

  async atualizarComputador(computador) {
    const response = await axios.put(
      `http://191.52.55.47:19001/computadores/${computador.id}/`,
      computador
    );
    return response.data;
  }
}