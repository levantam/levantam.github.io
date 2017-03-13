import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
})
export class AppComponent implements OnInit {

  constructor(private elRef: ElementRef) {

  }
  ngOnInit() {
    jQuery(this.elRef.nativeElement).find(".readmore").readmore({
      collapsedHeight: 300,
      moreLink: '<a class="btn-readmore btn-readmore-open" href="#">Read more</a>',
      lessLink: '<a class="btn-readmore btn-readmore-close" href="#">Close</a>'
    });
    jQuery(this.elRef.nativeElement).find('.circle').circleProgress({
      value: 0.75,
      size: 80,
      fill: {
        gradient: ["#9a85f7", "#d8d2f2"]
      }
    });

    jQuery(this.elRef.nativeElement).ready(function () {

    });
  }

  name = 'Angular';
}
