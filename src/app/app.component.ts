import { Component } from '@angular/core';
import {todoItem} from './todo-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  

  public todoArray: Array<todoItem> = [];

  public get atLeastOneChecked(): boolean {
    for(const item of this.todoArray){
      if (item.checked) {
        return true;
      }
    }
    return false;
  }

// void = pour rien retourner
  public addItem($event: KeyboardEvent): void {
    if ($event.code === 'Enter') {
      const $input: EventTarget|null = $event.target;
      if ($input instanceof HTMLInputElement){
        const str = $input.value.trim();
        if (str !== ''){
          this.todoArray.push({
            title: $input.value,
            checked: false,
          });
        }
        $input.value = '';
      }   
    }
  }
  public removeItem(index: number): void {
   
    if (index > -1 && index < this.todoArray.length) {
    this.todoArray.splice(index, 1);
  }
}

public clearCompletedItem(): void {
  for (let i = 0; i < this.todoArray.length; i++) {
       if (this.todoArray[i].checked === true) {
         this.todoArray.splice(i, 1);
         i--;
       }
     }
}
}