import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/components/common/selectitem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  cities: SelectItem[];
  selectedCity: string;

  constructor() {
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
  }

  checked: boolean;
  val: boolean;

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

  ngOnInit() {
    console.log('data', this.data);
  }
}
