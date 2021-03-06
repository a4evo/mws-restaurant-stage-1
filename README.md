# Mobile Web Specialist Certification Course
---

## To start
1. Download.
2. Instal Python v.3.*.
3. Run windows command line.
4. `cd` to folder with project.
5. run `python -m http.server 8000`.
6. Open [link](http://0.0.0.0:8000/)
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 


### PROJECT SPECIFICATION

#### Responsive Design
* Is the site UI compatible with a range of display sizes?

[x] All content is responsive and displays on a range of display sizes.

[x] Content should make use of available screen real estate and should display correctly at all screen sizes.

[x] An image's associated title and text renders next to the image in all viewport sizes.

* Are images responsive?

[x] Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

* Are application elements visible and usable in all viewports?

[x] On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

##### Convert the provided site to use a responsive design .
1. Bootstrap and other CSS frameworks should not be used; all responsiveness should be done with CSS.
2. Use appropriate document type declaration and viewport tags
3. Create a responsive grid-based layout using CSS
4. Use media queries that provide fluid breakpoints across different screen sizes
5. Use responsive images that adjust for the dimensions and resolution of any mobile device

#### Accessibility

* Are images accessible?

[x] All content-related images include appropriate alternate text that clearly describes the content of the image.

* Is focus used appropriately to allow easy navigation of the site?

[x] Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

* Are site elements defined semantically?

[x] Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

#### Offline Availability

* Are pages that have been visited available offline?

[x] When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.