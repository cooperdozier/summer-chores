let task = '';
let tiredness = 0;
let asleep = false;

function checkIfAsleep() {
    tiredness = tiredness + Math.random()*15;
    if (tiredness > 50) {
        asleep = true;
    } else {
        return;
    }
}

function mowYard(name, callback) {
  setTimeout(() => {
    console.log("First step with param: " + name);
    if (callback) callback(); // Run the next step
  }, 2000);
}

// function mowYard(callback, name) {
//     task = 'mow yard';
//     setTimeout(() => {
//         console.log(`${name} mowed the yard.`);
//         callback;
//     }, 2000);
//     }

function weedEat(callback, name) {
    task = 'weed eat';
    // checkIfAsleep();
    if (asleep = true) {
        console.log(`${name} fell asleep after mowing the yard.`);
            return;
    } else {
    setTimeout(() => {
        console.log(`${name} finished using the weed eater.`);
            callback; }, 
            1500);
}
}

function trimHedges(callback, name) {
    task = 'trim hedges';
        if (asleep = true) {
        console.log(`${name} fell asleep after weed eating.`);
            return;
    } else {
    callback;
    setTimeout(console.log(`${name} finished trimming the hedges.`), 1000);
    checkIfAsleep();
    }
}

function collectWood(callback, name) {
    task = 'collect wood';
        if (asleep = true) {
        console.log(`${name} fell asleep after trimming the hedges`);
            return;
    } else {
    callback;
    setTimeout(console.log(`${name} finished collecting wood.`), 2500);
    checkIfAsleep();
    }
}

function waterGarden(callback, name) {
    task = 'water garden'
        if (asleep = true) {
        console.log(`${name} fell asleep after collecting wood.`);
            return;
    } else {
    callback;
    setTimeout(console.log(`${name} finished watering the garden.`), 500);
    checkIfAsleep();
    }
}

function doSummerChores(name) {
    mowYard('cooper',
        weedEat(
            trimHedges(
                collectWood(
                    waterGarden, 'cooper'
                ), 'cooper'
            ), 'cooper'));
    console.log(`${name} finished all their chores.`)
}
// function doSummerChores(name) {
//     waterGarden(
//         collectWood(
//             trimHedges(
//                 weedEat(
//                     mowYard(

//                     )
//                 )
//             )
//         )
//     )
// }


// function doSummerChores(name) {
//     mowYard(weedEat(trimHedges, 'cooper'), 'cooper')
// }

// doSummerChores('cooper');

// function doSummerChores(name) {
//     mowYard(name);
// }

// function mowYard(callback, name) {
//     console.log(`${name} mowed the yard.`)
//     callback;
// }

doSummerChores('cooper');