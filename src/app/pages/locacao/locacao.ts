import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LocacaoService } from "../../locacao.service";
import { Livro } from "../../model/livro";
import { LivroService } from "../../livro.service";
import { LocacaoModel } from "../../model/locacaoModel";
@Component({
    selector:'locacao',
    styleUrls:['locacao.scss'],
    templateUrl:'locacao.html'
})
export class Locacao implements OnInit {

    public formGroup:FormGroup;
    public locacao:LocacaoModel = new LocacaoModel;
    public livros:Livro[];

    constructor(private locacaoService:LocacaoService,
    private formBuilder:FormBuilder,
    private livroService:LivroService){
        
    }

    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            livro:[null, Validators.required],
            usuario:[null, Validators.required]
        });

        this.livroService.buscarTodos().subscribe((lista:Livro[]) => {
            this.livros=lista;
        });
    }
    

    public salvar(){
        console.log(this.locacao);
        this.locacaoService.salvar(this.locacao).subscribe(res => console.log(res));
        alert('Salvou a locação nos logs');
        }
    public cancelar(){
        console.log('Foi cancelado a locação do livro');
    }
}