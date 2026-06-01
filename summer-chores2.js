const mowYard = (name, callback) => {
    console.log(`${name} mowed the yard.`);
    callback(name);
}
const weedEat = (callback, name) => {
    console.log(`${name} finished using the weed eater.`);
    callback(name);
}
const trimHedges = (name) => console.log(`${name} finished trimming the hedges.`);
const doSummerChores = (name) => mowYard(weedEat(trimHedges));

// doSummerChores('cooper');
mowYard('cooper', weedEat(trimHedges, 'cooper'))