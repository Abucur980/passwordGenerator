import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lengthInput = 0;
  isLetterChecked = false;
  isNumberChecked = false;
  isSpecialCharChecked = false;
  password = ''; // false

  onChangeLength(event : Event) {
    const target = event.target as HTMLInputElement;
    const theLength = parseInt(target.value);
    if(!isNaN(theLength)) {
      this.lengthInput = theLength;
    }
  }

  changeLetterCheckbox() {
    this.isLetterChecked = !this.isLetterChecked;
  }

  changeNumberCheckbox() {
    this.isNumberChecked = !this.isNumberChecked;
  }

  changeSpecialCHarCheckbox() {
    this.isSpecialCharChecked = !this.isSpecialCharChecked;
  }

  getPass() {
    // console.log(this.isLetterChecked, this.isNumberChecked, this.isSpecialCharChecked, this.lengthInput);
    const nums = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.isLetterChecked) {
      validChars += letters;
    }
    if (this.isNumberChecked) {
      validChars += nums;
    }
    if (this.isSpecialCharChecked) {
      validChars += symbols;
    }
    let generatedPass = '';
    for (let i = 0; i < this.lengthInput; ++i) {
      generatedPass += validChars[Math.floor(Math.random()*validChars.length)];
    }
    this.password = generatedPass;
    return this.password;
  }

}

