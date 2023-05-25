import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-on-push-input',
  templateUrl: './on-push-input.component.html',
  styleUrls: ['./on-push-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushInputComponent implements DoCheck {
  @Input() updatedValue: any;
  constructor() {}

  ngDoCheck() {
    console.log('DoCheck Called in on push');
  }

  @HostListener('click')
  onClickWithin() {
    console.log('Clicked Within on push input component');
  }
}
