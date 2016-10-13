# Sub-Organization Sample API

Your Sub-Organization details will need to be provided somehow, either through static
files, or through an API.  This example nodejs Express server will allow you to run
the client portion for testing.  The client is agnostic of the server setup and tries
to make little assumptions about the source of your configuration objects.

To start this server:

```
node server.js
```

Once your server is started, you can access it on port 4370:

[http://localhost:4370/API](http://localhost:4370/API)

This express app supports the following queries:

```
// returns all agencies in []
http://localhost:4370/API

// returns all ageencies in []
http://localhost:4370/API?agencyName=all

// returns matching agency or warning message if not found
// agencyName {string} - Abbreviation of agency
// example GEO (geospatial enterprise office)
http://localhost:4370/API?agencyName=GEO
```
