import { Component } from '@angular/core';
import { Character } from '@app/shared/components/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from 'rxjs/operators';
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

  constructor(private characterSvc: CharacterService) {}
    
      ngOnInit(): void {
        this.getDataFromService();
      }

      private getDataFromService(): void{
      
          
        this.characterSvc.searchCharacter(this.query, this.pageNum).pipe(take(1)).subscribe((res: any) => {
        const { info, results } = res;
   
        this.characters = [...this.characters, res.results[1]];
        this.info = info;
        console.log(res.results);
        
        console.log("caracters",this.characters);
    });
  }

}
