---
command: localset
syntax: "variable [value]"
since: 2.4.0
category: Client
permissions: ~
---

Read a local variable or set it to `[value]`

## Examples:
```
/localset highlightPattern "laser"
/localset highlightPattern "laser|genocide"
/localset highlightPattern "(Team Flag|Team's Flag|Genocide)"
```
*highlightPattern* highlights lines with the selected words when they appear in the console (chat box).
- When highlighting one word, just type the word in quotes, such as "laser."
- If one wants to highlight two or more words, the words must be separated with a '|', such as "laser|genocide" (highlights lines with laser OR genocide).
- If any of the words have spaces, all the words must be surrounded in parentheses, such as "(Team Flag|Team's Flag|Genocide)" (highlights lines with "Team Flag," "Team's Flag," OR "Genocide").

&nbsp;
```
/localset linedradarshots 60
```
*linedradarshots* sets how long shots are on the radar. While this option cane be set through the in-game GUI, you can only set this setting up to 10 via the GUI. You can hand-edit your config to give you longer shot lengths.

&nbsp;
```
/localset latitude 38
/localset longitude -77
```
*latitude* and *longitude* set the latitude and longitude for BZFlag's sky rendering system.  
*Hint: To always have a black sky set latitude 90 (north pole) or -90 (south pole) for winter/summer respectively.*
