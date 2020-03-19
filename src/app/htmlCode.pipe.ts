import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlCode',
})
export class HtmlCodePipe implements PipeTransform {
  transform(value: any): string {
    const nValue = JSON.stringify(value)
      .replace(/,/g, ',<br>')
      .replace(/{/g, '{<br>')
      .replace(/}/g, '<br>}');
    return nValue;
  }
}
