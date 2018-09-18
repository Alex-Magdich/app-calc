import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

      trigger('goals', [
          transition('* => *',[
              query(':enter', style ({ opacity:0 }), {optional:true}),

              query(':enter', stagger('300ms', [
                  animate('.6s ease-in', keyframes([
                      style({opacity:0, tranform: 'translateY(-75%)', offset: 0}),
                      style({opacity:.5, tranform: 'translateY(35px)', offset: 0.3}),
                      style({opacity:1, tranform: 'translateY(0)', offset: 1})
                  ]))]), {optional:true})
          ])
      ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number ;
  btnText: string = 'Добавить задачу';
  goalText: string = 'Первая задача';
  goals = ['поспать', 'поесть' , 'посрать' ];
  constructor() { }

  ngOnInit() {
      this.itemCount = this.goals.length;
  }
  addItem(){
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
  }

}
