"use strict";

const timeToMowYard = 2000;
const timeToWeedEat =1500;
const timeToTrimHedges = 1000;
const timeToCollectWood = 2500;
const timeToWaterGarden = 500;

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard`)
        callback(name)
    }, timeToMowYard
)
}

function weedEat(name,callback) {
    setTimeout(() => {
        /*
        IF/ELSE
        if - if we fall asleep program ends (log it)
        else - log the success function and call the next function
        
        How do we determine how they fall asleep
        Math.random().
        */
       if (Math.random() > 0.15) {
        // Success
        console.log(`${name} finished using the weed eater`)
        callback(name)
       } else {
        // Fail
        console.log(`${name} fell asleep after mowing the yard`)
       }
       
    },timeToWeedEat)
}

function trimHedges(name,callback) {
    setTimeout(() => {
       if (Math.random() > 0.20) {
        // Success
        console.log(`${name} finished trimming the hedges`)
        callback(name)
       } else {
        // Fail
        console.log(`${name} fell asleep after weed eating`)
       }
       
    },timeToTrimHedges)
}

function collectWood(name,callback) {
    setTimeout(() => {
       if (Math.random() > 0.25) {
        // Success
        console.log(`${name} finished collecting wood`)
        callback(name)
       } else {
        // Fail
        console.log(`${name} fell asleep after trimming hedges`)
       }
       
    },timeToCollectWood)
}


function waterGarden(name, callback) {
    setTimeout(() => {
       if (Math.random() > 0.30) {
        // Success
        console.log(`${name} finished watering the garden`)
       } else {
        // Fail
        console.log(`${name} fell asleep after collecting wood`)
       }
       
    },timeToWaterGarden)
}

function doSummerChores (name) {
    //implement the logic
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
        console.log(`${name} finished all their chores.`)
                        })
                    })
                })
            })
        })
    }

doSummerChores('cooper');
