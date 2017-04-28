import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {
  title;
  description;
  constructor(public navCtrl: NavController, public view: ViewController) {
  }
  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.view.dismiss(newItem);
  }
  close(){
    this.view.dismiss();
  }
}
