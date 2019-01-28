import { Injectable } from '@angular/core';
import { ISession } from './event.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class voterService {

    constructor(private http: HttpClient) {

    }

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName );
    }
    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }
    userHasVoted(session: ISession, voterName: string) {
          return  session.voters.some(voter => voter === voterName);
    }
}
