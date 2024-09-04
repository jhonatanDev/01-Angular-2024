import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list-dbz.component.html',
  styleUrls: ['./list-dbz.component.css']
})
export class ListDBZComponent implements OnInit {

  @Output()
  public deleteCharacter:EventEmitter<number> = new EventEmitter();


  @Input()
  public charactersList:Character[] = [
    {
      name:"Trunks",
      power:10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onDeleteCharacter(index:number):void{
    console.log(index);
    this.deleteCharacter.emit(index);
  }

}
