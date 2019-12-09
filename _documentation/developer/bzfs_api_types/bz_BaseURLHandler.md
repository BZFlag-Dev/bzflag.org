---
since: 2.4.0
category: Objects
constructor:
    - []
functions:
    - returnType: void
      description: This method is called when a URL job completes successfully.
      name: URLDone
      params:
          - dataType: const char*
            description: The URL the original request was sent to.
            name: URL
          - dataType: const void*
            description: The incoming body of the request as a `const char*`, cast as needed.
            name: data
          - dataType: unsigned int
            description: The string length of the incoming body.
            name: size
          - dataType: bool
            description: Will always be `true`.
            name: complete
    - returnType: void
      description: This method is called if the URL request times out.
      name: URLTimeout
      params:
          - dataType: const char*
            description: The URL this request is coming from
            name: URL
          - dataType: int
            description: Will always be `1`.
            name: errorCode
    - returnType: void
      description: This method is called if the URL request fails.
      name: URLError
      params:
          - dataType: const char*
            description: The URL this request is coming from
            name: URL
          - dataType: int
            description: Will always be `1`.
            name: errorCode
          - dataType: const char*
            description: Will always be `"Error"`.
            name: errorString
---

The base class that is used for `bz_addURLJob` handlers. The `URLDone` method is a pure virtual function and must be implemented by any classes extending this base class.
