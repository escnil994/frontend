import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './pages/delete/delete.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';
import {PostsRoutingModule} from "./posts-routing.module";



@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }