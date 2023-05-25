import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-mark-for-check',
  templateUrl: './mark-for-check.component.html',
  styleUrls: ['./mark-for-check.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkForCheckComponent implements OnChanges, DoCheck {
  @Input('value') updateAfterAWhile!: string;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  @HostListener('click')
  onClickWithin() {
    console.log('Clicked Within Mark For Check component');
  }

  ngDoCheck() {
    console.log('DoCheck Called');
  }

  ngOnChanges() {
    setTimeout(() => {
      this.updateAfterAWhile = 'Updated Value';
      this.changeDetector.markForCheck();
    }, 5000);

    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(() => {
        this.updateAfterAWhile = 'Updated after API call';
        this.changeDetector.markForCheck();
      });
  }
}
