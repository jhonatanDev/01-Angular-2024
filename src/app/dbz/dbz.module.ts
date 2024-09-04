import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { ListDBZComponent } from './components/list/list-dbz.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainPagesComponent,
    ListDBZComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPagesComponent
  ]
})
export class DbzModule { }
