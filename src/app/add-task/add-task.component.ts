import { Component, OnInit, EventEmitter } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = ''
  time: string = ''
  reminder: boolean = false
  tasks: any[] = [];

  constructor(private post: TaskService) { }

  ngOnInit(): void {
    console.log(this.text)
  }
  onSubmit() {
    if (!this.text) {
      alert('PLease Add text');
      return;

    }
    console.log(this.text)
    const newTask = {
      text: this.text,
      time: this.time,
      reminder: this.reminder

    }
    console.log(newTask)


    this.text = '';
    this.time = '';
    this.reminder = false;
    this.post.addTask(newTask).subscribe((newTask) =>
      (this.tasks.push(newTask)))




  }



}
