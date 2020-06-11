import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrls: ['./observable-list.component.scss']
})
export class ObservableListComponent implements OnInit {

  public obsList: string[] = ['FromEvent', 'interval/timer', 'of/from', 'toArray', 'custom Observable', 'map', 'filter'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onRxjs(path) {
    this.router.navigate([`observable/${path}`])
  }

}
