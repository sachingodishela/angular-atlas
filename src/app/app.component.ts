import { Component } from '@angular/core';
import * as Realm from 'realm-web'
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private messageService: MessageService) {}

  title = 'Tour of Heroes';
  realmApp?: Realm.App


  async ngOnInit(): Promise<void> {
    try {
      this.realmApp = new Realm.App({ id: "toh-ryqqo" })
      await this.realmApp.logIn(Realm.Credentials.anonymous())
      this.messageService.add(`Logged in anonymously`)
    } catch (err) {
      this.messageService.add(`Failed to connect to atlas, ${err}`)
    }
  }
}
