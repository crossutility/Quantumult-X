/**
* @fileoverview Example to deploy a HTTP backend.
*
* [http_backend]
* https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-backend.js, tag=Backend Example, path=^/example/v1/
*
* You can visit through http://quantumult-x:9999/example/v1/ or http://127.0.0.1:9999/example/v1/ or http://localhost:9999/example/v1/
* You can also deploy a lot of different backends for your own usage, such as remote resource combination backend, task perferences manager backend, file converting backend ...
* The requests only will be sent to the related backends with the matching (regex) path.
* Further more you can use a signature or any other validation method to verify if the request is legitimate or not.
* Since the NE has the memory limitation, you should keep the backend as tiny as possible.
*
*
* @supported Quantumult X (v1.0.14-build358)
*/


// The availabel variables: $request.url, $request.path, $request.headers, $request.body, $prefs, $task, $notify(title, subtitle, message), console.log(message), $done(response)

const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Connection": "Close"};
const myData = "We got you.\n\n";

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body: myData + JSON.stringify($request.headers)
};

$done(myResponse);
