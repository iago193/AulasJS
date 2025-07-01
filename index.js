
function nome() {
    const nome = 'iago';
    return function() {
        return nome;
    }
}

const n = nome();

console.log(n());
