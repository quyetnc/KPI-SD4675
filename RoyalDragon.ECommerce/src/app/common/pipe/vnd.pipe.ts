import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'vnd' })
export class VndPipe implements PipeTransform {
    transform(value: number): string {
        var vnd = value?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return vnd;
    }
}