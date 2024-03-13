function timeHeader(req, res, next) {
    req.laikas = `${new Date().getHours()}val  ${new Date().getMinutes()}min  ${new Date().getSeconds()}sec`;
    next();
}

export { timeHeader };