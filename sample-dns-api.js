/**
* @fileoverview Example to deal with DNS through API $configuration.sendMessage.
*
*
* Action: dns_get_placeholder_ip
* Get the ip-domain mapping related reserved ip like 198.18.1.23. This ip-domain mapping mechanism is mostly used in the filter module and MitM module.
*
*
* Action: dns_update_cache
* This action inserts(or updates) the DNS A record to the Quantumult X Tunnel DNS module.
* If the ttl passed in is negative, the related cache will be cleared.
* Don't confuse the ip in DNS A record with the reserved ip fetched from dns_get_placeholder_ip. The ip in DNS A record is the real ip for outbound connections.
*
*
*
* @supported Quantumult X (v1.0.22-build555) iOS 13.0 +
*/


/*
const host = "example.com";
const message = {
    action: "dns_get_placeholder_ip",
    content: host
};
*/


const record = {"host": "abc.debug", "ips": ["192.168.0.1"], "ttl": 60};
const message = {
    action: "dns_update_cache",
    content: record
};


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log(output);
    }
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});
