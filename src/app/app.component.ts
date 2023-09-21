import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-portfolio';

  firebaseConfig:any = {
    apiKey: "AIzaSyAO-quiG-RMvt4w3RNnmXolG_d-sMUBTyQ",
    authDomain: "fir-be-bdffc.firebaseapp.com",
    projectId: "fir-be-bdffc",
    storageBucket: "fir-be-bdffc.appspot.com",
    messagingSenderId: "98725025062",
  };

  app = initializeApp(this.firebaseConfig);
  
}
