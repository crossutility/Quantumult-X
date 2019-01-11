## Remote Managed Configuration

This document(draft) specifies the response format for [remote managed configuration](https://github.com/crossutility/Quantumult-X/raw/master/remote-managed-configuration-sample.json).

### JSON Response Success

``` json
{
  "version": "1.0",
  "error": {

    },
  "data": {
    "provider_image_url": "https://avatars1.githubusercontent.com/u/44658120?s=460&v=4",
    "provider_name": "Provider Roommate",
    "account_description": "Level 5",
    "extension_check_interval":3600,
    "container_check_interval":60,
    "expire_time": 1862111613,
    "upload": 2375927198,
    "download": 12983696043,
    "total": 1099511627776,
    "configuration_profile_modified_at":1531138234,
    "configuration_profile_url": "https://github.com/crossutility/Quantumult-X/raw/master/sample.conf",
    "servers": [
      {
        "tag": "Region 1",
        "online": true,
        "description": "Information about it."
      },
      {
        "tag": "Region 2",
        "online": true,
        "description": "Information about it."
      },
      {
        "tag": "Region 3",
        "online": false,
        "description": "Information about it."
      }
    ],
    "tips": "Maintaining notification or discount."
  }
}

```

### JSON Response With Error

``` json
{
  "version": "1.0",
  "error": {
      "code": 12,
      "message": "This is the error message"
    }
}
```


### JSON Response Less Info

``` json
{
  "version": "1.0",
  "error": {
    },
  "data": {
    "provider_image_url": "http://img.example.com/normal.jpg",
    "provider_name": "Provider Roommate",
    "account_description": "Level 5",
    "extension_check_interval":3600,
    "container_check_interval":60,
    "expire_time": 1862111613,
    "upload": 2375927198,
    "download": 12983696043,
    "total": 1099511627776,
    "configuration_profile_modified_at":1531138234,
    "configuration_profile_url": "https://example.com/profile?id=12345",
    "servers": [

    ],
    "tips": ""
  }
}
```
