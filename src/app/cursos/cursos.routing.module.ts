import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes= [
        { path: 'cursos', component: CursosComponent },
        { path: 'curso/:id', component:  CursoDetalheComponent },
        { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
];

export let routing: ModuleWithProviders<RouterModule>

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}