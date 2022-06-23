import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { ElectronicsComponent } from './component/electronics/electronics.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SideComponent } from './side/side.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { BindingComponent } from './binding/binding.component';
import { BindingnameComponent } from './bindingname/bindingname.component';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { DemoifComponent } from './demoif/demoif.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ApidemoComponent } from './apidemo/apidemo.component';
import { ApicallComponent } from './apicall/apicall.component';
@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
    MainComponent,
    HeaderComponent,
    LogoComponent,
    SideComponent,
    AsideComponent,
    SectionComponent,
    FooterComponent,
    DatabindingComponent,
    BindingComponent,
    BindingnameComponent,
    ModelComponent,
    TodolistComponent,
    LoginComponent,
    IfdemoComponent,
    DemoifComponent,
    NgifComponent,
    NgforComponent,
    ApidemoComponent,
    ApicallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [ApicallComponent]
})
export class AppModule { }
