import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sr3-chat-app';
  conversation: any;

  onConversationSelected(conversation: any){
    this.conversation =conversation;
  }
}
