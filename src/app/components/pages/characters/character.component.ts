import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Character } from "@app/shared/components/interface/character.interface";

@Component({
  selector: "app-character",
  template:  `
   <a [routerLink]="['/character-details', character.id]">
  <div class="card mb-5">
 



            <h2 class="name">{{ character.name | slice:0:15 }}</h2>
         
        <div class="image">
          <a [routerLink]="['/character-details', character.id]">
            <img
              [src]="character.image"
              [alt]="character.name"
              class="card-img-top"
            />
          </a>
        </div>
        <div class="card-inner">
          <div class="information">
           
               

            <h2 >Species: {{ character.species | slice:0:15 }}</h2>
            <h2 [ngClass]="{'alive': character.status === 'Alive', 'dead': character.status === 'Dead' }">Status: {{ character.status | slice:0:15 }}</h2>
            <h2 >Gender: {{ character.gender }}</h2>
            <h2 >{{ character.created | date}}</h2>
          </div>
        </div>
      </div>
      </a>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./character.component.scss"],

  //Take uput of the tree of components so i will manually will update
})


export class CharacterComponent {
  @Input() character!: Character;
}