import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public allContacts: any

  constructor(public navCtrl: NavController, public contacts: Contacts) {
      this.contacts.find(['name'], {filter: "", multiple: true}).then(data => {
          this.allContacts = data
      });
  }
}
