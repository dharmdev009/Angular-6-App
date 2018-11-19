import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Member } from '../member';
import {MEMBERS} from '../members-list';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members; //= MEMBERS;
  selectedMember: Member;
  constructor(private httpService: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    let a  = this.httpService.get('http://localhost:8080/list')
            .subscribe(res => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
              this.members = res.json();
              console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
            });
    }
    
   

  ngOnInit() {
  }

  onSelectMember(member: Member) {
    this.selectedMember = member;
  }

}
