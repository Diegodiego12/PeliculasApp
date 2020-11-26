import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PeliService } from '../../service/peli.service';
import { IPelis } from '../../model/IPelis.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})

export class PeliculasPage implements OnInit {
  
  results: Observable<IPelis>;
  term: string= '';
  type: string= '';
  darkMode: boolean= false;


  constructor(private peliService: PeliService) { 
  }
  change(){
      this.darkMode = this.darkMode;
      document.body.classList.toggle('dark');

  }
  ngOnInit() {
  }

  searchChanged(): void {
    this.results = this.peliService.searchMovies(this.term, this.type); 
  }

}
