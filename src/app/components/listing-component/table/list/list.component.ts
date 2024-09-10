import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList: any = []

  constructor(
    private tableService: TableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductList()


  }
  getProductList() {
    this.tableService.getData().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res.products;
        console.log(this.productList)
      }
    })

  }
  viewDetails(data: any) {
    console.log(data);
    this.router.navigate(['/table/details/' + data.id])
  }

}
