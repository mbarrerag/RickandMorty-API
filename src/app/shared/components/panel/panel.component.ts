import { Component, ElementRef, Renderer2 } from '@angular/core';
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
  game = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1055214/Rick-Spaceship.png'

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) { }
  onSearch(value: string) {

    console.log(value);
     if (value && value.length > 3) {
       this.router.navigate(['/character-list'], { queryParams: { q: value } });
     }
      
    }

    private isMouseOver = false;

   
  
    onMouseEnter() {
      this.isMouseOver = true;
    }
  
    onMouseLeave() {
      this.isMouseOver = false;
    }
  
    onMouseMove(event: MouseEvent) {
      const imgElement = this.el.nativeElement.querySelector('.game');
      const rect = imgElement.getBoundingClientRect();

      // Calculate the percentage of mouse position within the image
      const percentX = (event.clientX - rect.left) / rect.width;
      const percentY = (event.clientY - rect.top) / rect.height;

      // Use translate and percentage values for flexibility
      this.renderer.setStyle(
        imgElement,
        'transform',
        `translate(${percentX * 50}px, ${percentY * 50}px)`
      );
    }





    }

    

