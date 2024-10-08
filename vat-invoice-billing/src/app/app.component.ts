import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userValue: number = 0; 
  userValueVAT: number = 0; 

  tlLevy(): string {
    return (this.userValue * 0.01).toFixed(2);
  }

  getFund(): string {
    return (this.userValue * 0.025).toFixed(2);
  }

  covidLevy(): string {
    return (this.userValue * 0.01).toFixed(2); 
  }

  NHIL(): string {
    return (this.userValue * 0.025).toFixed(2); 
  }

  valueBefore(): string {
    const total = this.userValue + +this.tlLevy() + +this.getFund() + +this.covidLevy() + +this.NHIL();
    return total.toFixed(2); 
  }

  calculateVAT(): string {
    const result = (parseFloat(this.valueBefore()) - parseFloat(this.tlLevy())) * 0.15;
    return result.toFixed(2); 
  }

  allTaxes(): string {
    const totalTaxes = parseFloat(this.calculateVAT()) + parseFloat(this.valueBefore());
    return totalTaxes.toFixed(2); 
  }

  exclusiveInclusive(): string {
    const result = this.userValueVAT / 1.229;
    return result.toFixed(2); 
  }
}
