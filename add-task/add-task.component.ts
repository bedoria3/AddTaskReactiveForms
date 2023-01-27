import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  ngOnInit(){
    this.taskForm.reset();
  }
  @Output() taskOut = new EventEmitter();

  taskForm = new FormGroup({
    Name: new FormControl(''),
    Description: new FormControl(''),
    assign_to: new FormControl('')
  })

  addTask(){
    // console.log(this.taskForm.value)
    this.taskOut.emit(this.taskForm.value)
    this.taskForm.reset();
  }

}
