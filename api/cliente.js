import axios from "axios";
export default class ClientesApi {
  async buscarTodosOsClientes() {
    const response = await axios.get("http://192.168.1.11:19003/clientes/");
    return response.data;
  }

  async buscarCliente(id) {
    const response = await axios.get(`http://192.168.1.11:19003/clientes/${id}`);
    return response.data;
  }

  async adicionarCliente(cliente) {
    const response = await axios.post("http://192.168.1.11:19003/clientes/", cliente);
    return response.data;
  }

  async excluirCliente(id) {
    const response = await axios.delete(`http://192.168.1.11:19003/clientes/${id}`);
    return response.data;
  }

  async atualizarCliente(cliente) {
    const response = await axios.put(
      `http://192.168.1.11:19003/clientes/${cliente.id}/`,
      cliente
    );
    return response.data;
  }
} 