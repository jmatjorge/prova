import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PeopleDetails } from '../$models/people-details';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  peopleDetail: PeopleDetails;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getPeopleDetail();
  }

  getPeopleDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.getPeopleById(id).
    subscribe(pep => {
      this.peopleService.getHomeWorld(pep.homeworld).subscribe(homeworld => {
        pep.homeworld = homeworld.name;
        this.peopleDetail = pep;
      });
    });
  }

  goBack() {
    this.location.back();
  }

}
