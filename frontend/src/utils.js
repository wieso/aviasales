export const roundNumber = (value = 0) => Math.round(value * 100) / 100;
export const calculatePercent = (currValue, prevValue) => prevValue !== 0 ? roundNumber((currValue / prevValue - 1) * 100) : 0;
export const formatNumber = (n) => `${n}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');