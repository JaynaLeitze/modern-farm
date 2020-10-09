export const fieldPlants = []


export const addPlant = (seedObj) => {
    return fieldPlants.push(seedObj)
}

export const usePlants = () => {
   return fieldPlants.slice()
}