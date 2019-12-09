---
since: 2.4.0
category: URL Jobs
signatures:
    - - dataType: const char*
        name: URL
        description: The URL to send a request to.
        default: ~
      - dataType: bz_BaseURLHandler*
        name: handler
        description: This handler defines the callbacks used for when a URL job is done, errors out, or times out.
        default: 'NULL'
      - dataType: const char*
        name: postData
        description: The body of a POST request; this can be in any string based format.
        default: 'NULL'
    - - dataType: const char*
        name: URL
        description: The URL to send a request to.
        default: ~
      - dataType: bz_URLHandler_V2*
        name: handler
        description: This handler defines the callbacks used for when a URL job is done, errors out, or times out.
        default: ~
      - dataType: void*
        name: token
        description: Any type of identifying information that will be accessible to the `handler` callback to be able to identify this request.
        default: ~
      - dataType: const char*
        name: postData
        description: The body of a POST request; this can be in any string based format.
        default: 'NULL'
    - - dataType: const char*
        name: URL
        description: The URL to send a request to.
        default: ~
      - dataType: bz_URLHandler_V2*
        name: handler
        description: This handler defines the callbacks used for when a URL job is done, errors out, or times out.
        default: ~
      - dataType: void*
        name: token
        description: Any type of identifying information that will be accessible to the `handler` callback to be able to identify this request.
        default: ~
      - dataType: const char*
        name: postData
        description: The body of a POST request; this can be in any string based format.
        default: 'NULL'
      - dataType: bz_APIStringList*
        name: headers
        description: Key/value pairs for headers that will be sent on outgoing URL requests.
        default: 'NULL'
returns:
    dataType: bool
    description: ~
---

This URL function will send an asynchronous outgoing GET or POST request to a given URL.

- When the `postData` argument is `NULL`, the request will be sent as a GET request.
- When `postData` is not `NULL`, the request is sent as a POST request.

The `handler` argument defines a class with callbacks that will be executed when a URL job completes or errors out.
