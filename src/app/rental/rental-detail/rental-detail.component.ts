import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  

  rental: Rental;

  // dependency injection
  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rentalService
      .getRentalById(params['rentalId'])
        .subscribe(rental => {
          this.rental = rental;
    })
  })
  }

}
