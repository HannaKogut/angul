import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]

})
export class DirectoryComponent implements OnInit {
		pukhlias = [
			{name: "Kaki", belt: 'black'},
			{name: "Maki", belt: 'red'},
			{name: "Faki", belt: 'purple'}
		];

  constructor(private logger: LoggingService) { 
  }

  	logIt(){
  		this.logger.log();
  	}
  ngOnInit() {
  }

}
