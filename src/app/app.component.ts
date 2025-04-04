import { Component } from '@angular/core';
import { GradientGeneratorComponent } from './gradient-generator/gradient-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [GradientGeneratorComponent]
})
export class AppComponent {
  title = 'Gradient Generator App';
}
