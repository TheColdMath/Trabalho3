import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Usuario } from '../../model/usuario';
@Component({
    selector:'cadastro-usuario',
    styleUrls:['cadastro-usuario.scss'],
    templateUrl:'cadastro-usuario.html'
})
export class CadastroUsuario implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario

    constructor(private formBuilder:FormBuilder){
        
    }

    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            codigo:[null],
            nome:[null, Validators.required],
            email:[null, Validators.required],
            ativo:[true],
            login:[null, Validators.required],
            senha:[null, Validators.required],
            confirmeSenha:[null, Validators.required],
            cpf:[null, Validators.required],
            apelido:[null],
            grupoUsuario:[null, Validators.required],
            telefone:[null],
            celular:[null]

        });

    }

    public salvar(){
        console.log(this.usuario);
        let user = JSON.stringify(this.usuario);
        localStorage.setItem('usuario', user);
        alert('Salvou o Usuário nos logs');
    }
    public cancelar(){
        console.log('Foi cancelado a alteração de senha');
    }
}