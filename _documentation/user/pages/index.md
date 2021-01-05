---
docpath: /
---

Welcome to the BZFlag documentation! We have documentation targeting new and experienced players and we have documentation for more tech-oriented individuals who would like to build on top of the BZFlag world.

<div class="row">
    <div class="col-lg-6">
        {% markdown %}
            ## Player

            If you're a player, these topics are available to explain the game to you. Despite our retro look, there is a lot of complexity to the game!

            ### [Flags]({{ url(pages['Flags']) }})

            In the game, there are a number of different flag types exist for players; however, not all maps have the same flags available. These vary from super flags that grant your tank special powers, team flags that are used in the Capture The Flag mode, and antidote flags used to drop bad flags, which give your tank a disadvantage.

            ### [Slash Commands]({{ url(pages['Slash Commands']) }})

            In order to interact with the server for special actions, we use what are called "slash commands" because they start with `/`. Some actions are for players, others are for admins.
        {% endmarkdown %}
    </div>
    <div class="col-lg-6">
        {% set dev_docs = collections.developer_documentation %}
        {% markdown %}
            ## Developer

            If you'd like to compile your own client, run your own server, or write your own plug-ins to modify server behavior, this section is for you.

            ### Compiling

            BZFlag is a open source game that is available on all three major operating systems. Here's how to build on the respective systems:
              - [Windows]({{ url(dev_docs['compiling-on-windows']) }})
              - [Linux]({{ url(dev_docs['compiling-on-linux']) }})
              - [macOS]({{ url(dev_docs['compiling-on-macos']) }})

            ### [Server Plug-in API]({{ url(pages['bzfs API']) }})

            BZFlag exposes an API via it's server process to allow for custom behavior and game modes to exist on maps.

            ### [Contributing to the project]({{ url(dev_docs['contributing']) }})

            We're an open source project meaning all pull requests are welcome! Here's how you can get started with your first pull request to start contributing to our game.
        {% endmarkdown %}
    </div>
</div>
