import { Directive, HostListener, ElementRef, Input, inject } from '@angular/core';
@Directive({
  selector: '[appTooltip]',
})
export class Tooltip {
  @Input() public tooltipMessage?: string = 'Интерактивный элемент, можно нажать';
  @Input() public tooltipPosition?: string = 'top';
  private targetElementRef: ElementRef = inject(ElementRef);
  private targetElem = this.targetElementRef.nativeElement as HTMLElement;
  private tooltipElement: HTMLElement | null = null;

  @HostListener('mouseenter') onMouseEnter() {
    this.create();
    this.togglVisability();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.togglVisability();
  }
  private create(): void {
    if (!this.tooltipElement) {
      const tooltipElem = `<span class="tooltip tooltip_${this.tooltipPosition} hide">${this.tooltipMessage}</span>`;
      this.targetElem.classList.add('container');
      this.targetElem.insertAdjacentHTML('beforeend', tooltipElem);
      this.tooltipElement = this.targetElem.querySelector('.tooltip');
    }
  }

  private togglVisability() {
    this.tooltipElement?.classList.toggle('hide');
  }
}
