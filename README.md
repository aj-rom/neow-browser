# NeoW Browser
Near Earth Object Web Service interface, for searching NEO's available in NASA's [Open API](https://api.nasa.gov/).

This UI makes use of the NEO - Feed: 

### Example Query - NEO Feed
> https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
## API Credit
Thanks to the hard work from [The SpaceRocks Team](https://github.com/SpaceRocks/) & [NASA's JPL Asteroid Team](https://cneos.jpl.nasa.gov/), we have access to an abundance of data on objects coming close to earth.

## Current Limitations
* API only allots a 7 day range for searching for NEO's

## Improvements
* Should make use of the 'browse' feature of the API: https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY

## Contributing

### Getting Started

To get started contributing to this project, clone this repository and then navigate into the repositories directory.

    $ cd neow-browser
    
Next, you must install required dependencies via NPM or yarn:
    
    $ npm i
    
Finally, to get data from NASA's API you must [generate an API Key](https://api.nasa.gov/). Next, rename `.env.local.example` to `.env.local`, then paste this API key into the `/.env.local` file.

```YAML
# Get a new API key at: https://api.nasa.gov/
NEXT_PUBLIC_API_KEY=YOUR_API_KEY_HERE
```
