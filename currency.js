var amount = 50;


var returnAsRupee = function()
{
	return "Rs " + 50;
};

var returnAsDollar = function()
{
	return "$ " + 50;
};


exports.returnAsRupee=returnAsRupee;
exports.returnAsDollar=returnAsDollar;

var curModule = (function()
{
	var amount = 100;
	
	var setAmount = function(newAmount)
	{
		amount=newAmount;
	};

	return {


		returnAsRupee: function()
		{
			return "Rs " + amount;
		},

		returnAsDollar: function()
		{
			return "$ " + amount;
		},
		setAmount: setAmount
		

	}

}());

exports.curModule=curModule;