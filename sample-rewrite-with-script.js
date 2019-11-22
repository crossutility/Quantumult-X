/**
 * @supported 23AD6B11CD4B 55BE3B10F8A1
 * The above random generated device ID can be found at the bottom of Quantumult X additional menu, and may be changed when system restored.
 * Indicate what device are supported by the file. This is necessary when the file is not loaded from local("On My iPhone - Quantumult X - Scripts").
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

var body = $response.body;
var obj = JSON.parse(body);

obj['result'] = 0;
body = JSON.stringify(obj);

console.log(body);

$done(body);
