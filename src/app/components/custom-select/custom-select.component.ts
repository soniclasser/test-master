import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { StyleSelect } from '../../share/StyleSelect';
import { FormatsService } from '../../services/formats.service';
import { Format } from '../../share/Format';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  styleSelect: StyleSelect
  options: Array<Format>
  select: Format
  formGroup: FormGroup
  show: boolean = false;

  constructor(private windowService: WindowService, private formatsService: FormatsService, private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.windowService.getJSON().subscribe(style => {
      this.styleSelect = style.controls.find(element => element.type === 'select');
    });

    this.formatsService.getJSON().subscribe(options => {
      this.options = options.filter(option => option.type == 1);
      console.log(this.options);
    });


    this.formGroup = this.formBuilder.group({
      id: "",
      format: "",
      formatDisplay: "",
      type: ""
    });
  }
  onChange(value) {
    this.show = false
    this.select = this.options[value];
    this.formGroup.reset(this.select);
    //this.formGroup.setValue(this.select);
  }

  showResul(){
   this.select = this.formGroup.value;
   this.show = true;
  }

}
