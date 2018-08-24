import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOption } from '../../models/radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void{
    this.value = obj
  }


  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void{}
  /**
   * This function is called by the forms API when the control status changes to
   * or from "DISABLED". Depending on the value, it should enable or disable the
   * appropriate DOM element.
   *
   * Example implementation of `setDisabledState`:
   *
   * ```ts
   * setDisabledState(isDisabled: boolean): void {
   *   this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
   * }
   * ```
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void{}

}
