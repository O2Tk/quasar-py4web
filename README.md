# quasar-py4web
Quasar meets PY4WEB
=============================

Info
----------------
This provides an example of how to use [PY4WEB](https://www.py4web.com) and [Quasar](https://www.quasar.dev) together.

What is included
-------------------
This repository includes the src for a Quasar project, as well as a PY4WEB app. The Quasar spa app should be built then stored in the PY4WEB ``static`` directory where it can be served from.

Things that work
--------------------
The Quasar app has basic integration with the ``auth API`` from PY4WEB. This includes registration, login, and updates to the profile.

Getting started
-------------------
Clone this repository
Run ``make all``

This should download both quasar, and py4web, build the spa, copy it to the ``static`` folder within PY4WEB, and start PY4WEB.
If something doesn't work right, take a look at the makefile. I've only tested it on a single Linux environment, and I'm sure you need to get all the prerequisites for Quasar and PY4WEB before this will work.

Please enjoy responsibly. Sincerely, O2Tk
