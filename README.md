# BZFlag.org Main Website

This is the source files for the static BZFlag.org website. The [stakx](https://github.com/stakx-io/stakx) project is used to build the site. 

## Building the site

```
git clone https://github.com/stakx-io/stakx
git clone https://github.com/BZFlag-Dev/bzflag.org
cd bzflag.org
../stakx/bin/stakx build
```

## Web Server Configuration

The web server needs to be configured to:
- serve motd.txt as motd.php

### Apache

Replace `/var/www/whatever/` with the actual webroot of the site.

```
  # BZFlag requests motd.php, so make an alias
  Alias /motd.php /var/www/whatever/motd.txt
```
