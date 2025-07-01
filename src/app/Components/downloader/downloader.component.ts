import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-downloader',
    templateUrl: './downloader.component.html',
    styleUrl: './downloader.component.scss',
    standalone: false
})
export class DownloaderComponent {
  url: string = '';
  mediaData: any = null;
  error: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  downloadMedia() {
    this.error = '';
    this.mediaData = null;

    if (!this.url || !this.isValidURL(this.url)) {
      this.error = 'Please enter a valid URL.';
      return;
    }

    this.loading = true;

    this.http
      .get<any>(`https://api.example.com/download?url=${encodeURIComponent(this.url)}`)
      .subscribe({
        next: (res) => {
          this.loading = false;
          if (res.success) {
            this.mediaData = res.data;
          } else {
            this.error = res.message || 'Unable to download. The content might be private.';
          }
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Something went wrong or the URL is unsupported.';
        }
      });
  }

  isValidURL(url: string): boolean {
    const pattern = /^(http|https):\/\//;
    return pattern.test(url);
  }
}
