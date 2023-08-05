/**
* @fileoverview HTTP backend (running on iPhone, iPad or Mac) used for sharing iCloud profile or any other type data through URL, the Quantumult X (tvOS) or other devices on the same LAN can download from it.
*
* [http_backend]
* https://raw.githubusercontent.com/crossutility/Quantumult-X/master/backend-icloud-to-http.js, tag=TV Profile Server, path=^/icloud-profile/
*
* You can use Quantumult X on Apple TV to download the profile through http://[lan-ip]:[port]/icloud-profile/shared-profile/apple-tv.conf to get the file in 「iCloud Drive /Quantumult X/Data/shared-profile/apple-tv.conf」
*
* It is worth noting that the iCloud files HTTP backend can fetch are always located in 「iCloud Drive /Quantumult X/Data/」 or its subdirectories.
*
* You should first create a file named apple-tv.conf and a directory named 「shared-profile」 in 「iCloud Drive /Quantumult X/Data/」 for this sample script to work.
*
* You can also export rootCA.crt from your iOS devices to 「iCloud Drive /Quantumult X/Data/shared-cert/rootCA.crt」then install it on tvOS through http://[lan-ip]:[port]/icloud-profile/shared-cert/rootCA.crt
*
* You can find the details of how to install CA on tvOS through a HTTP(S) CA file by searching google.
*
*
* @supported Quantumult X (v1.0.31-build717)
*
*/

console.log($request.path); // The $request.path we get should be 「/icloud-profile/shared-profile/apple-tv.conf」.

const ErrorStatus = "HTTP/1.1 404 Not Found";
const ErrorHeaders = { "Connection": "Close" };
const ErrorResponse = {
    status: ErrorStatus,
    headers: ErrorHeaders
};

const basePath = "/icloud-profile/";
if (!$request.path.startsWith(basePath)) {
    console.log("Illegal request.");
    $done(ErrorResponse);

    return;
}

let filePath = $request.path.substr(basePath.length); // The filePath we get should be 「shared-profile/apple-tv.conf」 and we will fetch the actual file existed in iCloud Drive /Quantumult X/Data/shared-profile/apple-tv.conf later.

let profileUint8Array = $iCloud.readFile(filePath);
if (profileUint8Array === undefined) {
    console.log("iCloud file does not exist.");
    $done(ErrorResponse);

    return;
}

let profileBuffer = profileUint8Array.buffer.slice(profileUint8Array.byteOffset, profileUint8Array.byteLength + profileUint8Array.byteOffset);

const okStatus = "HTTP/1.1 200 OK";
const okHeaders = { "Connection": "Close" };
const okResponse = {
    status: okStatus,
    headers: okHeaders,
    bodyBytes: profileBuffer
};

console.log("OK");
$done(okResponse);
