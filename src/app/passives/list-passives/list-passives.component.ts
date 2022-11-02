import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Passive } from 'src/model';

@Component({
  selector: 'app-list-passives',
  templateUrl: './list-passives.component.html',
  styleUrls: ['./list-passives.component.scss']
})
export class ListPassivesComponent implements OnInit {

  request_url = 'http://34.171.115.28/api/passives'

  passives$: Observable<Passive[]> = of([]);

  constructor(
    protected http: HttpClient,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.passives$ = this.http.get(this.request_url).pipe(
      map((data: any) => data.type? data.message: of([])));
  }

  navigate() {
    this.router.navigateByUrl('passives/create');
  }

}
