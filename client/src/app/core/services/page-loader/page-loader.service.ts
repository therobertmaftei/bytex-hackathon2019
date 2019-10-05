import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  private readonly loader: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loader = this.document.getElementById('page-loader');
  }

  public hideLoader(): void {
    this.loader.classList.add('page-loader--hidden');
    this.loader.classList.remove('page-loader--solid');
  }

  public showLoader(): void {
    this.loader.classList.remove('page-loader--hidden');
  }
}
