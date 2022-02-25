import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto{
    public id: number
    public produto: string
    public descricao: string
    public preco: string
    public foto: string
    public categoria: Categoria
    public usuario: Usuario

}