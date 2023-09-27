const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park
let dinosaur1
let dinosaur2
let dinosaur3

describe('Park', function() {

  beforeEach(function() {
    dinosaur1 = new Dinosaur('Diplodocus', 'Herbivore', 100)
    dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 70)
    dinosaur3 = new Dinosaur('Velociraptor', 'Carnivore', 130)
    park = new Park('Jurassic Park', 25, [dinosaur1, dinosaur2])
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  })

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 25)
  })
    
  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2])
  })
    
  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  })

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur2)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1])
  })

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopularDinosaur()
    assert.strictEqual(actual, dinosaur1)
  })
    
  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findSpecies('Diplodocus')
    assert.deepStrictEqual(actual, [dinosaur1])
  })

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.calculateTotalVisitors()
    assert.strictEqual(actual, 170)
  })

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.calculateTotalVisitorsPerYear()
    assert.strictEqual(actual, 62050)
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = park.calculateYearlyRevenue()
    assert.strictEqual(actual, 1551250)
  })

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.removeSpecies('Stegosaurus')
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1])
  })

  it('should be able to list the diets of the dinosaurs in the park', function() {
    const actual = park.listDiets()
    assert.deepStrictEqual(actual, ['Herbivore'])
  })

  it('should be able to convert that list to an object', function() {
    const actual = park.generateDietObject()
    assert.deepStrictEqual(actual, {Herbivore:0})
  })

  it('should be able to generate an object representing the dinosaurs\'s diets', function() {
    park.addDinosaur(dinosaur3)
    const actual = park.populateDietObject()
    assert.deepStrictEqual(actual, {Herbivore:2, Carnivore:1})
  })
});
