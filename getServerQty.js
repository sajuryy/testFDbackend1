module.exports = (T, t, x, n) => {
    const errProb = x / 100; // probability to get error while converting in one format
    if (errProb >= 1) {
       throw Error('the probability can not be more than 99 in this case');
    }

    const formatsQty = n; // quantity of formats
    const formatsQtyOneServer = Math.floor(T / t); // quantity of formats which can be converted on one server
    const maxErrProb = 0.01 // maximum permissable probability to get error for each format after time, allotted for conversion

    let i = 1;
    while (errProb ** i >= maxErrProb) {
        i += 1;
    };
    const serversQty = Math.ceil(formatsQty * i / formatsQtyOneServer);
    return serversQty;
};
