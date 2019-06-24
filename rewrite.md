# Rewrite Sample

Samples of HTTP rewrite feature.

## Modify HTTP reqeust headers

- **Absolute URL of HTTP Request to match.**
``` text
https://example.com/resource4
```

- **Rewrite**
``` text
^https?://example\.com/resource4 url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36$2
```

- **Before**
``` text
GET /resource4 HTTP/1.1
Host: example.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.155 Mobile/15E148 Safari/605.1
Accept-Language: en-us
Accept-Encoding: br, gzip, deflate
Connection: keep-alive
```

- **After**
``` text
GET /resource4 HTTP/1.1
Host: example.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
Accept-Language: en-us
Accept-Encoding: br, gzip, deflate
Connection: keep-alive
```

## Modify HTTP response body
The Content-Length will be automatically modified based on the body and encoding.

- **Absolute URL of HTTP Request to match.**
``` text
https://example.com/resource5
```

- **Rewrite**
``` text
^https?://example\.com/resource5 url response-body "info":\[.+\],"others" response-body "info":[],"others"
```

- **Before**
``` text
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-cache, must-revalidate
Strict-Transport-Security: max-age=0
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 64
```
``` text
{"basic":{"token":123},"info":[{"domain":"example.com"}],"others":"7sf43d59ccb7f5"}
```

- **After**
``` text
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-cache, must-revalidate
Strict-Transport-Security: max-age=0
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 48
```
``` text
{"basic":{"token":123},"info":[],"others":"7sf43d59ccb7f5"}
```

## Modify HTTP response body using JavaScript
The Content-Length will be automatically modified based on the body and encoding.

- **Absolute URL of HTTP Request to match.**
``` text
https://example.com/resource5
```

- **Rewrite**
``` text
http://example\.com/resource5/ url script-response-body https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-rewrite-with-script.js
```

- **Before**
``` text
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-cache, must-revalidate
Strict-Transport-Security: max-age=0
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 41
```
``` text
{"basic":{"token":123},"info":[{"domain":"example.com"}],"result":1}
```

- **After**
``` text
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-cache, must-revalidate
Strict-Transport-Security: max-age=0
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 41
```
``` text
{"basic":{"token":123},"info":[{"domain":"example.com"}],"result":0}
```

```
