import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:"",
    power:0
  };

  constructor() { }

  ngOnInit() {
  }

  emitCharacter(){

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: "",
      power: 0
    }

    //this.character.name = '';
    //this.character.power = 0;


  }

}
