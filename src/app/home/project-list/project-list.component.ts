import { Component, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'project-list',
  template: `
    <div class="d-flex justify-content-end p-2"
         style="background-color: tomato; color: white;
          margin-bottom: .5em;">
      <div class="mr-auto p-2">
        <h4>{{title}}</h4>
      </div>
      <div>
        <counter [label]="'Projects'" [count]="projects?.length"></counter>
      </div>
    </div>
    <ul class="list-group" [ngClass]="{empty: !projects?.length}"
        [dragula]="'projects'" [dragulaModel]="projects">
      <li class="list-group-item" *ngFor="let project of projects">{{project.name}}</li>
    </ul>
  `,
  styles: [ `
    .empty {
      padding: 2rem 0;
      border-radius: .5em;
      background-color: #fafafa;
    }

    .list-group-item {
      cursor: move;
    }
  ` ]
})
export class ProjectListComponent {
  @Input() public title: string;
  @Input() public projects: Project[];

  // constructor(private dragulaService: DragulaService) {
  //   this.dragulaService.dropModel.subscribe((value) => {
  //     console.log(`drag: ${value[ 0 ]}`);
  //     console.log('mode: ', this.projects);
  //   });
  // }
}

export class Project {
  public name: string;
}
