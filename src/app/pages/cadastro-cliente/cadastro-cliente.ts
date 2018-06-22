import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Cliente } from "../../model/cliente";
@Component({
    selector:'cadastro-cliente',
    styleUrls:['cadastro-cliente.scss'],
    templateUrl:'cadastro-cliente.html'
})
export class CadastroCliente implements OnInit {

    public formGroup:FormGroup;
    public cliente:Cliente = new Cliente

    constructor(private formBuilder:FormBuilder){
        
    }

    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            
            razaoSocial:[null, Validators.required],
            fantasia:[null, Validators.required],
            rg:[null, Validators.required],
            cpf:[null, Validators.required],
            dataNascimento:[null, Validators.required],
            cep:[null, Validators.required],
            celular:[null, Validators.required],
            telefone:[null, Validators.required],
            cidade:[null, Validators.required],
            estado:[null, Validators.required],
            email:[null, Validators.required],
            bairro:[null, Validators.required],
            rua:[null, Validators.required],
            numero:[null, Validators.required],
            complemento:[null, Validators.required]
        });

    }

    public salvar(){
        console.log(this.cliente);
        let user = JSON.stringify(this.cliente);
        localStorage.setItem('usuario', user);
        alert('Salvou o Usuário nos logs');
    }
    public cancelar(){
        console.log('Foi cancelado a alteração de senha');
    }
}