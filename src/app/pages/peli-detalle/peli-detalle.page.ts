import { Component, OnInit } from '@angular/core';

import { PeliService } from '../../service/peli.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peli-detalle',
  templateUrl: './peli-detalle.page.html',
  styleUrls: ['./peli-detalle.page.scss'],
})
export class PeliDetallePage implements OnInit {
  content: any = null;
  darkMode: boolean= false;

  constructor(private peliService: PeliService, private activatedRoute: ActivatedRoute) { }
  change(){
    this.darkMode = this.darkMode;
    document.body.classList.toggle('dark');

}

  ngOnInit() {
    let myId= this.activatedRoute.snapshot.paramMap.get('myId');
    this.peliService.getDetails(myId).subscribe(result => this.content = result);

  }

}