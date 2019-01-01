# BZFlag.org Main Website

The [stakx](https://github.com/stakx-io/stakx) source files used to build the static [BZFlag.org](https://www.bzflag.org/) website.

## Building the site

This website uses features available in stakx 0.2.x. At the time of writing this, stakx 0.2.x is still in development so be sure to use the latest master branch or the [latest 0.2 beta executable](https://github.com/stakx-io/stakx/releases).

```bash
git clone https://github.com/BZFlag-Dev/bzflag.org
cd bzflag.org

# Build for production
./path/to/stakx build

# Build for development
./path/to/stakx build -c _config-dev.yml
```

## Fetching assets

We host some additional assets, such as videos, outside of the Git repository. To fetch those, run:
```
./fetch-assets.sh
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
