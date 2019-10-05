import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@shared/containers';

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public readonly appName: string = 'city.ai';

  public ngOnInit(): void { }
}
