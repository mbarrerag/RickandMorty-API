import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  constructor(private router: Router) { }

 onSearch(value: string) {

  console.log(value);
   if (value && value.length > 3) {
     this.router.navigate(['/character-list'], { queryParams: { q: value } });
   }
    
  }
}

