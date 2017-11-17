import { ParkingService } from '../../services/parking.service';
import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  name: String;
  size: Number;
  entracenumber: Number;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private parkingService: ParkingService
  ) { }


  ngOnInit() {
  }

  onRegisterSubmit() {
    const parking = {
      name: this.name,
      size: this.size,
      entracenumber: this.entracenumber
    };
    // Register user
    this.parkingService.saveParking(parking).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Cadatrado', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('algo deu errado', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }
}
