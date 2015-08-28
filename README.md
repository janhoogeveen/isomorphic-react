# What is this?

It's an example of a web application made in React using Express as a webserver. This way we can pre-render our React components on the webserver and as soon as the client-side code has been downloaded take over and make it a single-page application.

## Benefits of this approach for our clients:
* The whole website works without JavaScript enabled
* Works when we're on slow connections (Train/Hotspots/Foreign countries)
* Bots can crawl the content again, just like old times (essential for SEO)

## How to run it?
Clone the repo and do this:

```
$ npm install
$ npm start
```

Now go to 0.0.0.0:3000 and that's it!

## What needs to be done before we can use this in production websites?
- [X] Set up a good example of a routing config
- [ ] Determine if the current 404 solution is reliable
- [ ] Add styling to the project [In progress]
  - [ ] Find out if we can use Sass for this
  - [ ] Find out if we can use PostCSS with this
  - [ ] Find out if we can use Autoprefixer with this
  - [ ] Find out where we should save and deploy static files (images/stylesheets/fonts/downloads)
- [ ] Find out how to deploy an app like this and seperate production mode from development mode
- [ ] Add unit testing framework to the application
- [ ] Add unit testing examples to the application
- [ ] Add a Flux implementation to the app (Redux? Flux by Facebook?)
- [ ] Add error handling to when a state does not succesfully render a string
