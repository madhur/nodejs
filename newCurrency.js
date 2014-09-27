function currency(amount)
{
	this.amount = amount;
}

currency.prototype.returnAsRupee = function()
{
	return "Rs " + this.amount;
};



currency.prototype.returnAsDollar = function()
{
	return "Rs " + this.amount;
};

console.log(currency);
exports.currency=currency;

module.exports = currency;

console.log(module.exports);