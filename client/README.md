# Oregon ArcGIS Online Sub-Organization Client App

This is the client application that delivers the individual Sub-Organization
pages.  Each Sub-Organization page is meant to serve as a landing page to
promote your agencies efforts within ArcGIS Online.  Almost every element of the
application is configurable, allowing agencies to:

+ Set a background image
+ Set agency name
+ Set agency abbreviation (OregonDOT, GEO, ODF, etc)
+ Set an agency description
+ Set personalized disclaimer
+ Set logo
+ Set contact information
+ Set social media links (flickr, youtube, twitter, facebook)
+ Set ID of ArcGIS Online group containing gallery items

You can view the structure of the configuration JSON object used to power the
application in the [server example](../../server/data/sample.js).  The JSON
needs to be provided through an interface that is beyond the scope of this
open source project.  You can view a sample server using [node](https://nodejs.org/en/)
and [express](https://expressjs.com/).

View the [root of this project](../../) for instructions on getting setup.
