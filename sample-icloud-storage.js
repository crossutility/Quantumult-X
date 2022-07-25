
/**
 * @fileoverview Example to read, write and remove iCloud file
 * in the directory of iCloud Drive/Quantumult X/Data/
 *
 * @supported Quantumult X (v1.0.31-build717)
 * 
 * $iCloud.writeFile(Uint8Array, path), $iCloud.readFile(path), iCloud.removeFile(path)
 */


let filePath = "world/birth.txt";
// let filePath = "birth.txt";


// Write iCloud file.
let writeContent = "Hello World 😀 !";
let encoder = new TextEncoder();
let writeUint8Array = encoder.encode(writeContent);

if ($iCloud.writeFile(writeUint8Array, filePath)) {
    console.log("OK");
} else {
    console.log("NO");
}
$done();


// Read iCloud file.
/*
let readUint8Array = $iCloud.readFile(filePath);
if (readUint8Array === undefined) {
    console.log("NO");
} else {
    let textDecoder = new TextDecoder();
    let readContent = textDecoder.decode(readUint8Array);
    console.log(readContent);
}

$done();
*/


// Remove iCloud file.
/*
if ($iCloud.removeFile(filePath)) {
    console.log("OK");
} else {
    console.log("NO");
}

$done();
*/




