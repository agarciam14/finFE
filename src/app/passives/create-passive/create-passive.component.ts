import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-passive',
  templateUrl: './create-passive.component.html',
  styleUrls: ['./create-passive.component.scss']
})
export class CreatePassiveComponent implements OnInit {

  request_url = 'http://34.171.115.28/api/passives'

  passiveForm: FormGroup = this.fb.group({
    user: ['', Validators.required],
    amount: ['', Validators.required],
    currency: ['', Validators.required],
    type: ['', Validators.required],
    status: ['', Validators.required],
    limit_date: ['', Validators.required],
  });

  constructor(
    protected fb: FormBuilder,
    protected http: HttpClient,
    protected router: Router,
  ) { }

  ngOnInit(): void {
  }

  send(){
    let passive = this.passiveForm.value;
    this.http.post(this.request_url, { passive }).subscribe((data) => {
      this.passiveForm = this.fb.group({
        user: ['', Validators.required],
        amount: ['', Validators.required],
        currency: ['', Validators.required],
        type: ['', Validators.required],
        status: ['', Validators.required],
        limit_date: ['', Validators.required],
      })
    }
    );
  }

  navigate() {
    this.router.navigateByUrl('passives');
  }

}
