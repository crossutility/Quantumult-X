## Remote Managed Configuration

This document(draft) specifies the response format for remote managed configuration.

### JSON Response Success

``` json
{
  "version": "1.0",
  "error":
    {
    },
  "data": {
    "provider_image_url": "http://img.example.com/normal.jpg",
    "provider_name": "Provider Roomate",
    "account_description": "Level 5",
    "check_interval":3600,
    "min_check_interval":60,
    "expire_time": 1862111613,
    "upload": 2375927198,
    "download": 12983696043,
    "total": 1099511627776,
    "configuration_profile_modified_at":1531138234,
    "configuration_profile_url": "https://example.com/profile?id=12345",
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
  "error":
    {
      "code": 12,
      "message": "This is the error message",
    }
}
```
