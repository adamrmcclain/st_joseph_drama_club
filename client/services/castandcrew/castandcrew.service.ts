import {CastAndCrew} from '/interfaces/castandcrew.ts';
import {CASTMEMBERS} from './mock-cast.ts';
import {Injectable} from 'angular2/core';
@Injectable()
export class CastService {
getCastMembers() {
    return Promise.resolve(CASTMEMBERS);
  }

getMember(id: number) {
  return Promise.resolve(CASTMEMBERS).then(
  members => members.filter(member => member.id === id)[0]
);
}
  // See the "Take it slow" appendix
  getMembersSlowly() {
    return new Promise<CastAndCrew[]>(resolve =>
      setTimeout(()=>resolve(CASTMEMBERS), 2000) // 2 seconds
    );
  }
}
