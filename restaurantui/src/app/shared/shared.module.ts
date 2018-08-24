import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SnackbarComponent, 
    InputComponent, 
    RadioComponent, 
    RatingComponent
  ],
  exports: [
    SnackbarComponent, 
    InputComponent, 
    RadioComponent, 
    RatingComponent
  ],
})
export class SharedModule { }
