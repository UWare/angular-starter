import { Component, OnInit } from '@angular/core';
import { Project } from './project-list/project-list.component';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public projectName: string;

  public todo: Project[];
  public inProgress: Project[];
  public done: Project[];

  public total: number = 0;

  constructor(private dragulaService: DragulaService) {
    this.dragulaService.dropModel.subscribe((value) => {
      console.log('projects', this.todo, this.inProgress, this.done);
      this.calculateTotal();
    });
  }

  public ngOnInit() {
    this.todo = [];
    this.inProgress = [];
    this.done = [];
  }

  public addTodo() {
    if (typeof this.projectName === 'string') {
      let name = this.projectName.trim();
      if (name) {
        this.todo.push({ name });
        this.calculateTotal();
      }
    }
    delete this.projectName;
  }

  private calculateTotal() {
    this.total = this.todo.length + this.inProgress.length + this.done.length;
  }

}
