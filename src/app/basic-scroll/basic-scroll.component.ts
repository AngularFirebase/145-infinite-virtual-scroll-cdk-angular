import { Component, OnInit } from '@angular/core';
import { emojiRandom } from '../emojis';
import * as faker from 'faker';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent {
  people;

  constructor() {
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase(),
          emoji: emojiRandom()
        };
      });
  }
}
