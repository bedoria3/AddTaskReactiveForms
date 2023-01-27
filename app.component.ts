import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task List';
  label = '"Do your Tasks, Do your Duties"'
  isAddTask = false;
  taskList: Task[] = [
    {
      Name: "Dishwashing",
      Description: "Wash the kitchen utensils and others",
      assign_to: "Marco Joson"
    },
    {
      Name: "Laundry Area",
      Description: "Wash the rags and sweep the canal",
      assign_to: "Rey John Refolidon",
    },
    {
      Name: "Bed Room",
      Description: "Fix the bed and sweep the floor",
      assign_to: "Ryan Bedoria",
    },
    {
      Name: "Comfort Room",
      Description: "Sweep and put muriatic acid",
      assign_to: "Rowena Pial",
    }
  ]

  addTask(task: Task){
    this.taskList.push(task);
    this.isAddTask = false;
  }

  addNewTask(){
    this.isAddTask = true;
  }
}
