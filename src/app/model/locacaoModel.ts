import { Livro } from "./livro";
import { Usuario } from "./usuario";

export class LocacaoModel {

    public id:number;
    public livro:Livro;
    public usuario:Usuario;
}