import { Usuario, Estoque } from "./aula";

const userOne = new Usuario("tavares", 17, "142-555-666-88")
const estoque = new Estoque(userOne)

estoque.ativarEstoque(true)
estoque.cadastrarProduto("Fonde de ouvido", 70, "Eletronico")
estoque.obterEstoque()