class Park {
    constructor(name, ticketPrice, dinosaurs) {
        this.name = name
        this.ticketPrice = ticketPrice
        this.dinosaurs = dinosaurs
    }

    addDinosaur(dinosaur) {
        this.dinosaurs.push(dinosaur)
    }

    removeDinosaur(dinosaur) {
        const dinoIndex = this.dinosaurs.indexOf(dinosaur)
        if (dinoIndex === -1) {
            return
        }
        this.dinosaurs.splice(dinoIndex, 1)
    }

    mostPopularDinosaur() {
        let mostPopular = this.dinosaurs[0]
        for (let dinosaur of this.dinosaurs) {
            if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
                mostPopular = dinosaur
            }
        }
        return mostPopular
    }

    findSpecies(species) {
        let speciesList = []
        for (let i = 0; i < this.dinosaurs.length; i++) {
            let dinosaur = this.dinosaurs[i]
            if (dinosaur.species == species) {
                speciesList.push(dinosaur)
            }
        }
        return speciesList
    }

    calculateTotalVisitors() {
        let totalVisitors = 0
        for (let i = 0; i < this.dinosaurs.length; i++) {
            let dinosaur = this.dinosaurs[i]
            totalVisitors += dinosaur.guestsAttractedPerDay
        }
        return totalVisitors
    }

    calculateTotalVisitorsPerYear() {
        const visitorsPerDay = this.calculateTotalVisitors()
        const visitorsPerYear = visitorsPerDay * 365
        return visitorsPerYear
    }

    calculateYearlyRevenue() {
        const yearlyVisitors = this.calculateTotalVisitorsPerYear()
        const yearlyRevenue = yearlyVisitors * this.ticketPrice
        return yearlyRevenue
    }

    removeSpecies(species) {
        let dinosToKeep = []
        for (let i = 0; i < this.dinosaurs.length; i++) {
            let dinoToCheck = this.dinosaurs[i]
            if (dinoToCheck.species != species) {
                dinosToKeep.push(dinoToCheck)
            }
        }
        this.dinosaurs = dinosToKeep
    }

    listDiets() {
        const dietArray = []
        for (let i = 0; i < this.dinosaurs.length; i++) {
            let dinoToCheck = this.dinosaurs[i]
            if (dietArray.includes(dinoToCheck.diet) == false) {
                dietArray.push(dinoToCheck.diet)
            }
        }
        return dietArray
    }

    generateDietObject() {
        const dietArray = this.listDiets()
        let dietObject = {}
        for (let i = 0; i < dietArray.length; i++) {
            let dietToAdd = dietArray[i]
            dietObject[dietToAdd] = 0
        }
        return dietObject
    }

    populateDietObject() {
        const dietObject = this.generateDietObject()
        for (let i = 0; i < this.dinosaurs.length; i++) {
            let dinosaurToAdd = this.dinosaurs[i]
            let dietToAdd = dinosaurToAdd.diet
            dietObject[dietToAdd] += 1
        }
        return dietObject
    }
}

module.exports = Park