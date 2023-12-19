import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '@app/shared/components/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable, take, window } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})

export class CharacterDetailsComponent {
  character$!: Observable<Character>



constructor(private route:ActivatedRoute, private characterSvc:CharacterService, private location:Location) {}

ngOnIni(): void {


this.route.params.pipe(take(1)).subscribe((params: Params) => {
  const id = params['id'];
  this.character$ = this.characterSvc.getDetails(id);
  

  });
}

onGoBack(): void {
  this.location.back();

}

}

