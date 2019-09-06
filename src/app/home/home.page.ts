import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private answers = [
		'GREAT RAFT DDH COMMOTION',
		'BELL\'S SMITTEN GOLDEN RYE',
		'CRYING EAGLE THINGS UNSETTLED',
    'FLYING TIGER JUCEE',
		'LAGUNITAS SUPER CLUSTER',
		'NATCHEZ BEBELO',
   	'PARISH PURE TROPICS',
		'SAMUEL ADAMS OCTOBERFEST',
		'TERRAPIN LUAU KRUNKLES',
   	'ABITA AMBER',
		'ABITA ANDYGATOR',
		'ABITA HONEYSUCKLE SAISON',
   	'ABITA PURPLE HAZE',
		'ABITA STRAWBERRY HARVEST',
   	'Concentrate and ask again.',
		'ABITA THE BOOT',
		'ANCHOR STEAM',
   	'ANCHOR STEAM',
		'ARROGANT BASTARD ALE',
		'BELL\'S TWO HEARTED ALE']
	constructor(private toastCtrl: ToastController) {}

	giveAnswer() {
		let answer = this.answers[Math.floor(Math.random()*this.answers.length)];
		this.presentToast(answer);
	}

	async presentToast(answer) {
		const toast = await this.toastCtrl.create({
			message: answer,
			duration: 5000,
			position: 'top'
		});
		toast.present();
	}



}
