import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Client } from 'src/app/shared/client';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  clients:Client[]=[]
  adminKey;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
       document.getElementById("container").style.display="none";
       this.http.getAllClients().subscribe((res)=>{
        this.clients=res;

       })
  }
  onInputChanged(){
    if(this.adminKey=="123456")
        document.getElementById("login").style.background="brown";
  }
  onLogin(){
    if(this.adminKey=="123456"){
      document.getElementById("lock-container").style.display="none";
      document.getElementById("container").style.display="block";
    }
    else{
      alert("Wrong Password")
    }
  }

}
