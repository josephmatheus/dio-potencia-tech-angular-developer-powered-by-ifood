type heroi = {
  name: string;
  vulgo: string;
};

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}
// Isso printa um objeto
printaObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman"
})

console.log("Olá, Mundo!");
