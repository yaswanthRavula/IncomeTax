import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Client } from 'src/app/shared/client';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  name;
  mail;
  query="";
  selectedOption;

  constructor(private httpService:HttpService,private router:Router) { }

  ngOnInit(): void {
  }
  bookAppointment(){
    if(this.name.length>=4 && this.mail.length>=5 && this.selectedOption!=undefined ){
      let client:Client={name:this.name, mailId:this.mail,fileType:this.selectedOption,query:this.query}
        this.httpService.addClient(client).subscribe((res)=>{
          if(res==true){
            this.router.navigate(['/posted'])
          }
        });
    }
  }
}
