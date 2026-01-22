---
command: highlight
syntax: "[pattern]"
since: 2.4.0
category: Client
permissions: ~
---

The highlight command is a client-side command that can be used to highlight messages in the message panel. A word or regular expression is used to match messages that will be highlighted based on the highlight setting configured (which can be underlined or flashing). Only a single highlight pattern can be set, so running the command a second time will replace the existing pattern.

Highlight any line that contains "someword":

```
/highlight someword
```

Highlight any line that contains either "genocide", "guided missile", or "laser":

```
/highlight (genocide|guided missile|laser)
```

And more advanced regular expressions can be used as well.
