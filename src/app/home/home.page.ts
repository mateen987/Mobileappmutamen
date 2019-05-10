
import { Component, } from '@angular/core';
import { AlertController, IonLabel, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {MyserviceService} from  '../myservice.service'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  results: Observable<any>;
   isdata:any;
   user_data:any
   name="mateen"
   apiUrl = "https://mutamen.herokuapp.com/getdata";
   constructor(public serv: MyserviceService, public alertcontroller :AlertController,public navCtrl:NavController) { 
   
   }
  ionViewDidEnter(){

  }
  getuserdata(){
    this.results = this.serv.getData();
    this.results.subscribe(user => {
      this.isdata=user;
     console.log(user);
    });
  }

  ngOnInit(){
   this.getuserdata();

  }

 async presentAlertPrompt() {
    const alert = await this.alertcontroller.create({
      header: 'Your Name!',
      inputs: [
        {
          name: 'UserName',
          type: 'text',
          placeholder: 'name'
        },
     
        {
          name: 'favCarName',
          type: 'text',
          label: 'your favourite car',
          id: 'name2-id',
          placeholder: 'your favourite car'
        },
        {
          name: 'CarModel',
          type: 'url',
          placeholder: 'Mini countryman'
        },
        
    
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok',data);
            this.isdata=JSON.stringify(data);
            console.log("value is ",data);
              this.serv.postdata(this.isdata).subscribe    
              (data => 
                {
             console.log('data is save',data);
             this.getuserdata();
                });
                
          }
        }
      ]
    });

    await alert.present();
  }
}
