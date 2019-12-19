
/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response. Same task shares context.
 *
 * @supported Quantumult X (v1.0.5-build166)
 */

var url = "https://example.com/";
var method = "POST";
var headers = {"Field": "test-header-param"};
var data = {"info": "abc"};

var myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
});
