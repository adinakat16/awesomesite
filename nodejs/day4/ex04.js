//----------------------------------------------------------------------------------
const app = require("./multiplecontentmodule");
console.log(`This program was developed by ${app.developedBy} on ${app.developedOn}`);

const testComponent=app.objectInstance;
testComponent.testFunc();
console.log("length of data array is: "+testComponent.data.length);
console.log(`it contains: ${testComponent.data}`);


const es6Component = new app.newFeature();
console.log(es6Component);
es6Component.testFunc();
