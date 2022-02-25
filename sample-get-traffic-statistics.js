/**
 * @fileoverview Example of $configuration series.
 *
 * API get_traffic_statistics, the results are in bytes.
 *
 * @supported Quantumult X (v1.0.28-build631) iOS 13.0 +
 */


const message = {
    action: "get_traffic_statistics"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret, null, 2);
        console.log(output);
    }
    
    $done();
}, reject => {
    // Normally not gonna happen.
    $done();
});
