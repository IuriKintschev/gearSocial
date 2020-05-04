//@flow

import { FormatPost } from '../views/Profile';

export function dateToScreen(date: string) {
    let arrDate = date.slice(0, -2);
    arrDate = arrDate.split(' ');

    const data: string = arrDate[0];
    let hours = arrDate[1];

    hours = hours.replace(':', 'h ');
    hours = hours.replace(':', 'm');

    return [...data, ' ', ...hours];
}

export function sortArrByDate(dataA: FormatPost, dataB: FormatPost) {
    return dataA.date < dataB.date;
}

export function getDate() {
    const date = new Date();
    const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mes =
        date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
    const ano = date.getFullYear();
    const momento = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return `${dia}/${mes}/${ano} ${momento}`;
}
