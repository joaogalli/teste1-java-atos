import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  skills: {value: String, checked: boolean}[] = [];
  employees: Object[] = [];
  noEmployeesFound = false;
  noSkillsFound = false;

  constructor(private htmlClient: HttpClient) {}

  ngOnInit(): void {
    this.htmlClient.get('http://localhost:8080/api/employee/getSkills')
      .subscribe(value => {
        (value as Array<String>).forEach(value2 => {
          this.skills.push({ value: value2, checked: false});
        });
        this.noSkillsFound = this.skills.length <= 0;
      }, error => {
        this.skills = [];
        this.noSkillsFound = true;
      });
  }

  onFilter() {
    let selectedSkills = this.skills
      .filter(opt => opt.checked)
      .map(opt => opt.value);

    let requestBody = { skills: selectedSkills };

    this.htmlClient.post('http://localhost:8080/api/employee/findEmployeesBySkill', requestBody)
      .subscribe(value => {
        this.employees = value as Array<String>;
        this.noEmployeesFound = this.employees.length <= 0;
      }, error => {
        this.employees = [];
        this.noEmployeesFound = true;
      });
  }
}
