var currency = require("./currency");

console.log(currency.returnAsRupee());

console.log(currency.returnAsDollar());

console.log(currency.curModule.returnAsRupee());

currency.curModule.setAmount(200);

currency.curModule.setAmount(300);

console.log(currency.curModule.returnAsRupee());



//var a = new currency.curmodule();
