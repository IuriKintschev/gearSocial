//@flow

export function dateToScreen(date: string) {
    let arrDate = date.slice(0, -2);
    arrDate = arrDate.split(' ');

    const data: string = arrDate[0];
    let hours = arrDate[1];

    hours = hours.replace(':', 'h ');
    hours = hours.replace(':', 'm');

    return [...data, ' ', ...hours];
}
