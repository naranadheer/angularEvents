import {  voterService } from './voter.service';
import { ISession } from './event.model';
import { Observable } from 'rxjs';

describe('voterService', () => {
let ObjvoterService: voterService,
mockHttp;

beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['deleteVoter']);

    ObjvoterService = new voterService(mockHttp);

});

describe('deleteVoter', () => {

    it('should delete', () => {
   const session = {id: 6, voters: ['rana', 'rana2']};
       ObjvoterService.deleteVoter(<ISession>session, 'rana');
       expect(session.voters.length).toBe(1);
       expect(session.voters[0]).toBe('rana2');
    });
});
});
