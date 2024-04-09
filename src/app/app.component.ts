import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Quill from 'quill'; // Add this import statement
// import Quill from 'quill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  isBrowser: boolean;
  editor: any;

  ngAfterViewInit() {
    this.quill();
  }

  get toolbar() {
    return [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      // [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button
    ];
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async quill() {
    if (this.isBrowser) {
      const m = await import('quill');
      console.log(`🚀 => AppComponent => quill => m:`, m)
      this.editor = new m.default('#editor', {
        // modules: { toolbar: '#toolbar' },
        modules: { toolbar: this.toolbar },
        theme: 'snow',
        placeholder: "placeholder",
      });
      console.log(`🚀 => AppComponent => quill => this.editor:`, this.editor)
    }
  }
}
