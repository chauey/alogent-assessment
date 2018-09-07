import { Component, OnInit } from '@angular/core';
// import { Board } from '../models/board';
// import { PostIt } from '../models/post-it';
import { HttpClient } from '@angular/common/http';
import { BoardService } from '../core/entity-collection-services';
import { Observable } from 'rxjs';
import { Board } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  boards: Board[];
  boards$: Observable<Board[]>;

  constructor(private http: HttpClient, private boardService: BoardService) {
    this.boards$ = this.boardService.selectors$.filteredEntities$;
  }

  ngOnInit() {
    // this.http.get<Board[]>('/api/boards').subscribe(data => {
    //   this.boards = data;
    // });
    this.boardService.getAll();
  }

  add() {
    console.log('add post it');
  }
}
