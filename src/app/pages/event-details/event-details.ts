import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eventList } from '../../data/eventList';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  eventId = '';
  eventType = '';
  eventMode = '';
  event: any;

  constructor(private route: ActivatedRoute) {
  this.eventId = this.route.snapshot.paramMap.get('id') ?? '';
  this.eventType = this.route.snapshot.queryParamMap.get('type') ?? '';
  this.eventMode = this.route.snapshot.queryParamMap.get('mode') ?? '';

  this.event = eventList.find(
    event => event.id === Number(this.eventId)
  );
}
}