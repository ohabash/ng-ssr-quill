import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Quill from 'quill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit{
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

  quill() {
    this.editor = new Quill('#editor', {
      // modules: { toolbar: '#toolbar' },
      modules: { toolbar: this.toolbar },
      theme: 'snow',
      placeholder: 'test placeholder',
    });
    console.log(`🚀 => AppComponent => quill => this.editor:`, this.editor);
  }
}
