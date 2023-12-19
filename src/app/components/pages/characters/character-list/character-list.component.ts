import { Component } from '@angular/core';
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
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  private maxValor = 10;
  backGroundImages = 'https://wallpapercave.com/wp/Y0StpXn.jpg';


  constructor(private router: Router, private characterSvc: CharacterService, private route: ActivatedRoute) {
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
    this.getDataFromService();
    this.getCharactersByQuery();
  }


  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: Params) => {
      this.query = params['q'];
      console.log(this.query);
      this.getDataFromService();

    });


  }
  private getDataFromService(): void {


    this.characterSvc.searchCharacter(this.query, this.pageNum).pipe(take(1)).subscribe((res: any) => {
      const { info, results } = res;
      if (res?.results?.length) {

        this.characters = results.map((character: Character) => {
          return character;
        });


        this.info = info;

        console.log(res.results);
        console.log("caracters", this.characters);
      }
      else {
        this.characters = [];
      }
    });
  }

}
