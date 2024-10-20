export function round(x: number) {
    x = x * 100;
    return Math.floor(x) / 100
}