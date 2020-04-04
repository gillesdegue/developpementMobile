import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  typeAdmin: boolean;
  constructor() {}
  ngOnInit(): void {

    if (window.localStorage.getItem("role")!= "admin") {
      this.typeAdmin = false;
      }else {
        this.typeAdmin = true;
      }
  }

}
