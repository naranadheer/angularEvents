import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from '../../user/auth.Service';
import { voterService } from '../shared/voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './sessionList-component.html'
})

export class sessionlistComponent  implements OnChanges {

@Input() sessions: ISession[];
@Input() filterBy: string;
@Input() sortBy: string;

visibleSession: ISession[] = [];

constructor(private auth: AuthService, private voterService: voterService) {

}


ngOnChanges(): void {
  if (this.sessions) {
    this.filterSession(this.filterBy);
    this.sortBy === 'name' ? this.visibleSession.sort(sortbyName) : this.visibleSession.sort(sortbyVotes);
  }

}

toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
     this.voterService.deleteVoter(session, this.auth.currentUser);
    } else {
        this.voterService.addVoter(session, this.auth.currentUser);

    }


}
userHasVoted(session) {
   return this.voterService.userHasVoted(session, this.auth.currentUser);
}

filterSession(filter: string): any {
  if (filter == 'All') {
      this.visibleSession = this.sessions;
  } else {
      console.log(filter);
     this.visibleSession = this.sessions.filter(session => { return session.level.toLocaleLowerCase() === filter.toLocaleLowerCase();
    });
  }


}

}

function  sortbyName(s1: ISession, s2: ISession) {



    if (s1.name > s2.name) {
    return 1;
    } else if (s1.name === s2.name) { return 0; } else {
    return -1;
         }
}
function  sortbyVotes(s1: ISession, s2: ISession) {

    console.log(s1.voters.length);
    return s2.voters.length - s1.voters.length;
}
