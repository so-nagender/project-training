import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-mid-part',
  templateUrl: './mid-part.component.html',
  styleUrls: ['./mid-part.component.css']
})
export class MidPartComponent implements OnInit {
  constructor() {}
  @Input() appSplit
  ngOnInit() {}
}
