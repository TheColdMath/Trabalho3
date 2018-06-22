import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { CustomValidators } from 'ng2-validation';
@Component({
    selector:'alterar-senha',
    styleUrls:['alterar-senha.scss'],
    templateUrl:'alterar-senha.html'
})
export class AlterarSenha implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario();
    public confirmeSenha:string;

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){

        const novaSenha = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(50)]));
        const confirmeSenha = new FormControl('',CustomValidators.equalTo(novaSenha));
        
        this.formGroup = this.fb.group({
            nome: ['', Validators.compose([Validators.required])],
            login: ['', Validators.compose([Validators.required])],
            senha: novaSenha,
            confirmeSenha: confirmeSenha
        });

        let user = localStorage.getItem('usuario');
        if (user != null){
            this.usuario = JSON.parse(user);
        }
    }

    public onChangeNewSenha(){
        if ( this.confirmeSenha != null && this.usuario.senha != null){
            if (this.confirmeSenha != this.usuario.senha ){
                this.formGroup.controls.confirmeSenha.setErrors({ senhaNaoConfere: true} );
            }else {
                this.formGroup.controls.confirmeSenha.setErrors(null);
            }
        }
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