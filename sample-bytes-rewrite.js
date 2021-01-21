/**
 * @fileoverview Example of HTTP rewrite of raw data.
 * You can modify the original buffer then call $done with the modified result.
 * You can create a new buffer data then $done with the result.
 * You can replace the original buffer with the binary data fetched from another URL.
 *
 * The below rewrite sample specifies the process to replace the bytes of an image with the bytes of another image.
 * It is worth noting that it's simpler to use the 302 redirection rewrite, but this is a good example on the usage of modifing the body that is not a string.
 *
 * @supported Quantumult X (v1.0.19-build480) and iOS 14.0 +
 *
 * $response.bodyBytes is instance of ArrayBuffer.
 *
 * [rewrite_local]
 * ^https://raw\.githubusercontent\.com/crossutility/Quantumult-X/master/icon-samples/apple\.PNG url script-response-body https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-bytes-rewrite.js
 */


 const url = "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/icon-samples/telegram.PNG";
 const myRequest = {
     url: url
 };

 $task.fetch(myRequest).then(response => {
     $done({bodyBytes: response.bodyBytes});
 }, reason => {
     $done();
 });


// var originalBuffer = $response.bodyBytes;
// var buffer = new ArrayBuffer(8);
// var uint8 = new Uint8Array(buffer);
// uint8[0] = 3;
// uint8[7] = 5;

// $done({bodyBytes: buffer});
