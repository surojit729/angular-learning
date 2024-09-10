import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [CommonModule, TableRoutingModule, HttpClientModule],
})
export class TableModule {}
