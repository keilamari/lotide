const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head([7, 9, 1, 5, 6, 7]), 7);
