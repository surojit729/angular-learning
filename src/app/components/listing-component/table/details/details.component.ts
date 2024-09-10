import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  productId: string | null = "";


  constructor(
    private tableDetailsService: TableService,
    private activeRouter: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.productId = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.productId)

  }

}
