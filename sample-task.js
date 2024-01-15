
/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response with customized params, including customized script engine timeout.
 * 
 * The plain (not encoded) hash tag (#) of the url is just a client-side thing, the hash tag and the rest after the hash tag will never be sent to the server.
 * Basically, it can be used to describe the script params in Quantumult X, just like the hash tag used in the url of browsers (Chrome, Firefox, Safari etc.) to describe the position of the page (it's a client-side thing).
 *
 * [task_local]
 * 0 0 * * * https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-task.js#force-timeout=10000&method=POST, tag=Sample, img-url=https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png, enabled=true
 * 
 * @supported Quantumult X Tunnel (v1.0.25)
 */


const sourcePath = $environment.sourcePath; // The value of $environment.sourcePath is available for task and rewrite script since v1.0.25.
console.log(sourcePath); // https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-task.js#force-timeout=10000&method=POST
console.log('\n\n');

const sourceUrl = new URL(sourcePath);
const sourceHash = sourceUrl.hash;
console.log(sourceHash); // #force-timeout=10000&method=POST
console.log('\n\n');

// Get script params.
const scriptParams = new URLSearchParams(sourceHash.substring(1));
for (const [key, value] of scriptParams.entries()) {
    console.log(`${key}, ${value}`);
    // force-timeout, 10000
    // method, POST
}
console.log('\n\n');

// Script engine timeout, unit: ms.
if (scriptParams.has("force-timeout")) {
    const forceTimeout = scriptParams.get("force-timeout");
    console.log(forceTimeout);
    console.log('\n');
    setTimeout(() => {
        console.log("Force exit for " + forceTimeout + " ms timeout.");
        $done();
    }, parseInt(forceTimeout));
}

// HTTP request method.
var method = "GET";
if (scriptParams.has("method")) {
    method = scriptParams.get("method");
    console.log(method);
    console.log('\n');
}

// Compose HTTP request.
const url = "https://example.com/";
const headers = {"Field": "test-header-param"};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data), // Optional.
    opts: {
        redirection: false
    } // Optional, default true to auto redirect.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});


