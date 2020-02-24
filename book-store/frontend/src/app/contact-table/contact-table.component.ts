import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContactTableDataSource, ContactTableItem } from './contact-table-datasource';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ContactTableItem>;
  @ViewChild(MatInput, {static: false}) filter: MatTable<ContactTableItem>;
  dataSource: ContactTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  
  

  ngOnInit() {
    this.dataSource = new ContactTableDataSource();
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  
}
