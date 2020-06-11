import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  @ViewChild('btn', { static: true }) btn: ElementRef;
  public obsSubscription: Subscription;
  public obs: Observable<any>;
  public count = 0;
  constructor() { }

  ngOnInit(): void {
    this.obs = fromEvent(this.btn.nativeElement, 'click');
    if (this.count > 4) {
      this.obsSubscription.unsubscribe();
    } else {
    this.obsSubscription = this.obs.subscribe(
      (res: any) => {
        this.count++;
        this.onStartStreaming(this.count);
      }
    );
    }
  }

  public onStartStreaming(count) {
    const ul = document.getElementById('myul');
    const li = document.createElement('li');
    li.innerText = 'Video ' + count;
    ul.appendChild(li);
  }

}
