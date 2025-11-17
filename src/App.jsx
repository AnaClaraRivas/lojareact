import React, { useEffect, useState } from "react";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({ nome: "", preco: "", estoque: "" });

  const BASE_URL = "http://localhost/crud/";

  // Carregar produtos (SELECT)
  async function carregarProdutos() {
    const resposta = await fetch(BASE_URL + "selecionar.php");
    const dados = await resposta.json();
    setProdutos(dados);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  // Atualizar formulário
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Criar produto (INSERT)
  async function criarProduto() {
    await fetch(BASE_URL + "insere.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({ nome: "", preco: "", estoque: "" });
    carregarProdutos();
  }

  // Atualizar produto (UPDATE)
  async function atualizarProduto(id) {
    const novoNome = prompt("Novo nome:");
    const novoPreco = prompt("Novo preço:");
    const novoEstoque = prompt("Novo estoque:");

    await fetch(BASE_URL + "atualizar.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        nome: novoNome,
        preco: novoPreco,
        estoque: novoEstoque
      })
    });

    carregarProdutos();
  }

  // Deletar produto (DELETE)
  async function deletarProduto(id) {
    await fetch(BASE_URL + "apaga.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });

    carregarProdutos();
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Produtos</h1>

      <div className="space-y-2 mb-4">
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="estoque"
          placeholder="Estoque"
          value={form.estoque}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <button
          onClick={criarProduto}
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Adicionar Produto
        </button>
      </div>

      <ul className="space-y-2">
        {produtos.map((p) => (
          <li key={p.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <p><strong>{p.nome}</strong></p>
              <p>Preço: R$ {p.preco}</p>
              <p>Estoque: {p.estoque}</p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => atualizarProduto(p.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Editar
              </button>

              <button
                onClick={() => deletarProduto(p.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
