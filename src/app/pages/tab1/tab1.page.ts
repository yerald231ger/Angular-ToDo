import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public todoService: TodoService,
    private router: Router,
    private alertCtrl: AlertController) {
  }

  async agregarList(){

    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      },{
        text: 'Crear',
        handler: (data) => {
          console.log(data);
          if(data.titulo.length === 0){
            return;
          }

          const listId = this.todoService.creatList(data.titulo);
          console.log(listId);
          this.router.navigateByUrl(`/tabs/tab1/add/${ listId }`);
        }
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }


}
