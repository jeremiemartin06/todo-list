import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public todoArray: Array<string> = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'footbar',
  ];
// void = pour rien retourner
  public addItem($event: KeyboardEvent): void {
    if ($event.code === 'Enter') {
      const $input: EventTarget|null = $event.target;
      if ($input instanceof HTMLInputElement){
        const str = $input.value.trim();
        if (str !== ''){
          this.todoArray.push(str);
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
}