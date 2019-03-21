---
command: ban
syntax: "<slot# | callsign | ip address> <duration> <reason>"
since: 2.4.0
category: Admin
permissions:
  - ban
  - shortBan
---

The ban command is typically used after a player has been verbally warned and then kicked. It will prevent them from rejoining. The ban target is specified as a callsign (with quotes if they have spaces in their name), a slot # or an IP address. Banning by callsign will only work if the player is still on the server. It is recommended to avoid banning by slot # because the target player may leave and someone else that joins make be placed into that slot as the ban is issued, causing the wrong player to be banned. A ban duration is also required.

**NOTE: If a user is globally identified (they have a plus sign by their name), banning by callsign will ban their IP address AND their BZID. If the IP ban is later removed, the ID ban will remain and prevent them from using their registered name. The ID ban must also be removed with the /idunban command.**

## Ban Durations

There are several ways to ban players from a server. Every type of ban needs to have a ban duration set. The supported units of time are years (y), weeks (w), days (d), and minutes (m). These can optionally be strung together like 1w2d30m to get 1 week, 2 days, 30 minutes. If only a number without units is specified, it defaults to minutes. The keywords "short" or "default" can be used to indicate a short ban, which defaults to 5 hours (which is controlled by the poll ban length). Providing 0, "max" or "forever" will set it to a permanent ban. If the admin/cop only has the "shortban" permission instead of the "ban" permission, the longest duration will be capped to the short duration.

## Usage

Examples:

```
/ban "Six Feet Under" 30m Please do not use profanity.
```

```
/ban 192.168.4.3 1w Teamkilling is not allowed. You have been warned repeatedly.
```

There are also times when a player will rejoin with a different, but similar IP address. This is an issue with dynamic IP addresses. An Internet Service Provider (ISP) will rarely give each user their own dedicated (aka "static") IP address. When their modem connects, they get an address from a pool of available addresses. This can cover a huge range of addresses in some cases, which may require banning a range if things get bad enough.

There are two ways to ban a range of addresses: using an asterisk (\*) wildcard character or [CIDR notation](http://www.subnet-calculator.com/cidr.php). CIDR notation has been available since BZFlag 2.4.4, and allows for more granular ranges to be specified. Example:

`/ban 192.168.4.* 2w Cheater (god mode)` (This bans 192.168.4.0 - 192.168.4.255)

`/ban 10.50.*.* 1d Teamkilling is not allowed.` (This bans 10.50.0.0 - 10.50.255.255)

`/ban 172.16.0.0/26 30d Excessive profanity.` (This bans 172.16.0.0 - 172.16.0.63)

Range bans have a higher possibility of banning innocent players as it is banning a (sometimes large) chunk of the Internet. So, in some cases it may be necessary to work with the server owner to fine tune the range bans or to whitelist innocent player accounts.
