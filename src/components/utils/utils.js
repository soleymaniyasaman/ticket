import momentJalaali from "moment-jalaali";


export function Arraify(data) {
    if (!data) return []

    if (Array.isArray(data)) {
        return data
    } else {
        return [data]
    }
}

export function formatNumber(value) {
    let f = value.match(/\d+/);
    if (f) return f[0];
    return '';
}

export function timeToStr(time, format) {
    if (time) {
        return momentJalaali(time).locale('fa').format(format)
    }
    return ""
}
