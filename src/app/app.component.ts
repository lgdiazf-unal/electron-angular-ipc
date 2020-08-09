import { Component } from '@angular/core';
import {FileService} from './service/file.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor(private fileService: FileService){
		this.fileService.getFiles()
.then(resp=>console.log(resp));
}
  title = 'angular-electron';
}
