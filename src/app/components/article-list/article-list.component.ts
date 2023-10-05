import { Component } from '@angular/core';
import { KonstService } from 'src/app/services/konst.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  constructor(
    public konstService: KonstService
  ) {}
}

