import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DocumentComponent } from './pages/home/document/document.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsEventSectionComponent } from './pages/home/news-event-section/news-event-section.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsEventSectionComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'education', component: DocumentComponent },
  { path: 'contact', component: FooterComponent },
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
