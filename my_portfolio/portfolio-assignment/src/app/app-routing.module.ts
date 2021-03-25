import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: "\login", component: LoginComponent, children: [
      { path: "\signUp", component: SignUpComponent, pathMatch: 'full' },
    ]
  },
  { path: "\signUp", component: SignUpComponent},
  { path: "\portfolio", component: PortfolioComponent },
  { path: "", redirectTo: "\login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
