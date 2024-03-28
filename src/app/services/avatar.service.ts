import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private avatarDataSubject = new BehaviorSubject<any>({});
  avatarData$ = this.avatarDataSubject.asObservable();

  constructor() { }

  setAvatarData(data: any) {
    this.avatarDataSubject.next(data);
  }
}