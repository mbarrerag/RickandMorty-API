import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  myVar: string = 'C:\Users\Stepe\Desktop\APi\RickandMorty-API\src\app\images\stars-background.jpg';

  tittle = 'https://vignette.wikia.nocookie.net/fictionalcrossover/images/c/c8/Rick_and_Morty_logo.png/revision/latest?cb=20150515125959';
  rick = 'https://media.tenor.com/H2mK_NOHBh8AAAAi/rick-and.gif'
  portal ='https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif'

  constructor(private router: Router) { }
  onSearch(value: string) {

    console.log(value);
     if (value && value.length > 3) {
       this.router.navigate(['/character-list'], { queryParams: { q: value } });
     }
      
    }
}
