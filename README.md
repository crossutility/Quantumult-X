# Quantumult X
Quantumult Experiment

### New Features
* Since the local HTTP proxy module has compatibility issues with some apps, we removed it from Quantumult X; But the MitM HTTPS decryption and rewrite are both working with traffic through TUN interface.
* Enable HTTP Analyzer can record whole HTTP request and response including body.
* Filter works on UDP traffic and UDP destination port can be set as whitelist.
* Server can have its own server_check_url instead of the global server_check_url.
* Supports V2Ray websocket and websocket + tls over ss, read sample configuration for details. Only compatible with server side deployed by V2Ray not shadowsocks v2ray-plugin.
* User-Agent(lower priority than Host) type of filter works on TUN traffic.
* Customized DNS setting supports customized port and IPv6 address.
* Improved the DNS mechanism by enable expired answers and start new query at the same time.
* Policy status and request history will keep the record of the full policy route like A -> B -> C -> D.
* The DNS results will be recorded along with the first responded DNS server, response time and the TTL.
* Modify configuration won't trigger reconnecting anymore.
* Rewrite HTTP request headers and response body.
