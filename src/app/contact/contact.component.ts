import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class  ContactComponent {

  contactlist  = [
    {id: 1, name: 'Liza Jean', email: 'lizajean@gmail.com'  ,number: '09968948932'},
    {id: 2, name: 'Lj', email: 'lizajean.llorag@evsu.edu.ph'  ,number: '09123456789'},
   
  ]
  constructor(public alertController: AlertController,public router: Router) {
  }
  redirectTo() {
    this.router.navigateByUrl('/mailpage');
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
              this.contactlist.splice(index, 1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }
  async addUser() {
    let prompt = await this.alertController.create({
      header: 'Add Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'name',
        },{
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'number',
          placeholder: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
            
          this.contactlist.push({
            id: data.id,
            name: data.name,
            email: data.email,
            number: data.number
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }


}