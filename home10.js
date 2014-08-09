var request = require('request');
var parser = require('htmlparser');

var urls = ['http://psychcentral.com/blog/feed/rss2/', 'http://davidicuswong.wordpress.com/feed/', 'http://www.theglobalconversation.com/blog/?feed=rss2', 'http://happiness-project.com/feed', 'http://www.marriagemissions.com/feed/'];

for (var i = 0; i < urls.length; ++i)
{

    request(urls[i], function(error, response, body)
    {
        if (!error && response.statusCode == 200)
        {
            var handler = new parser.RssHandler();
            var rssParser = new parser.Parser(handler);

            rssParser.parseComplete(body);

            if(handler.dom.items.length)
            {
            	var item = handler.dom.items.shift();
            	console.log(item.title);
            	console.log(item.link);
            }
            else
            	console.log("no RSS items found");
        }
        else
        	console.log(response.statusCode);


    });


}