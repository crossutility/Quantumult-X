var body = $response.body;
var obj = JSON.parse(body);

obj['result'] = 0;
body = JSON.stringify(obj);

// console.log(body);
// $notify('This is title', 'This is message');

$done(body);
