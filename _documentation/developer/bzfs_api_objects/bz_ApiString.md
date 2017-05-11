---
since: 2.4.0
constructor:
  - []
  - ["const char*"]
  - ["const std::string&"]
  - ["const bz_ApiString&"]
operators:
  - 
    operator: '='
    returnType: "bz_ApiString&"
    params:
      - ["const bz_ApiString&"]
      - ["const std::string&"]
      - ["const char*"]
  - 
    operator: '=='
    returnType: bool
    params:
      - ["const bz_ApiString&"]
      - ["const std::string&"]
      - ["const char*"]
  -
    operator: '!='
    returnType: bool
    params:
      - ["const bz_ApiString&"]
      - ["const std::string&"]
      - ["const char*"]
functions:
  - 
    returnType: unsigned int
    description: The length of the string
    name: size
    params: ~
  - 
    returnType: bool
    description: Whether or not the string is empty
    name: empty
    params: ~
  - 
    returnType: const char*
    description: Return a const char*
    name: c_str
    params: ~
  - 
    returnType: void
    description: Set the contents of the string to the specified format
    name: format
    params:
      - 
        dataType: const char*
        description: A string that may contain format specifiers
        name: fmt
      - 
        dataType: ...
        description: Depending on `fmt`, the function may expect a sequence of additional arguments to replace a format specifier
        hide: true
  - 
    returnType: void
    description: Find all instances of `target` and replace it with `with`
    name: replaceAll
    params:
      - 
        dataType: const char*
        description: ~
        name: target
      - 
        dataType: const char*
        description: ~
        name: with
  - 
    returnType: void
    description: Convert to lowercase
    name: tolower
    params: ~
  - 
    returnType: void
    description: Convert to uppercase
    name: toupper
    params: ~
  - 
    returnType: void
    description: Converts the string into a URL encoded string
    name: urlEncode
    params: ~
---

A text string utility class that is used by the BZFS API for passing text back to a plug-in from various events and functions. The class contains a number of utility methods commonly used by plug-ins.
