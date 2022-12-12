import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  added: number = 0;
  message: string = '';


  constructor(private catService: CatalogueService) { }

  ngOnInit(): void {}

  addChat(value: any) {
    this.catService.addChat(value).subscribe((data) => {
      this.added++;
      this.message = 'Le message a été envoyé avec succès. Nous vous reviendrons au plus vite';
      value=undefined;
    },(err) => {
      console.log(err);
    });
  }
}
