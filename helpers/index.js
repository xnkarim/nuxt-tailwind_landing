export function formatMinutes(min) {
    if (min < 60) return `За ${min} мин.`;
    else {
        const h = Math.floor(min / 60);
        const m = min - h * 60;
        return `${h}ч ${m} мин.`;
    }
}