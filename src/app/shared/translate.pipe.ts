import { Pipe, PipeTransform } from '@angular/core';

const dictionary = {
    Russia: "России",
    China: "Китае",
    USA: "США",
    Italy: "Италии"
}

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    transform(value: string) {
        if (Object.keys(dictionary).includes(value))
            return dictionary[value];
        else {
            return value;

        }
    }
}