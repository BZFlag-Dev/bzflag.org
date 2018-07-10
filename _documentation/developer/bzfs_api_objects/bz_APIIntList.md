---
since: 2.4.0
constructor:
  - []
  - ["const bz_APIIntList"]
  - ["const std::vector<int>"]
operators:
  -
    operator: "[]"
    returnType: "const char&"
    params:
      - "unsigned int i"
  -
    operator: "="
    returnType: "bz_APIIntList&"
    params:
      - "const bz_APIIntList&"
      - "const std::vector<int>&"
functions:
  -
    returnType: void
    description: Append a value to the end of the list
    name: push_back
    params:
      -
        dataType: int
        description: The value to append
        name: value
  -
    returnType: int
    description: Retrieve the value at a given index
    name: get
    params:
      -
        dataType: unsigned int
        description: The index to retrieve the value from
        name: index
  -
    returnType: unsigned int
    description: The amount of values stored in the list
    name: size
    params: ~
  -
    returnType: void
    description: Clear the contents of the list
    name: clear
    params: ~
---

An array of integers. This is used for passing lists of integers from the BZFS API itself to the plugin that uses the API.
