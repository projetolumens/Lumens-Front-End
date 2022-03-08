import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public regiao: string
    public periodo: string
    public retirada: string
    public foto: string
    public date: Date
    public usuario: Usuario
    public categoria: Categoria
}