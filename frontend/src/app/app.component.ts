import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  skillsForm: FormGroup;
  skillsOnFilter = [];
  employees = [];
  noEmployeesFound = false;

  constructor(private htmlClient: HttpClient) {}

  ngOnInit(): void {
    this.skillsForm = new FormGroup({
      'skill': new FormControl(null, [Validators.required] )
    });
  }

  onAddSkill() {
    let skill = this.skillsForm.value.skill


    let exists = this.skillsOnFilter.some(skillExists(skill));

    if (skill && !exists) {
      this.skillsOnFilter.push(skill);
      this.skillsForm.reset();
    }
  }

  removeSkill(skill) {
    let indexOf = this.skillsOnFilter.indexOf(skill);
    this.skillsOnFilter.splice(indexOf, 1);
  }

  onFilter() {
    let requestBody = { skills: this.skillsOnFilter };

    this.htmlClient.post('http://localhost:8080/api/employee/findEmployeesBySkill', requestBody)
      .subscribe(value => {
        console.info(value);
        this.employees = value;
        console.info(this.employees);
        this.noEmployeesFound = this.employees.length <= 0;
      }, error2 => {
        console.error(error2);
        this.employees = [];
        this.noEmployeesFound = true;
      });
  }
}

function skillExists(skill) {
  return function skillAlreadyExist(element, index, array) {
    return (element === skill);
  }
}
