import { Component, OnInit, DoCheck } from '@angular/core';
import { SelectItem } from "primeng/components/common/selectitem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  param: SelectItem[];
  chooseParam: string;
  equals: SelectItem[];
  chooseEqual: string;
  values = '';

  constructor() {
    this.param = [];
    this.param.push({label:'Choose parameter', value:null});
    this.param.push({label:'param_one', value:{id:1, name:'param_one'}});
    this.param.push({label:'param_two', value:{id:2, name:'param_two'}});
    this.param.push({label:'param_tree', value:{id:3, name:'param_tree'}});
    this.param.push({label:'param_four', value:{id:4, name:'param_four'}});

    this.equals = [];
    this.equals.push({label:'Choose equals', value:null});
    this.equals.push({label:'equal', value:{id:1, name:'equal'}});
    this.equals.push({label:'not_equal', value:{id:2, name:'not_equal'}});
  }

  /* from json file */
  public data = {
    "or": {
      "param_one": [
        {
          "not_equal": "test"
        }
      ],
      "and": {
        "param_two": [
          {
            "equal": "other param"
          }
        ],
        "or": {
          "param_tree": [
            {
              "equal": "some string"
            }
          ],
          "param_four": [
            {
              "equal": "some other string"
            }
          ]
        }
      }
    }
  };

  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
    console.log('data', this.data);
  }
  ngDoCheck() {
    console.log('param: ', this.chooseParam, 'equals: ', this.chooseEqual, 'input: ', this.values);
  }

}
