import { Produto } from "./Produto"

export class Usuario{
    public id: number
    public nomeCompleto: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public produto: Produto[]

}