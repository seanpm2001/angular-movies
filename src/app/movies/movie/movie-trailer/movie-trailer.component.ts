import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-trailer',
  template: `
    <div class="embedresize">
      <div>
        <iframe
          loading="lazy"
          width="auto"
          height="auto"
          [src]="url"
          frameborder="0"
          allowfullscreen
          include
        ></iframe>
      </div>
    </div>
  `,
  styleUrls: ['./movie-trailer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTrailerComponent {
  url: SafeResourceUrl;

  constructor(
    // tslint:disable-next-line: no-unused-variable
    public dialogRef: MatDialogRef<MovieTrailerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dom: DomSanitizer
  ) {
    this.url = this.dom.bypassSecurityTrustResourceUrl(this.data.url);
  }
}
