import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    public usuario: Usuario
    public categoria: Categoria
}