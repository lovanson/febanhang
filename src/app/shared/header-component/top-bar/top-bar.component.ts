import { Component } from '@angular/core';
import { Country } from '@angular-material-extensions/select-country';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  countryFormControl = new FormControl();
  countryFormGroup: FormGroup| any;

  public customeDropdown = {
    Dropdown : "Germany",
    flag : "ad.svg"
  }
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.countryFormGroup = this.formBuilder.group({
      country: [],
    });

    this.countryFormGroup
      .get('country')
      .valueChanges.subscribe((country: any) =>
        console.log(
          'this.countryFormGroup.get("country").valueChanges',
          country
        )
      );

    this.countryFormControl.valueChanges.subscribe((country) =>
      console.log('this.countryFormControl.valueChanges', country)
    );
  }

  onCountrySelected($event: Country) {
    console.log($event);
  }

  checkClick(){
    console.log("Working");
  }
}
