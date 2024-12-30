# BZFlag.org Main Website

The [stakx](https://github.com/stakx-io/stakx) source files used to build the static [BZFlag.org](https://www.bzflag.org/) website.

## Building the Site for Production

This website is built with stakx 0.2.x and typically makes use of the latest development features.

```bash
git clone https://github.com/BZFlag-Dev/bzflag.org
cd bzflag.org

# Copy privacy.yaml.example to privacy.yaml and optionally do the same for
# matomo.yaml, then edit the contents of the copies.
cp _data/privacy.yaml.example _data/privacy.yaml
cp _data/matomo.yaml.example _data/matomo.yaml

# We host some additional assets, such as videos, outside the Git repository. To
# fetch those, run:
php fetch-assets.php

# Build for production
./path/to/stakx build

# Build for development
./path/to/stakx build -c _config-dev.yml
```

## Developing the Site

To hack on our website, you have two options available to you.

### Having PHP Installed

1. If you have PHP installed on your system, download the [lastest version (the `.phar` file) of stakx](https://github.com/stakx-io/stakx/releases/latest).
2. Run the `serve` command with our development configuration.

   ```bash
   ./stakx.phar serve --conf _config-dev.yml
   ```

### Dev Container (portable)

1. Use [Visual Studio Code](https://code.visualstudio.com) or an editor with [dev container](https://containers.dev) support. Our configuration has been tested to work with Visual Studio Code, and has extensions to automatically install inside a container.
2. Within the container, run the following command:

   ```bash
   serve
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
