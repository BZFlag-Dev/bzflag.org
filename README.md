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
- serve .html files without the extension
- send a 404 when the .html extension is included

### Apache

Replace `/var/www/whatever/` with the actual webroot of the site.

```
  # BZFlag requests motd.php, so make an alias
  Alias /motd.php /var/www/whatever/motd.txt

  <Directory /var/www/whatever>
    AllowOverride None
    RewriteEngine On
    RewriteBase /
    
    # If there are any HTML files you want to be accessible with the .html extension, include a RewriteCond like this.
    RewriteCond %{REQUEST_URI} !=/dontrewrite.html
    # Send a 404 for any request URLs with a .html extension
    RewriteRule ^(.+)\.html$ - [R=404,L]
    
    # For .html files that exist, allow them to be accessed without an extension 
    RewriteCond %{REQUEST_FILENAME}.html -f
    RewriteRule (.*) $1.html [END,L]
  </Directory>
```
