import { Before, After } from "cypress-cucumber-preprocessor/steps";
import { each } from "async";


describe('test', () => {

    Before(function() {
        //runs before all tests

    })

    After(function(){
        // runs after all tests
    })

    beforeEach(function(){
         //runs before each block 
    })

    afterEach(function(){
        //runs after each block 
    })

    it.only('Run only this test case', () => {

    })

    it.skip('Skip this test case', () => {

    })

})
