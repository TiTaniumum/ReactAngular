import { Component } from '@angular/core';
import { ResumeService } from './resume.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  jobs: string[] = []
  constructor(private resume: ResumeService){
    this.getJobExperience();
  }

  getSkills(){
    return this.resume.getSkills();
  }

  getJobExperience(){
    this.jobs = this.resume.getJobExperience()
    console.log(this.jobs);
  }
  getAdditional(){
    return this.resume.getAdditional();
  }
}
