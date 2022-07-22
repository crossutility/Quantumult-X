# URL Scheme

Formats of Quantumult X URL.

## Scheme

quantumult-x

## Host

Host is empty.

## API

The "add-resource" is available since Quantumult X 1.0.29 build 670.  
The "quantumult-x:///update-configuration?remote-resource=" replaces all existed resources, yet the "quantumult-x:///add-resource?remote-resource=" keeps all existed resources.  
The "quantumult-x:///ui?module=gallery&action=add"  is available since Quantumult X 1.0.29 build 672.  

- [quantumult-x:///update-configuration?remote-resource=url-encoded-json](https://github.com/crossutility/Quantumult-X)

``` text
quantumult-x:///update-configuration?remote-resource=%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.snippet%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.snippet%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.snippet%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.snippet%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D
```

``` json
{
    "server_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.snippet, tag=Sample-01",
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.snippet, tag=Sample-02"
    ],
    "filter_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/filter.snippet, tag=Sample, force-policy=your-policy-name"
    ],
    "rewrite_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet, tag=Sample"
    ]
}
```

- [quantumult-x:///add-resource?remote-resource=url-encoded-json](https://github.com/crossutility/Quantumult-X)

``` text
quantumult-x:///add-resource?remote-resource=%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.snippet%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.snippet%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.snippet%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.snippet%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D
```

``` json
{
    "server_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.snippet, tag=Sample-01",
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.snippet, tag=Sample-02"
    ],
    "filter_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/filter.snippet, tag=Sample, force-policy=your-policy-name"
    ],
    "rewrite_remote": [
        "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet, tag=Sample"
    ]
}
```

- [quantumult-x:///ui?module=gallery&type=task&action=add&content=url-encoded-json](https://github.com/crossutility/Quantumult-X)

``` text
quantumult-x:///ui?module=gallery&type=task&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fgallery.json%22%0A%5D
```

``` json
[
    "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/gallery.json"
]
```

- [quantumult-x:///ui?module=gallery&type=icon&action=add&content=url-encoded-json](https://github.com/crossutility/Quantumult-X)

``` text
quantumult-x:///ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ficon-gallery.json%22%0A%5D
```

``` json
[
     "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/icon-gallery.json"
]
```

## Optional Universal Links  

"Universal Links" supported since Quantumult X 1.0.30 (App Store).  

Apple’s Content Delivery Network requests the apple-app-site-association file within 24 hours. Devices check for updates approximately once per week after app installation. This proccess is handled by system (eg. iOS) not Quantumult X itself.  

If the Quantumult X universal link is active on your device, the link will directly open (no network request to associated domain) Quantumult X app. If the link opens Safari or any other browser apps then the Quantumult X universal link is not active on your device.

The Quantumult X universal link starts with "https://quantumult.app/x/open-app/", the rest part of the link should be similar to Quantumult X URL.

- [https://quantumult.app/x/open-app/add-resource?remote-resource=url-encoded-json](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.snippet%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.snippet%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.snippet%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.snippet%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D)

``` text
https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%0A%20%20%20%20%22server_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver.snippet%2C%20tag%3DSample-01%22%2C%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fserver-complete.snippet%2C%20tag%3DSample-02%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22filter_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Ffilter.snippet%2C%20tag%3DSample%2C%20force-policy%3Dyour-policy-name%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22rewrite_remote%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fcrossutility%2FQuantumult-X%2Fmaster%2Fsample-import-rewrite.snippet%2C%20tag%3DSample%22%0A%20%20%20%20%5D%0A%7D
```  
