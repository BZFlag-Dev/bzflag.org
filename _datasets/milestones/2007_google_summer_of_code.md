BZFlag participated in the 2007 Google Summer of Code.  In 2007, Google funded approximately 800 students across approximately 135 participating mentoring organizations, including BZFlag.  A detailed after-the-fact discussion and analysis of BZFlag's first-year participation in the 2007 Google Summer of Code is included in this [article](http://my.bzflag.org/gsoc/bzflag_gsoc2007_post_mortem.pdf) by Sean Morrison.  This article was given to Google in August 2007 as a final report, per se, of our involvement (you're only a first-year participant once).

# Preparing an Application

There was no specific format to applications, but they were told that they should be detailed in their approach and background information about themselves.  They were supposed to state specifically what they intend to deliver and any implementation details they felt relevant such as what language they intend to use.  C/C++ proposals were preferred though others were considered.  Students that just submitted the summaries contained below did not do very well.  If you talked with us on IRC about your SoC proposal, you were supposed to include your IRC nickname somewhere in your proposal.

Early proposal submission was encouraged as it gave us more time to review your proposal in detail, comment on them, and potentially ask for additional input.  Submitting closer to the deadline wasn't a negative consideration as all submissions were be predominantly judged on their merit, but submitting and discussing early was an advantage for submissions that were similar to other submissions.  

Students were asked to propose what they actually want to work on, how they intend to work on it, what they intend to DO, what they know about that task, some details about themselves, etc.  Their ability to perform the task is outright presumed, so they are supposed to propose a task that they are comfortable and knowledgeable with performing.

# Program Evaluation

We received a total of 45 proposals for the 2007 program that were then reviewed, evaluated, and critiqued.  Of those applications, only '''four''' could be selected to work on BZFlag.  There were about 20 really good proposals overall, making the selection process very competitive and difficult.  ''This cannot be stressed enough..''  It was really hard to narrow down the submissions but in the end we did have only so many slots to work with and the line eventually had to be drawn.  Every application was read multiple times and reviewed in detail.  We thank '''everyone''' that submitted a proposal and hope to still see some of you become involved in our software development.

In the end, submissions were selected according to the overall long-term impact that accepting the proposal could make for the game, perception of the submitter's abilities to complete the task within the program timeframe, general consensus on the technical approach being proposed, and overall interest in having such modifications made to BZFlag.  Particular notice was made of students that were responsive to questions and readily interactive in the IRC channel.  Communication is a good thing.

While there's never any guarantee that work on any code will be integrated, this is very much the desire and '''intention''' of our participation in the Summer of Code.  Students were expected to interact on the [http://my.bzflag.org/irc/ #bzflag IRC channel] on the Freenode network, abide by the [http://bzflag.svn.sourceforge.net/viewvc/*checkout*/bzflag/trunk/bzflag/DEVINFO DEVINFO] rules, agree to the [[Google Summer of Code Acceptance|development requirements]], and focus on providing a clean maintainable implementation.

The projects that were accepted are as follows:

## Graphical BZFlag Map Editor
*by Jude Nelson (jude-)*

BZFlag does not yet have a sufficient graphical world map editor.  That is to say that while there have been many over the years, they all fall into obsolescence or are less than ideal due to other constraints upon their use).  While some existing editors come very close, it is usually the case that they do not fully support advanced map features, require the users to have a programmer's understanding of the file format, are not well documented, are very platform-specific, or are outright obsolete.  This is problematic to the BZFlag community in that it hinders less technically-inclined users from developing worlds.  To support this need, the proposed work aims to implement such an editor that should allow users to quickly create worlds in a visual manner, provide a GUI to easily manipulate all features of BZW, provide intuitive and interactive visualizations of all map data, and allow for easy extendibility to ensure future BZW compatibility. Additionally, to encompass a larger user base, it will be developed using cross-platform toolkits, allowing it to be easily ported between operating systems and ideally support the same target operating systems as BZFlag itself.

== Random Procedural World Generator ==
=== Kornel Kisielewicz (Epyon) ===

Although BZFlag implements a poor man's random map generator as default, most players prefer to play on user made maps. The reason is simple -- the primitive scattering algorithm implemented in BZF's random map generation is, well, simple and limited.  Creating a nice looking and fun-to-play map by hand, however, is a non-trivial task too. In order to really enjoy playing BZFlag, you need to search for good levels in the community, and even those can get boring after a while because you learn their layout or their popularity diminishes.  Moreover, players who know the map well have an unfair advantage when playing against people who see the map for the first time.  Moreover still, if you want to set up your own server, the task of creating your own map by hand can be rather complicated and involved.

== Community Messaging System ==
=== Chris Wible (L4m3r) ===

BZFlag has efficient in-game chat among players on a server. However, it's currently difficult to reach a player from outside the game, or to communicate without actually joining a server.  By implementing a more sophisticated community messaging system, players will be able to contact one another across servers and outside of gameplay, all from within the game client.  This will allow players to get together in a common place to schedule matches as well as provide a general ''global chat'' mechanism for the game.

== Programmable Computer Player Client ==
=== Jørgen Pedersen Tjernø (daxxar) ===

BZFlag has a hard-coded computer player that players can join with or enable in the game client, but the behavior and capabilities of that bot player are rather limited, unchanging, and easily predicted.  This efforts creates an interface for making better BZFlag computer players by building upon the existing '''exceptional''' efforts of the [http://bzrc.cs.byu.edu/ BZRC] project (developed and contributed by Andrew McNabb and others at BYU).  This effort aims to provide a fully programmable/scriptable standard interface for controlling a tank through a framework that can be readily distributed and shared.  This interface supports basic artificial intelligence (AI) research and AI education as well.

# Proposal Ideas

While there are lots of [[Ideas]] floating around of varying utility to the game, the ideas listed below were the specific areas that we were predominantly interested in seeing worked on as part of the GSoC.  Please note that students were also welcome to apply with their own original ideas.  They should have run those ideas by one of the developers beforehand, as there are some ideas which will not be accepted regardless of the quality of the application and applicant, due to desire to preserve the scope and focus of the project.

Ideas marked with an "*" indicate entries where we received at least two or more submissions for that idea.

## Dead Reckoning and other Networking Enhancements ==
The basic idea is to improve BZFlag's networking by performing dead reckoning on the server along with context-sensitive packet delivery culling.  Much work has gone into the game towards moving more and more of the game state to the server, but there is additional migration and protocol changes required.  Similarly, network utilization can be optimized by not relaying certain packets (like miniscule position updates to distant players) based on the current game state.  Some useful background reading for this task include "[http://www.research.ibm.com/netgames2005/papers/aggarwal.pdf Fairness in Dead-Reckoning based Distributed Multi-Player Games (pdf)]" and "[http://www.sigcomm.org/sigcomm2004/workshop_papers/net610-aggarwal.pdf Accuracy in Dead-Reckoning Based Distributed Multi-Player Games (pdf)]".

## Graphics Engine Integration
One of the long-standing desires for BZFlag is to improve the graphics capabilities in the game by integrating with an existing rendering engine.  This task would be to integrate BZFlag with a graphics engine like [http://ogre3d.org/ OGRE], [http://www.crystalspace3d.org/ Crystal Space], [http://www.openscenegraph.com/ OpenSceneGraph], or [http://irrlicht.sourceforge.net/ Irrlicht].

## Headless Artificial Intelligence Agent * ==
This task involves creating a clean stand-alone version of the game client that is headless (i.e. requires no GUI to run), programmable, and scriptable.  Ideally, a programming interface that is compatible with an existing framework such as the [http://robocode.sourceforge.net/ Robocode] [http://www-128.ibm.com/developerworks/java/library/j-robocode/ API] should be made available for controlling AI tank players so that collaboration with other AI efforts can be leveraged.  A scripting interface (perhaps using [http://www.swig.org/ SWIG]) should be provided on top of that API to allow dynamic control of the AI agents from a scripting language like Python, Ruby, Lua, Tcl, or Perl.

## Global authentication daemon
The goal of this project would be to provide global account management system daemon that the client and servers would communicate with for account, group membership, and profile information.  This effort preferably be written in C++, would need to talk to an LDAP server for persistent storage on the backend, and allow chaining across multiple daemons for data replication and failover service.  The daemon would need to provide a well structured simple communications API that the game client and game servers can securely talk to.

## Enhanced server listing
The game client includes a simplistic listing of publicly available servers.  This task would involve significantly enhancing the listing section in BZFlag to allow for various sortings (e.g. ping time, country, name, etc), favorites, recently used, specific additional information on specific servers, and all existing information.  The task would involve coming up with a user-friendly design that it fully keyboard-accessible.  It could leverage external gui toolkits, use BZFlag's existing gui library, and/or extend the existing capabilities.  The focus would be on creating an intuitive and informative listing enhancement within the constraints of the gaming interface.

## World file layout and editing application
This task should produce an application for the creation/modification/arrangement of [[BZW]] map files and objects in a visual manner. The application should be designed in a cross platform compatible manner (ether some existing cross platform framework, or a built in platform system). The application should be able to manage all the existing structures in a [[BZW]] world file.  Ideally, the application should also be able to import 3d meshes from other design applications.  It would not be required to be able to dynamically edit meshes in the application.

## Two-player tanks
Make modifications to the game such that it is optionally possible (e.g. via a server configuration) to allow multiplayer tanks where one player can only drive and the other can control the turret.  The implementation would have to be some simple/intuitive interface to join and depart tanks as well as implemented in a fashion that preserves the "spirit" of BZFlag's operational simplicity.

## Enhanced cross-platform multiple display support
Add the ability to effectively manage multiple display environments from within the game allowing for the detection, alignment/orientation specification, and resolution parameters for each display via menu options as well as proper full-screen and/or windowed support.  An additional feature could involve allowing the user to dedicate a display to the various primary gui elements (the 3D environment, the radar, and the chat console).  BZFlag's current context management is mostly handled by SDL or other platform-specific modules, so this could be taken into consideration.  There's also the possibility of our move to an integrated graphics engine would similarly impact how multidisplay contexts are created and managed.

## In-game profile management
BZFlag allows players to specify a callsign and team in addition to other player characteristics and preferences.  This enhancement would focus on allowing the user to specify and manage multiple profiles from within the game.  Profiles could be linked together and should be presented in an intuitive manner (proposal should highlight how you'd go about achieving that).  The profiles would need to associate with global account information as well.

## Integrated BZFS web interface
The BZFlag game server, BZFS, could benefit from having a browser-accessible http/https interface for viewing server statistics, setting various parameters, and otherwise controlling the server daemon while it is running.  Similar to how your network router has a web interface for changing configuration parameters, this idea is simply to create this interface in a maintainable and portable manner.  Please go into detail on how exactly you'd go about doing this.

## Network Testing and Simulation Environment
This task should provide a controlled testing environment for simulating network behavioral characteristics, including the ability to change virtual network parameters to induce different network conditions of lag and packet loss.  This environment should provide a viewer capability to observe interactions of BZFlag clients being tested from the perspective of the player, the server, and third-party observers.  This simulation framework should work with the client and server directly so that testing of actual changes may be performed in a stand-alone environment.

## Cross server communications system
This task would be the design and implementation of a server spanning chat system. It would allow players from one server to send chat messages to players on other servers. It should also be able to be used to allow players to know where there friends or "buddies" are playing if they are online. The system should tie into the central user name registration system. Added benefits would be the use of existing protocols or applications, such as Jabber or IRC, if they can be integrated cleanly. Support for using off-line apps for chat and friends list access as well as server management would be a plus.

The below flyer was used to help spread the word about our involvement with the Google Summer of Code.  Flyers were translated to other languages that we had mentors for and the students that were selected did end up spanning the globe.  While many developers can converse fluently in other languages, English is still expected for developer discussions but the flyers did help get the word out and inform our own (international) player community as to what was happening.

* English ([http://my.bzflag.org/gsoc/BZGSoC2007.pdf PDF]) ([http://my.bzflag.org/gsoc/BZGSoC2007.png PNG])
* Deutsch | German  ([http://my.bzflag.org/gsoc/BZGSoC2007_de.pdf PDF]) ([http://my.bzflag.org/gsoc/BZGSoC2007_de.png PNG])
* Español | Spanish ([http://my.bzflag.org/gsoc/BZGSoC2007_es.pdf PDF]) ([http://my.bzflag.org/gsoc/BZGSoC2007_es.png PNG])

Thanks to Sean Morrison (aka learner) for designing our 2007 GSoC flyer.

# Mentors and Credits

Thanks to the following BZFlag developers for their participation as mentors:

* Julio Jiménez Borreguero (aka jujibo aka Manu)
* Sean Morrison (aka learner aka brlcad)
**  interested in AI and authentication list server services
* Jeffrey Myers (aka JeffM2501)
** interested in game editor
* Daniel Remenak (aka DTRemenak aka Erroneous)
* Mark Thomas (aka menotume)
* David Trowbridge (aka purple_cow)
* Alfredo Tupone (aka c3po)
** interested in Crystal Space integration
* David Wollner
* Andrew McNabb
* Tim Riker
* Donna Crawford

Additionally, special thanks to others in #bzflag that have provided support and feedback including:

* a_meteorite and DTRemenak
** for proofreading and copy editing the GSoC submission
* JeffM2501 and DTRemenak
** for proof editing the promotional flyer
* Saturos
** for translating the promotional flyer to German
* quantumdot and Manu
** for translating the promotional flyer to Spanish
* others.
