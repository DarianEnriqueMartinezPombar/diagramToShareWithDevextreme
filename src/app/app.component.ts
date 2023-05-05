import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';


@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;

  constructor(http: HttpClient) {
    http.get('https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/diagram-flow.json').subscribe((data) => {
      this.diagram.instance.import(JSON.stringify(data));
    }, (err) => {
      throw 'Data Loading Error';
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDiagramModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
