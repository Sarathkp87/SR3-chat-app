import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  searchText:any;
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    {
      name: 'David',
      time: '8:21',
      latestMessage: 'do or die',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'Dhamu',
      time: '8:21',
      latestMessage: "don't forget!!!",
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'vivian',
      time: '8:21',
      latestMessage: 'full power',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'Aparna',
      time: '8:21',
      latestMessage: 'full on',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'vidya',
      time: '8:21',
      latestMessage: 'get the hell out of here',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'Arpith',
      time: '8:21',
      latestMessage: 'Good morning!!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'haney',
      time: '8:21',
      latestMessage: 'Good morning!!!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'davis',
      time: '8:21',
      latestMessage: 'how is the hit',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'michael',
      time: '8:21',
      latestMessage: 'Good morning!!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'divya',
      time: '8:21',
      latestMessage: 'cool',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'sandra',
      time: '8:21',
      latestMessage: 'Good morning!!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'alex',
      time: '8:21',
      latestMessage: 'hey',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
    {
      name: 'justin',
      time: '8:21',
      latestMessage: 'Go to hell',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'hello world', time: '8:48', me: false },
        { id: 1, body: 'how are you?', time: '8:48', me: false },
        { id: 1, body: 'sweet dreams', time: '8:48', me: true },
        { id: 1, body: 'all the best', time: '8:48', me: true },
      ],
    },
  ];
  get filteredConversations() {
    return this.conversations.filter((conversation) => 
      conversation.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      conversation.latestMessage.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  
  constructor() { }
  ngOnInit(): void { }
}
