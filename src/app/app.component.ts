import { NavigatorInterface, FooterInterface } from './core/models/Core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yacht Broker - Json Server';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "yates",
      link: "/boats"
    },
    {
      name: "veleros",
      link: "/sailboats"
    },
    {
      name: "Broker-Yacht",
      link: "/about"
    }
  ];
  public footer: FooterInterface = {
    // creator: "Samuel García",
    // from: "Upgrade Hub student",
    image: "https://i.ibb.co/cQb4MFM/link.png",
    image2: "https://i.ibb.co/CHNqQ7D/git.png",

  }
}
