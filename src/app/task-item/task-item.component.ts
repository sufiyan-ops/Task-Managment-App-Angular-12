import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  tasks: Task[] = [];
  

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task)=>{
      this.tasks = task
    });
  }
  

}
