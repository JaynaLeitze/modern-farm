import {createPlan} from "./plan.js"

createPlan()

const yearlyPlan = createPlan()
console.log(yearlyPlan)

 import {createCorn} from "./seeds/corn.js"
 
import {createAsparagus} from "./seeds/asparagus.js"

import {createPotato} from "./seeds/potato.js"

import {createSoybean} from "./seeds/soybean.js"

import {createWheat} from "./seeds/wheat.js"

import {createSunflower} from "./seeds/sunflower.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
 
import {addPlant} from "./field.js"

import {fieldPlants} from "./field.js"

const sunflower = addPlant("sunflower")

import {usePlants} from "./field.js"

usePlants()
console.log(fieldPlants)








