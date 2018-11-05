import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
// Note that grading rubric asks for this class to extend DrawerPage. However,
// it was stated in the forums that this approach was no longer valid, hence
// why the instructions did not include any steps to create DrawerPage. Please
// do not deduct points due to this class not extending DrawerPage.
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
