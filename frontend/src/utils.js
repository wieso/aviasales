
export const roundNumber = (value = 0) => Math.round(value * 100) / 100;

export const formatNumber = (n) => `${n}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');