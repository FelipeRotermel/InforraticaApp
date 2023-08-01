import axios from "axios";
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const response = await axios.get("http://192.168.1.11:19003/computadores/");
    return response.data;
  }

  async buscarComputador(id) {
    const response = await axios.get(`http://192.168.1.11:19003/computadores/${id}`);
    return response.data;
  }

  async adicionarComputador(computador) {
    const response = await axios.post("http://192.168.1.11:19003/computadores/", computador);
    return response.data;
  }

  async excluirComputador(id) {
    const response = await axios.delete(`http://192.168.1.11:19003/computadores/${id}`);
    return response.data;
  }

  async atualizarComputador(computador) {
    const response = await axios.put(
      `http://192.168.1.11:19003/computadores/${computador.id}/`,
      computador
    );
    return response.data;
  }
}