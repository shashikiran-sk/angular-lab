import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-mark-for-check',
  templateUrl: './mark-for-check.component.html',
  styleUrls: ['./mark-for-check.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkForCheckComponent implements OnInit {
  updateAfterAWhile = 'Initial Value';
  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.updateAfterAWhile = 'Updated Value';
      this.changeDetector.markForCheck();
    }, 5000);
  }
}
