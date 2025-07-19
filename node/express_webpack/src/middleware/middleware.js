export function  middleware(req, res, next) {
    res.locals.umaVariavelLocal = 'um teste de variavel local';
    next();
}