import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  skillsForm: FormGroup;
  skillsOnFilter = [];

  ngOnInit(): void {
    this.skillsForm = new FormGroup({
      'skill': new FormControl(null, [Validators.required] )
    });
  }

  onAddSkill() {
    let skill = this.skillsForm.value.skill;

    let exists = this.skillsOnFilter.some(skillExists(skill));

    if (skill && !exists) {
      this.skillsOnFilter.push(skill);
    }
  }

  removeSkill(skill) {
    let indexOf = this.skillsOnFilter.indexOf(skill);
    this.skillsOnFilter.splice(indexOf, 1);
  }


}

function skillExists(skill) {
  return function skillAlreadyExist(element, index, array) {
    return (element === skill);
  }
}
