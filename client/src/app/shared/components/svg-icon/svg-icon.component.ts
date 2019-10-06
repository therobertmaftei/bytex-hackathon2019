import { Component, Input, ViewEncapsulation } from '@angular/core';

export type IconSizeType = 'small' | 'medium' | 'big' | 'large' | 'extra-large' | number;

@Component({
  selector: 'shared-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SvgIconComponent {
  @Input() public icon: string;
  @Input() public size: IconSizeType;

  public getIconPath(): string {
    return `assets/images/icons.svg#${this.icon}`;
  }

  public getSizeClass(): { [key: string]: boolean } {
    if (!this.size) {
      return { small: true };
    }

    if (!isNaN(+this.size)) {
      return null;
    }

    return { [this.size]: true };
  }

  public getSizeStyle(): { [key: string]: string } {
    if (!isNaN(+this.size)) {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      };
    }

    return null;
  }
}
