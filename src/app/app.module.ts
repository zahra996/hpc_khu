import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopHeaderComponent } from './pages/home/top-header/top-header.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSliderComponent } from './pages/home/main-slider/main-slider.component';
import { NewsEventSectionComponent } from './pages/home/news-event-section/news-event-section.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { PricingComponent } from './pages/home/pricing/pricing.component';
import { DocumentComponent } from './pages/home/document/document.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopHeaderComponent,
    HeaderComponent,
    MainSliderComponent,
    NewsEventSectionComponent,
    ServicesComponent,
    PricingComponent,
    DocumentComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule ,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RecaptchaModule,
     RecaptchaFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
