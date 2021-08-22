import { Injectable } from '@angular/core';

import { Task } from '../Task';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]>{
   return this.http.get<Task[]>(this.apiUrl)
  }
  deletetask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url =  `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task)
  }
  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task , httpOptions)
  }
}
