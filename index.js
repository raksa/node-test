const http = require('http');

var options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/api/v2/auth/login',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

var postData = JSON.stringify({
    email: "test-cc@slash.co",
    password: "7afb,b}WmG%g[-7!"
});

req.write(postData);

req.end();