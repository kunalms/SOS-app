import {Component, OnInit} from '@angular/core';
import {HistoryService} from "../services/history.service";
import {History} from "../models/history";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  histories: History[];
  ngOnInit() {
    this.historyService.getAllHistory().subscribe((histories)=>{
      this.histories = histories;
    })
  }

}
