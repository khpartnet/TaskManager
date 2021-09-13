import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectCost:number;

  CurrentExpenditure : number;
  AvailableFunds:number;
  Clients: string[];
  Projects:string[];
  Years:number[]=[];
  TeamMemberSummary=[] as any;
  TeamMembers=[] as any;

  constructor( private dashboardservice: DashboardService){

  }

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.Username="Khalid Zarrouki";
    this.NoOfTeamMembers=88;
    this.TotalCostOfAllProjects=2400;
    this.PendingTasks=15;
    this.UpComingProjects=0.2;
    this.ProjectCost=25889600;
    this.CurrentExpenditure=967700;
    this.AvailableFunds=548955;
    this.Clients=["AAA","BBB","CCC"];
    this.Projects=["Project A","Project B", "Project C", "Project D"];
    for(let i=2021; i>=2010; i--){
      this.Years.push(i);
    }
    this.TeamMemberSummary=this.dashboardservice.getTeammembers();
    this.TeamMembers=[
      {Region:"West",Member:[
        {ID:1,Name:"Morad",Statut:"Available"},
        {ID:2,Name:"khalid",Statut:"Available"},
        {ID:3,Name:"hicham",Statut:"Busy"},
        {ID:4,Name:"salah",Statut:"Busy"},
      ]},
      {Region:"East",Member:[
        {ID:5,Name:"Morad",Statut:"Available"},
        {ID:6,Name:"khalid",Statut:"Available"},
        {ID:7,Name:"hicham",Statut:"Busy"},
        {ID:8,Name:"salah",Statut:"Busy"},
      ]},{Region:"West",Member:[
        {ID:9,Name:"Morad",Statut:"Available"},
        {ID:10,Name:"khalid",Statut:"Available"},
        {ID:11,Name:"hicham",Statut:"Busy"},
        {ID:12,Name:"salah",Statut:"Busy"},
      ]},{Region:"West",Member:[
        {ID:13,Name:"Morad",Statut:"Available"},
        {ID:14,Name:"khalid",Statut:"Available"},
        {ID:15,Name:"hicham",Statut:"Busy"},
        {ID:16,Name:"salah",Statut:"Busy"},
      ]}
    ];
    

  }
  onProjectChange($event:any){
    if($event.target.innerHTML == "Project A"){      
      this.ProjectCost=25889600;
      this.CurrentExpenditure=967700;
      this.AvailableFunds=548955;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost=99999;
      this.CurrentExpenditure=22222;
      this.AvailableFunds=33333;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost=888888;
      this.CurrentExpenditure=22222;
      this.AvailableFunds=33333;
    }
    else{
      this.ProjectCost=22222;
      this.CurrentExpenditure=22222;
      this.AvailableFunds=33333;
    }
  }

}
