const decode = input => [...input]
    .replace(/\./g, '0')
    .replace(/-/g, '1')
    .split('')
    .map((x, i, arr) => i < arr.length - 1 && x === x[i + 1] ? '' : x)
    .join('')
    .match(/.{1,8}/g)
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join('')
