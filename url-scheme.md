# URL Scheme

Formats of Quantumult X URL.

## Scheme
quantumult-x

## Host
Host is empty.

## API
- [quantumult-x:///update-configuration?remote-resource=url-encoded-json](https://github.com/crossutility/Quantumult-X)

``` text
quantumult-x:///update-configuration?remote-resource=%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.txt%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.txt%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.txt%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.txt%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D
```
``` json
{
    "server_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.txt, tag=Sample-01",
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt, tag=Sample-02"
    ],
    "filter_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/filter.txt, tag=Sample, force-policy=your-policy-name"
    ],
    "rewrite_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.txt, tag=Sample"
    ]
}
```
