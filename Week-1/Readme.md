# WEEK1-HTML

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Exercise1.1:1.When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.(2-3hours)

## a.What is the main functionality of the browser?

A web browser takes us anywhere on the internet. It retrieves information from other parts of the web and displays it on desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web. This information needs to be shared and displayed in a consistent format so that people using any browser, anywhere in the world can see the information.

## b.High Level Components of a browser

!![Components](./assets/High%20Level%20Components.avif?raw=true "Title")
**The browser's main components are:**

### `The user interface`

this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

### `The browser engine`

manages actions between the UI and the rendering engine.

### `The rendering engine`

responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

### `Networking`

for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

### `UI backend`

used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

### `JavaScript interpreter`

 Used to parse and execute JavaScript code.

### `Data storage`

 This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

## c.Rendering engine and its use

## d.Parsers (HTML, CSS, etc)

## e.Script Processors

## f.Tree construction

## g.Order of script processing

## h.Layout and Painting
