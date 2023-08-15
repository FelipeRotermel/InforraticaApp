import axios from "axios";
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const response = await axios.get("http://127.0.0.1:8000/computadores/");
    return response.data;
  }

  async buscarComputador(id) {
    const response = await axios.get(`http://127.0.0.1:8000/computadores/${id}`);
    return response.data;
  }

  async adicionarComputador(computador) {
    const response = await axios.post("http://127.0.0.1:8000/computadores/", computador);
    return response.data;
  }

  async excluirComputador(id) {
    const response = await axios.delete(`http://127.0.0.1:8000/computadores/${id}`);
    return response.data;
  }

  async atualizarComputador(computador) {
    const response = await axios.put(
      `http://127.0.0.1:8000/computadores/${computador.id}/`,
      computador
    );
    return response.data;
  }
}