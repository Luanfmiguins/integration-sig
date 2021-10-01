import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//* 👆🏻 configuracao angular 👆🏻 *//

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

//* 👆🏻 componentes de login 👆🏻 *//

import { SidebarComponent } from './components/template/sidebar/sidebar.component';

//* 👆🏻 componentes de layout 👆🏻 *//

import { RamaisTableComponent } from './views/ramais/ramais-table/ramais-table.component';
import { RamaisDeleteComponent } from './views/ramais/ramais-delete/ramais-delete.component';
import { RamaisViewComponent } from './views/ramais/ramais-view/ramais-view.component';
import { RamaisEditComponent } from './views/ramais/ramais-edit/ramais-edit.component';
import { AniversariantesTableComponent } from './views/aniversariantes/aniversariantes-table/aniversariantes-table.component';
import { NoticiasTableComponent } from './views/noticias/noticias-table/noticias-table.component';
import { NoticiasEditComponent } from './views/noticias/noticias-edit/noticias-edit.component';
import { NoticiasViewComponent } from './views/noticias/noticias-view/noticias-view.component';
import { NoticiasDeleteComponent } from './views/noticias/noticias-delete/noticias-delete.component';
import { AniversariantesEditComponent } from './views/aniversariantes/aniversariantes-edit/aniversariantes-edit.component';
import { AniversariantesViewComponent } from './views/aniversariantes/aniversariantes-view/aniversariantes-view.component';
import { AniversariantesDeleteComponent } from './views/aniversariantes/aniversariantes-delete/aniversariantes-delete.component';
import { AniversariantesAddComponent } from './views/aniversariantes/aniversariantes-add/aniversariantes-add.component';
import { NoticiasAddComponent } from './views/noticias/noticias-add/noticias-add.component';
import { RamaisAddComponent } from './views/ramais/ramais-add/ramais-add.component';

//* 👆🏻 componentes de cadastros 👆🏻 *//

import { NotFoundComponent } from './components/not-found/not-found.component';

//* 👆🏻 componentes de 404 👆🏻 *//

import { AuthGuard } from './auth/shared/auth.guard';

//* 👆🏻 protetor de rotas 👆🏻 *//

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'noticias', pathMatch: 'full' },

      { path: 'ramais', component: RamaisTableComponent },
      { path: 'ramais/add', component: RamaisAddComponent },
      { path: 'ramais/view/:id', component: RamaisViewComponent },
      { path: 'ramais/update/:id', component: RamaisEditComponent },
      { path: 'ramais/delete/:id', component: RamaisDeleteComponent },

      { path: 'noticias', component: NoticiasTableComponent },
      { path: 'noticias/add', component: NoticiasAddComponent },
      { path: 'noticias/view/:id', component: NoticiasViewComponent },
      { path: 'noticias/update/:id', component: NoticiasEditComponent },
      { path: 'noticias/delete/:id', component: NoticiasDeleteComponent },

      { path: 'aniversariantes', component: AniversariantesTableComponent },
      { path: 'aniversariantes/add', component: AniversariantesAddComponent },
      { path: 'aniversariantes/view/:id', component: AniversariantesViewComponent },
      { path: 'aniversariantes/update/:id', component: AniversariantesEditComponent },
      { path: 'aniversariantes/delete/:id', component: AniversariantesDeleteComponent },
    ],

    canActivate: [AuthGuard]

  },{
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: '404', component: NotFoundComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
