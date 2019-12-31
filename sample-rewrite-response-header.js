/**
 * @fileoverview Example of HTTP rewrite of response header.
 *
 * @supported Quantumult X (v1.0.5-build183)
 *
 * [rewrite_local]
 * ^http://example\.com/resource8/ url script-response-header response-header.js
 */

// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers

var modifiedHeaders = $response.headers;
modifiedHeaders['Key'] = 'whatever';

var modifiedStatus = 'HTTP/1.1 200 OK';

$done({status: modifiedStatus, headers : modifiedHeaders});
// $done({headers : modifiedHeaders});
// $done({}); // Not changed.
