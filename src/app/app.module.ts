import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule, ButtonModule, ConfirmDialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogModule } from "primeng/components/dialog/dialog";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import {InputSwitchModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DialogModule,
    InputSwitchModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
