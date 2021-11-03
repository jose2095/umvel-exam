import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 @Input() post!:Post;
 @Output() delete:EventEmitter<Post> = new EventEmitter<Post>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit(this.post);
  }

}
