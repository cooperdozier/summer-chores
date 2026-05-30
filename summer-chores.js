let task = '';
let tiredness = 0;
let asleep = false;

function checkIfAsleep() {
    tiredness += Math.random()*15;
    if (tiredness > 50) {
        asleep = true;
    } else {
        return;
    }
}

function mowYard(callback, name) {
    task = 'mow yard';
    setTimeout(console.log(`${name} mowed the yard.`), 2000);
    callback();
}

function weedEat(callback, name) {
    task = 'weed eat';
    setTimeout(console.log(`${name} finished using the weed eater.`), 1500);
    checkIfAsleep();
    callback();
}

function trimHedges(callback, name) {
    task = 'trim hedges';
    setTimeout(console.log(`${name} finished trimming the hedges.`), 1000);
    checkIfAsleep();
    callback();
}

function collectWood(callback, name) {
    task = 'collect wood';
    setTimeout(console.log(`${name} finished collecting wood.`), 2500);
    checkIfAsleep();
    callback();
}

function waterGarden(callback, name) {
    task = 'water garden'
    setTimeout(console.log(`${name} finished watering the garden.`), 500);
    checkIfAsleep();
    callback();
}

// function doSummerChores(name) {
//     mowYard(
//         weedEat(
//             trimHedges(
//                 collectWood(
//                     waterGarden, 'cooper'
//                 ), 'cooper'
//             ), 'cooper'), 'cooper');
//     console.log(`${name} finished all their chores.`)
// }

function doSummerChores(name) {
    mowYard(weedEat(trimHedges, 'cooper'), 'cooper')
}

doSummerChores('cooper');