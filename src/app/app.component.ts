import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  windowI = {
    id: 'number',
    height: 'number',
    width: 'number',
    name: 'string',
    controls: [
      {
        id: 'number',
        name: 'string',
        type: 'string',
        attributes: {
          id: 'number',
          cols: 'string',
          style: 'string',
        },
        options: [],
        tag: 'string',
      },
    ],
    designId: 'number',
    type: 'string',
  };
  formats = [
    {
      id: 'string',
      format: 'string',
      formatDisplay: 'string',
      type: 'number',
    },
  ];
}
