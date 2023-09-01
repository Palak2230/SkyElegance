import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightModeComponent } from './components/light-mode/light-mode.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { ThemePalette } from '@angular/material/core';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [AppComponent, LightModeComponent, DarkModeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatDividerModule, MatSlideToggleModule],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
