import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  categoryList=[
    {id:1,name:'Development'},
    {id:2,name:'Art'},
    {id:3,name:'Languages'} 
  ];

  

}
