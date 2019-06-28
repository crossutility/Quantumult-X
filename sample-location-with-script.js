if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['isp'];
var ip = obj['query'];

$done({title, subtitle, ip});
