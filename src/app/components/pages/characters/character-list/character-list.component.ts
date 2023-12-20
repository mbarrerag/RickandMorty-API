import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Params, Router } from '@angular/router';
import { Character } from '@app/shared/components/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { filter, take } from 'rxjs/operators';
type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  info: RequestInfo = {

    next: "",
  };

  characters: Character[] = [];
  showGoUpButton = false;
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
    backGroundImages = 'https://wallpapercave.com/wp/Y0StpXn.jpg';


  constructor(private router: Router, private characterSvc: CharacterService, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    this.OnUrlChange();
   }

  private OnUrlChange() {
   this.router.events.pipe((filter((event) => event instanceof NavigationEnd))).subscribe(() => {
     this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQuery
   });
 }


  onSearch(value: string) {

    console.log(value);
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], { queryParams: { q: value } });
    }

  }
  ngOnInit(): void {

    this.getCharactersByQuery();
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  

  onScrollDown():void{
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
      console.log("Number of pages",this.pageNum);
  
    }
  }

  onScrollTop():void{
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }
 
  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: Params) => {
      console.log('Params->', params);
      this.query = params['q'];
      this.getDataFromService();
    });
  }


 
  private getDataFromService(): void {
    this.characterSvc.searchCharacter(this.query, this.pageNum).pipe(take(1)).subscribe((res: any) => {
      const { info, results } = res;
      
      if (res?.results?.length) {
        // Append new characters to the existing array
        this.characters = [...this.characters, ...results.map((character: Character) => character)];
        this.info = info;
      } else {
        // Handle the case when there are no results
        this.characters = [];
      }
    });
  }
  
}
