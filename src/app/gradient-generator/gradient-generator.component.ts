import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-generator',
  templateUrl: './gradient-generator.component.html',
  styleUrls: ['./gradient-generator.component.css'],
  standalone: true
})
export class GradientGeneratorComponent {
  gradientStyle: string = '';
  hexColor1: string = '';
  hexColor2: string = '';
  rgbColor1: string = '';
  rgbColor2: string = '';

  constructor() {
    this.generateGradient(); // Generate a gradient on load
  }

  generateGradient(): void {
    const color1 = this.getRandomColor();
    const color2 = this.getRandomColor();
    const angle = Math.floor(Math.random() * 360);

    this.gradientStyle = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    this.hexColor1 = color1;
    this.hexColor2 = color2;
    this.rgbColor1 = this.hexToRgb(color1);
    this.rgbColor2 = this.hexToRgb(color2);
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(`background: ${this.gradientStyle};`).then(() => {
      alert('Gradient CSS copied to clipboard!');
    });
  }
}
