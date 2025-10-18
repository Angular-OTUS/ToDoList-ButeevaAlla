import { Directive, HostListener, ElementRef, Input, inject } from '@angular/core';
@Directive({
  selector: '[appTooltip]',
})
export class Tooltip {
  @Input() public tooltipMessage?: string = 'Интерактивный элемент, можно нажать';
  @Input() public tooltipPosition?: string = 'top';
  private targetElementRef: ElementRef = inject(ElementRef);
  private targetElem = this.targetElementRef.nativeElement as HTMLElement;

  @HostListener('mouseenter') onMouseEnter() {
    this.create();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.remove();
  }
  private create(): void {
    if (!this.targetElem.querySelector('.tooltip')) {
      const tooltipElem = `<span class="tooltip tooltip_${this.tooltipPosition}">${this.tooltipMessage}</span>`;
      this.targetElem.classList.add('container');
      this.targetElem.insertAdjacentHTML('beforeend', tooltipElem);
    }
  }

  private remove() {
    if (this.targetElem.querySelector('.tooltip')) {
      this.targetElem.querySelector('.tooltip')?.remove();
      this.targetElem.classList.remove('container');
    }
  }
}
