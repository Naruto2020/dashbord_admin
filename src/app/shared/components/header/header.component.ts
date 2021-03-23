import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // permet au composant header de communiquer avec sont parent default via un évènement 
  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 200);
  }

}
