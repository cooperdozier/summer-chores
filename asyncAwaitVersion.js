let tiredness = 0;

const mowYard = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mowYard2 = true;
            if (mowYard2) {
                resolve(`${name} mowed the yard.`);
            } else {
                reject(`${name} fell asleep before mowing the yard.`);
            }
        }, 2000)
    })
}

const weeEat = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let weedEat2 = true;
            tiredness = tiredness + Math.random()*25;
            if (tiredness > 50) {
                weedEat2 = false;
            }
            if (weedEat2) {
                resolve(`${name} finished using the weed eater.`);
            } else {
                reject(`${name} fell asleep before weed eating.`)
            }
        }, 1500)
    })
}

const trimHedges = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let trimHedges2 = true;
            tiredness = tiredness + Math.random()*25;
            if (tiredness > 50) {
                trimHedges2 = false;
            }
            if (trimHedges2) {
                resolve(`${name} finished trimming hedges.`);
            } else {
                reject(`${name} fell asleep before trimming hedges.`)
            }
        }, 1000)
    })
}

const collectWood = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let collectWood2 = true;
            tiredness = tiredness + Math.random()*25;
            if (tiredness > 50) {
                collectWood2 = false;
            }
            if (collectWood2) {
                resolve(`${name} finished collecting wood.`);
            } else {
                reject(`${name} fell asleep before collecting wood.`)
            }
        }, 2500)
    })
}

const waterGarden = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let waterGarden2 = true;
            tiredness = tiredness + Math.random()*25;
            if (tiredness > 50) {
                waterGarden2 = false;
            }
            if (waterGarden2) {
                resolve(`${name} finished watering the garden.`);
            } else {
                reject(`${name} fell asleep before watering the garden.`)
            }
        }, 500)
    })
}

const doSummerChores = async (name) => {
    try {
    const taskOne = await mowYard(name);
    console.log(taskOne);
    const taskTwo = await weeEat(name);
    console.log(taskTwo);
    const taskThree = await trimHedges(name);
    console.log(taskThree);
    const taskFour = await collectWood(name);
    console.log(taskFour);
    const taskFive = await waterGarden(name);
    console.log(taskFive);
    console.log(`${name} finished all their chores!`);
    }
    catch (error) {
        console.log(error)
    }
}

doSummerChores('cooper')