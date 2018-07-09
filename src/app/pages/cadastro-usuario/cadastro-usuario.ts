import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from "../../usuario.service";
@Component({
    selector:'cadastro-usuario',
    styleUrls:['cadastro-usuario.scss'],
    templateUrl:'cadastro-usuario.html'
})
export class CadastroUsuario implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario();

    constructor(private formBuilder:FormBuilder,
    private usuarioService:UsuarioService){
        
    }

    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            codigo:[null],
            nome:[null, Validators.required],         
            login:[null, Validators.required],
            senha:[null, Validators.required]

        });

    }

    public salvar(){
        console.log(this.usuario);
        this.usuarioService.salvar(this.usuario).subscribe(res => console.log(res));
        alert('Salvou o Usuário nos logs');
    }
    public cancelar(){
        console.log('Foi cancelado o cadastro de usuário');
    }
}