import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getAdditional() {
    return `Мой ГитХаб - https://github.com/TiTaniumum <br>
    Рекомендательное письмо - https://drive.google.com/file/d/1hzwbRcbeNaGcfRGDuYLhHyx8-WfDob33/view?usp=drive_link <br>
    Мой Первый сайт - https://titaniumum.github.io/ <br>
    2Д игра на С++ - https://github.com/mlktkd/Runamicon  <br>`
  }

  constructor() { }

  getSkills(){
    return 'C++, C#, HTML, CSS, JavaScript,.NET, Winforms, WPF.'
  }
  getJobExperience(){
    return [
      "01.03.2021 — 12.10.2021 <br> Оператор принтеров • «Keruen Plus» <br> Обеспечивал оборудование бесперебойной работой.  <br>",
      "DAMUMED 1 год"
    ]
  }
}
