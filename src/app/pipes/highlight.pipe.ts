import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, keywords: string, limit: number = 100): string {
    if (!value) return '';

    let truncatedValue = value;
    if (value.length > limit) {
      truncatedValue = value.slice(0, limit) + '...';
    }

    if (!keywords) {
      return truncatedValue;
    }

    const pattern = keywords
      .split(' ')
      .filter((kw) => kw.length > 0)
      .join('|');
    const regex = new RegExp(pattern, 'gi');

    return truncatedValue.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
  }
}
