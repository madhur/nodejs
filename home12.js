var flow = require('nimble');

var exec = require('child_process').exec;

function downloadNodeVersion(version, destination, callback)
{
    var url = 'http://nodejs.org/dist/node-v' + version + '.tar.gz';
    console.log(url);
    var filePath = destination + '/' + version + '.tgz';
    exec('curl ' + url + ' >' + filePath, callback);

}

flow.series([

    function(callback)
    {

        flow.parallel([

            function(callback)
            {

                console.log('Downloading node 0.4.6...');
                downloadNodeVersion('0.4.6', '/tmp', callback);
            },
            function(callback)
            {
                console.log('Downloading Node 0.4.7..');
                downloadNodeVersion('0.4.7', '/tmp', callback);

            }

        ], callback);
    },

    function(callback)
    {
        console.log('Creating archive of downloaded files....');
        exec('tar cvf node_distros.tar /tmp/0.4.6.tgz /tmp/0.4.7.tgz', function(error, stdout, stderr)
        {
        	if(error)
        		console.log(error);

            console.log('All done');
            callback();

        });
    }
]);