import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { People } from '../$models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  people: People[] = [];
  visiblePeople: People[] = [];



  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.getPeople();
  }

  search(term: string): void {
    this.visiblePeople = this.people.filter((people: People) => {
        return people.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });
  }

  viewDetails(url: string): void {
    // Marosca para ter um id que não encontro
    const id = url.replace('https://swapi.co/api/people/', '').slice(0, -1);
    this.router.navigate([`/detail/`, id]);
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(pers => {
      this.people = pers;
      this.visiblePeople = pers;
      } );
}



}
