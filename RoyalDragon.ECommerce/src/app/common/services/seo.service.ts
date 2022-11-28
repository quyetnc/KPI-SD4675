import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta,Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private doc, private _meta: Meta, private _title: Title) { }

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }
  createMeta(content: string, imgLink: string = '', url: string = ''): void {
    this._title.setTitle(content+ '| King Yến Mạch Trading');
    this._meta.addTags([
      { name: 'title', content: content },
      { name: 'description', content: content + '| King Yến Mạch Trading' },
      { name: 'keywords', content: content },
    ]);
    if (imgLink != '') {
      this._meta.addTag({ name: 'og:image', content: imgLink })
    }
    if (imgLink != '') {
      this._meta.addTag({ name: 'og:url', content: this.doc.URL })
    }
  }
} 