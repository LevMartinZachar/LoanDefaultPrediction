import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
/**
 * curl \
 * -X POST \
 * -H "Authorization: Bearer $(gcloud auth print-access-token)" \
 * -H "Content-Type: application/json" \
 * https://europe-west6-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/europe-west6/endpoints/${ENDPOINT_ID}:predict \
 * -d "@${INPUT_DATA_FILE}"
 * */
const projectId = 'lending-loan-prediction';
const location = 'europe-west6';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loan-prediction-ui';
  empLength = [
    {value: 1, viewValue: '< 1 year'},
    {value: 2, viewValue: '2 years'},
    {value: 3, viewValue: '3 years'},
    {value: 4, viewValue: '4 years'},
    {value: 5, viewValue: '5 years'},
    {value: 6, viewValue: '6 years'},
    {value: 7, viewValue: '7 years'},
    {value: 8, viewValue: '8 years'},
    {value: 9, viewValue: '9 years'},
    {value: 10, viewValue: '10+ years'}
  ]
  homeOwnerships = [
    {value: 0, viewValue: 'mortgage'},
    {value: 1, viewValue: 'none'},
    {value: 2, viewValue: 'other'},
    {value: 3, viewValue: 'own'},
    {value: 4, viewValue: 'rent'}
  ]
  purposes = ['credit card', 'debt consolidation', 'educational', 'home improvement', 'house', 'major purchase', 'medical', 'moving', 'other', 'renewable energy', 'small business', 'vacation', 'wedding']
  term = ['36 months', '60 months']
  loanForm = this.fb.group({
    loanAmnt: [''],
    intRate: [''],
    annualInc: [''],
    dti: [''],
    pubRec: [''],
    lastPymntAmnt: [''],
    issueD: [''],
    empLength: [''],
    homeOwnerships: [''],
    purposes: [''],
    term: ['']
  });

  constructor(private readonly httpClient: HttpClient, private readonly fb: FormBuilder) {
  }

  sendReq(): void {
    const url = `https://europe-west6-aiplatform.googleapis.com/v1/projects/${projectId}/locations/europe-west6/endpoints/5472911486231773184:predict`
    const features = [[0.240506340,0.0,0.053201080,0.55555560,0.293103460,0.727272750,0.29404390,0.250,0.066632880,0.0,0.0,0.0,0.0,1.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]]
    const body = JSON.stringify({instances: features});
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization':'Bearer ya29.a0AWY7CkkIkZlcY4pvbzO0jojDq3X5RRgDe8XzjV--e43QmxH2tT4lH5zra56siN9RthLFsl00mpKl3R0lIT1Nsund0wBKj5bt1nreCF143RHMdhI5QYMpmwvwQxnobKUEjpRBFLKNXTAsN1ihhCiK1VQ0Hyv-Wu-ATAVPJIMaCgYKATgSARMSFQG1tDrpRn7TWTDwvts2y5n_Err5XA0174'});
    console.log(headers);
    this.httpClient.post(url, body, {headers: headers}).subscribe(
      (data) => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
    console.log('pop');
  }
}
