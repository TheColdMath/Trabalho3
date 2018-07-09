import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Livro } from "../../model/livro";
import { LivroService } from "../../livro.service";
@Component({
    selector:'cadastro-livro',
    styleUrls:['cadastro-livro.scss'],
    templateUrl:'cadastro-livro.html'
})
export class CadastroLivro implements OnInit {

    public formGroup:FormGroup;
    public livro:Livro = new Livro

    constructor(private livroService:LivroService,
    private formBuilder:FormBuilder){
        
    }

    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            
            titulo:[null, Validators.required],
            descricao:[null, Validators.required],
            numeroPaginas:[null, Validators.required],
            editora:[null, Validators.required],
        });

    }

    public salvar(){
        console.log(this.livro);
        this.livroService.salvar(this.livro).subscribe(res => console.log(res));
        alert('Salvou o Usuário nos logs');
        }
    public cancelar(){
        console.log('Foi cancelado o cadastro do livro');
    }
}