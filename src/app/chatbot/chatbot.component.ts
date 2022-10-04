import { Component, OnInit } from '@angular/core';
import { ICommon } from '../icommon';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  chatbot: ICommon = {
    title: 'Chatbot',
    id: 1,
    name: 'Vehicle_Chatbot',
    description:'Get Ready to experience the most innovative way of fetching information for a Vehicle.'
    +' We have a chatbot for you to answer all your queries...!',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
