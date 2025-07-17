export function  middleware(req, res, next) {
    console.log('passei no middleware');
    next();
}