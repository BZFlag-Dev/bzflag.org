# BZFlag.org Main Website

The [stakx](https://github.com/stakx-io/stakx) source files used to build the static [BZFlag.org](https://www.bzflag.org/) website.

## Building the site

This website is built with stakx 0.2.x and typically makes use of the latest development features.

```bash
git clone https://github.com/BZFlag-Dev/bzflag.org
cd bzflag.org

# Copy privacy.yaml.example to privacy.yaml and optionally do the same for matomo.yaml, then edit the contents of the
# copies.
cp _data/privacy.yaml.example _data/privacy.yaml
cp _data/matomo.yaml.example _data/matomo.yaml

# We host some additional assets, such as videos, outside the Git repository. To fetch those, run:
php fetch-assets.php

# Build for production
./path/to/stakx build

# Build for development
./path/to/stakx build -c _config-dev.yml
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
