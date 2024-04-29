import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
    @Input() conversation: any;
  @Output() onsubmit:EventEmitter<any> =new EventEmitter();
  ngOnInit(): void {
  
  }
  submitMessage(event:any):any{
  let value=event.target.value.trim();
  event.target.value='';
  if(value.length < 1) return false;
    this.conversation.latestMessage=value;
  this.conversation.messages.unshift({
    id: 1,
     body: value, 
     time: '1:41',
      me: true
  });
  }
  

}
