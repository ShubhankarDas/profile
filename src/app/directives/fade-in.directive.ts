import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.classList.add('before-animate');
    this.checkIfNeedsToAnimate();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.el.nativeElement.classList.contains('animate')) {
    this.checkIfNeedsToAnimate();
    }
  }

  checkIfNeedsToAnimate() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    const viewHeight = window.innerHeight;

    const calculatedPositionForAnimation =
      componentPosition - (viewHeight / 3) * 2;

    if (
      componentPosition < viewHeight ||
      scrollPosition > calculatedPositionForAnimation
    ) {
      this.el.nativeElement.classList.add('animate');
    }
  }
}
