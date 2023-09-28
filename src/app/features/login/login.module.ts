import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([
      {path: '', component: LoginModule }
    ])
  ]
})
export class LoginModule { }
