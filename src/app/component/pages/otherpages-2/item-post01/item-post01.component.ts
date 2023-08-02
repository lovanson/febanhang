import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-post01',
  templateUrl: './item-post01.component.html',
  styleUrls: ['./item-post01.component.scss'], 
})
export class ItemPost01Component {
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  files: File[] = [];

  onSelect(event: any) {
   
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
   
    this.files.splice(this.files.indexOf(event), 1);
  }
}
