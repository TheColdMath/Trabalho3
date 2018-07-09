import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';
import { CadastroLivro } from './pages/cadastro-livro/cadastro-livro';
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { Locacao } from './pages/locacao/locacao';

export const appRoutes: Routes = [
    /**
     * Definição das rotas que o sistema vai ter
     * para cada rota precisa de um componente
     */
    {
        path: 'cadastro-livro',
        component: CadastroLivro
    },{
        path:'alterar-senha',
        component: AlterarSenha
    },
    {
        path:'cadastro-usuario',
        component: CadastroUsuario
    },
    {
        path:'locacao',
        component: Locacao
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoute {
    
    constructor(router: Router) {
    }
}