//A module can have multiple kinds of logic in it like functions, data, objects and many more. 
module.exports.simpleFunc = function () { console.log("Testing Func") }
//new es6 syntax ECMA(Europian Computer manufactureres Association)
class testClass {
    testFunc() {
        console.log("test Func from ES6")
    }
}
exports.newFeature = testClass
exports.developedBy = "Aditya"
exports.developedOn = new Date(2022,0,1)
exports.objectInstance = (function () {
    let data = [];
    function testFunc() {
        data.push("aditya");
        data.push(" avinash");
        data.push(" nakat");
        console.log("test Func")
        //console.log(data)
    }
    return {
        testFunc,
        data
    }
})(); 