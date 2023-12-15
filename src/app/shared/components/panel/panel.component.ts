import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  myVar: string = 'C:\Users\Stepe\Desktop\APi\RickandMorty-API\src\app\images\stars-background.jpg';
  backGroundImages = 'https://wallpapercave.com/wp/Y0StpXn.jpg';
  backGroundFisrtImages = 'https://th.bing.com/th/id/R.9aebe6617886f628427cdaad7af65a83?rik=Y5cx9mQ%2f1z38gA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2f6%2f9%2f1462662-most-popular-portal-wallpaper-iphone-1080x1920-hd-1080p.jpg&ehk=bWbWfv2AqT9PNopa9TbGAzib40Rvv1YaiW0DDf346RA%3d&risl=&pid=ImgRaw&r=0';

}
