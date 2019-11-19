// @ts-check

/**
 * @file index.js
 * @author Deepak
 * @see github.com/iamlearning1
 */

/**
 * name
 * @type {string}
 */
const name = 'John Doe';

/**
 * Array
 * @type {Array<number>}
 */
const grades = [32, 24, 52]

/**
 * @type {{id: number, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello',
}

/**
 * Calculate
 * @param {number} amount 
 * @param {number} tax 
 * @returns {number}
 */
const calculate = (amount, tax) => {
    return amount + tax * amount;
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id
 * @property {string} name
 * @property {string|number} [age] - optional
 * @property {boolean} isActive
 */

 /**
  * @type {Student}
  */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true
}

class Person {
    /**
     * 
     * @param {Object} info 
     */
    constructor(info) {
        /**
         * @property {string} name
         */
        this.name = info.name;
        /**
         * @property {string} age
         */
        this.age = info.age;
    }

    /**
     * @property {Function} greet
     * @returns void
     */
    greet() {
        console.log('Hello', this.name)
    }
}

/**
 * See {@link Person}
 */
const person = new Person({name: 'John', age: 23})