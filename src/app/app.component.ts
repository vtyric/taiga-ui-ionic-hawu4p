import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

  get theme(): 'onDark' | null {
    return this.windowRef.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'onDark'
      : null;
  }
}
