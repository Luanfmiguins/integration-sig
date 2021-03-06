import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//* ππ» configuraΓ§Γ΅es angular ππ» *//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//* ππ» componentes main ππ» *//

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

//* ππ» import do material angular ππ» *//

import { LoginComponent } from './auth/login/login.component';

//* ππ» componente de login ππ» *//

import { AuthComponent } from './auth/auth.component';

//* ππ» componente pai de auth ππ» *//


//* ππ» layout dashboard ππ» *//

import { RamaisAddComponent } from './views/ramais/ramais-add/ramais-add.component';
import { RamaisEditComponent } from './views/ramais/ramais-edit/ramais-edit.component';
import { RamaisDeleteComponent } from './views/ramais/ramais-delete/ramais-delete.component';
import { RamaisViewComponent } from './views/ramais/ramais-view/ramais-view.component';
import { RamaisTableComponent } from './views/ramais/ramais-table/ramais-table.component';
import { AniversariantesAddComponent } from './views/aniversariantes/aniversariantes-add/aniversariantes-add.component';
import { AniversariantesEditComponent } from './views/aniversariantes/aniversariantes-edit/aniversariantes-edit.component';
import { AniversariantesDeleteComponent } from './views/aniversariantes/aniversariantes-delete/aniversariantes-delete.component';
import { AniversariantesViewComponent } from './views/aniversariantes/aniversariantes-view/aniversariantes-view.component';
import { AniversariantesTableComponent } from './views/aniversariantes/aniversariantes-table/aniversariantes-table.component';
import { NoticiasAddComponent } from './views/noticias/noticias-add/noticias-add.component';
import { NoticiasEditComponent } from './views/noticias/noticias-edit/noticias-edit.component';
import { NoticiasDeleteComponent } from './views/noticias/noticias-delete/noticias-delete.component';
import { NoticiasViewComponent } from './views/noticias/noticias-view/noticias-view.component';
import { NoticiasTableComponent } from './views/noticias/noticias-table/noticias-table.component';

//* ππ» rotinas gerais da aplicaΓ§Γ£o ππ» *//

import { httpInterceptorProviders } from './http-interceptor';
import { ComponentsModule } from './components/components.module';
import { NgxElectronModule } from 'ngx-electron';

//* ππ» intercept de token ππ» *//


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RamaisAddComponent,
    RamaisEditComponent,
    RamaisDeleteComponent,
    RamaisViewComponent,
    RamaisTableComponent,
    NoticiasAddComponent,
    NoticiasEditComponent,
    NoticiasDeleteComponent,
    NoticiasViewComponent,
    NoticiasTableComponent,
    AniversariantesAddComponent,
    AniversariantesEditComponent,
    AniversariantesDeleteComponent,
    AniversariantesViewComponent,
    AniversariantesTableComponent,


  ],
  imports: [
    FormsModule,
    RouterModule,
    LayoutModule,
    ComponentsModule,
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatGridListModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxElectronModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
