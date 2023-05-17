import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasPlaygroundComponent } from './components/canvas-playground/canvas-playground.component';
import { CanvasControlsComponent } from './components/canvas-controls/canvas-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanvasContainerComponent } from './components/canvas-container/canvas-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasPlaygroundComponent,
    CanvasControlsComponent,
    CanvasContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
