/**
 * @fileoverview Example to send HTTPS request through a specific policy or server.
 * It is worth noting that $task.fetch request with specific policy option will lose the optimization of connection reuse,
 * It means that every HTTPS request with the specific policy option will has the complete TCP handshake and TLS handshake,
 * This option is only recommended for some special usecases such as server info(geo location) checking.
 *
* @supported Quantumult X (v1.0.25-build598)
 */

 var url = "http://ip-api.com/json"
 var opts = {
     policy: "direct"
 };
 var myRequest = {
     url: url,
     opts: opts
 };

 $task.fetch(myRequest).then(response => {
     console.log(response.body);
     $done();
 }, reason => {
     $done();
 });

 // For customized geo location checker with event-interaction task, you can use HTTPS API instead of HTTP API (built-in geo_location_checker only supports HTTP API).
 // The event-interaction task only works when Quantumult X Tunnel is running.
 // The img-url for event-interaction also works with UIAction if it is a SF Symbol.
 // [task_local]
 // event-interaction geo_location.js, tag=GeoIP, img-url=text.magnifyingglass.system

 // The geo_location.js
 // The $environment.params is auto passed in when user triggered a UIAction and is related to the configuration element. Right now only suppots the server tag.
 //
 // var url = "http://ip-api.com/json"
 // var opts = {
 //     policy: $environment.params
 // };
 // var myRequest = {
 //     url: url,
 //     opts: opts
 // };
 //
 // $task.fetch(myRequest).then(response => {
 //     $done({"title":"The Title","message":response.body});
 // }, reason => {
 //     $done({"title":"The Error Title","message":"The message"});
 // });
 //
 // Quantumult X (v1.0.25-build606)
 // $task.fetch(myRequest).then(response => {
 //     var content= `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: bold">` + response.body + `</p>`;
 //     $done({"title":"The Title","htmlMessage":content});
 // }, reason => {
 //     $done({"title":"The Error Title","message":"The message"});
 // });
