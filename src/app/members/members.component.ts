import { Component, OnInit } from '@angular/core';
import {Member } from '../member';
import {MEMBERS} from '../members-list';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members = MEMBERS;
  selectedMember: Member;
  constructor() { }

  ngOnInit() {
  }

  onSelectMember(member: Member) {
    this.selectedMember = member;
  }

}
