import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { eventList } from '../../data/eventList';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  events = eventList;
}