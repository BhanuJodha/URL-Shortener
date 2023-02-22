CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * User guide
 * Troubleshooting
 * Maintainers

INTRODUCTION
------------

This is a URL shortener microservice which have some basic functionality like :-
  
   - The user gets a short URL in change for a long URL with an 8-char length of the subdomain.
   - The short URL is only valid for 30 days from the last use or visit.
   - The user can generate one or more short URLs for a single URL.

REQUIREMENTS
------------

This project have some special requirements like :-

   - docker : "^20.10.22"
   - bhanujodha/url-shortener : "0.0.1.RELEASE"
   - mongo : "latest"

INSTALLATION
------------

 * Run [docker compose -f .\docker-compose.yml up] in terminal.


CONFIGURATION
-------------

The module has already been configured in docker-compose for all menu or modifiable settings. There is no configuration other than that run it in development mode only.


USER GUIDE
---------------

 * https://bhanujodha.notion.site/6c98021611744bbaab4952ea7e8b8499


TROUBLESHOOTING
---------------

 * If the localhost:8000/custom-string not respond, check the following:

   - Did you run the container in docker?
   - Could you check for all images mentioned in the requirement?
   - URL "localhost:8000/custom-string" only allows GET requests.


MAINTAINERS
-----------

Current maintainers:
 * Bhanu Pratap Singh Rathore - https://github.com/BhanuJodha3466
