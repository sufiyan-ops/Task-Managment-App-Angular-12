import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  count: any = 1
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task)=>{
      this.tasks = task
    });
  }
  onDelete(tasks: Task){
   this.taskService.deletetask(tasks).subscribe(()=>{
     this.tasks = this.tasks.filter(t=> t.id !== tasks.id)
   })
  }
  onToggle(task: Task){
    task.reminder = !task.reminder;
    console.log(task.reminder)
  }

}
