"use strict"
let tiredness = 0;

const mowYard = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mowYard2 = true;
            if (mowYard2) {
                resolve(`${name} mowed the yard.`);
            } else {
                reject(console.log(`${name} fell asleep before mowing the yard.`));
            }
        }, 2000)
    })
}

const weedEat = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let weedEat2 = true;
            tiredness = tiredness + Math.random()*35;
            if (tiredness > 50) {
                weedEat2 = false;
            }
            if (weedEat2) {
                resolve(`${name} finished using the weed eater.`);
            } else {
                reject(console.log(`{name} fell asleep before weed eating.`));
            }
        }, 1500)
    })
}

const trimHedges = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let trimHedges2 = true;
            tiredness = tiredness + Math.random()*30;
            if (tiredness > 50) {
                trimHedges2 = false;
            }
            if (trimHedges2) {
                resolve(`${name} finished trimming hedges.`);
            } else {
                reject(console.log(`${name} fell asleep before trimming hedges.`))
            }
        }, 1000)
    })
}

const collectWood = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let collectWood2 = true;
            tiredness = tiredness + Math.random()*30;
            if (tiredness > 50) {
                collectWood2 = false;
            }
            if (collectWood2) {
                resolve(`${name} finished collecting wood.`);
            } else {
                reject(console.log(`${name} fell asleep before collecting wood.`));
            }
        }, 2500)
    })
}

const waterGarden = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let waterGarden2 = false;
            tiredness = tiredness + Math.random()*30;
            if (tiredness > 50) {
                waterGarden2 = false;
            }
            if (waterGarden2) {
                resolve(`${name} finished watering the garden.`);
            } else {
                console.log(reject(`${name} fell asleep before watering the garden.`));
            }
        }, 500)
    })
}
const doSummerChores = async (name) => {
    try {
mowYard(name).then((value) => {console.log(value); return weedEat(name)})
        .then((value) => {console.log(value); return trimHedges(name)})
        .then((value) => {console.log(value); return collectWood(name)})
        .then((value) => {console.log(value); return waterGarden(name)})
        .then((value) => {console.log(value); console.log(`${name} finished summer chores.`)})
}
    catch (error) {
        console.log(error)
    }
}
doSummerChores('cooper')