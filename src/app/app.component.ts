import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  videoUrl = '';
  loading = false;
  errorMessage = '';
  downloadLink = '';
  navOpen = false;
  year = new Date().getFullYear();

  navLinks = ['Home', 'Features', 'Contact'];
  features = [
    { title: 'Fast Download', desc: 'Supports multiple platforms instantly.' },
    { title: 'One‑Click', desc: 'Clean, modern, and user-friendly interface.' },
    { title: 'Error Handling', desc: 'Invalid URLs are caught early.' },
  ];

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  async onSubmit() {
    this.errorMessage = '';
    this.downloadLink = '';
    this.loading = true;
    try {
      this.downloadLink = await this.mockDownload(this.videoUrl);
    } catch (err: any) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  mockDownload(url: string): Promise<string> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (!this.validateUrl(url)) return rej('Invalid URL.');
        if (!/instagram|facebook|tiktok/.test(url)) return rej('Unsupported platform.');
        if (url.includes('bad')) return rej('Broken or unavailable link.');
        return res('https://example.com/download.mp4');
      }, 1000);
    });
  }

  validateUrl(url: string): boolean {
    const pat = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;
    return pat.test(url);
  }
}
