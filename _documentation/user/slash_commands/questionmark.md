---
command: "?"
syntax: ~
since: 2.4.0
category: Player
permissions: ~
---

There is also in-game help for the various server commands. Running `/?` by itself will display all the commands along with a simple one-line explanation for each. As an example:

```
[SERVER->] /? - display the list of server-side commands
[SERVER->] /ban <#slot|PlayerName|"Player Name"|ip> <duration> <reason>  - ban a player, IP or IP range off the server
[SERVER->] /banlist [pattern] - List the IPs currently banned from this server
[SERVER->] /checkip <ip> - check if an IP is banned and print corresponding ban info
[SERVER->] /countdown - start the countdown sequence for a timed game
[SERVER->] /date - display current server time
[SERVER->] /flag <reset|up|show> - reset, remove or show the flags
[SERVER->] /flaghistory - list what flags players have grabbed in the past
...
```

Part or all of a command followed by a question mark will show only matching commands. For instance, `/lag?` will output:

```
[SERVER->] /lagdrop [count] - display or set the number of lag warnings before a player is kicked
[SERVER->] /lagstats - list network delays, jitter and number of lost resp. out of order packets by player
[SERVER->] /lagwarn [milliseconds] - display or set the maximum allowed lag time
```

And `/lagstats?` will output:

```
[SERVER->] /lagstats - list network delays, jitter and number of lost resp. out of order packets by player
```
