import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Com ô Marché';

 

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.initialisationDefaultsUsersDatas();
  }

}
