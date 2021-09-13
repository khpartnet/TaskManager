import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeammembers():any[]{
    var TeamMemberSummary=[
      {Region:"West",TeamMemberCount:20,TemporaryUnavailableMember:16},
      {Region:"East",TeamMemberCount:16,TemporaryUnavailableMember:10},
      {Region:"North",TeamMemberCount:50,TemporaryUnavailableMember:14},
      {Region:"South",TeamMemberCount:100,TemporaryUnavailableMember:40}
    ];
    return TeamMemberSummary;
  }
}
