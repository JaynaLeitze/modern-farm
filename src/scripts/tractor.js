import { fieldPlants } from "./field.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus} from "./seeds/asparagus.js"
import {addPlant} from "./field.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"

const plan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

export const plantSeeds = (seedPlan) => {
    for(const seeds of plan){
     for (const seedling of seeds)
     
         if (seedling ===  "Potato"){
        fieldPlants.push(createPotato)}

        else if (seedling === "Soybean"){
            fieldPlants.push(createSoybean)}

        else if (seedling === "Wheat"){
            fieldPlants.push(createWheat)}

        else if (seedling ==="Asparagus"){
            fieldPlants.push(createAsparagus)
        }
        else if (seedling === "Corn"){
            fieldPlants.push(createCorn)
        }
    }

}