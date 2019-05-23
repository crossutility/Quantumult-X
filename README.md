# Quantumult X
Quantumult Experiment

### New Features
* Filter works on UDP traffic and UDP destination port can be set as whitelist.
* Server can have it's own server_check_url instead of the global server_check_url.
* User-Agent(lower priority than Host) type of filter works on TUN traffic.
* Customized DNS setting supports customized port and IPv6 address.
* Improved the DNS mechanism by enable expired answers and start new query at the same time.
* Policy status and request history will keep the record of the full policy route like A -> B -> C -> D.
* The DNS results will be recorded along with the first responded DNS server, response time and the TTL.
* Modify configuration won't trigger reconnecting anymore.
* Rewrite HTTP request headers and response body.
