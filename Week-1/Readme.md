# WEEK1-HTML

## Exercise1.1: When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same

To understand this we need to know meaning of the following keywords

### `URL`

stands for Uniform Resource Locator. URL is the address of the website which you can find in the address bar of your web browser. It is a reference to a resource on the internet, be it images, hypertext pages, audio/video files, etc.

### `DNS`

DNS is short for Domain Name System. Like a phonebook, DNS maintains and maps the name of the website, i.e. URL, and particular IP address it links to. Every URL on the internet has a unique IP address which is of the computer which hosts the server of the website requested.

## Now lets discuss what happens when we enter a URL

![BrowserWorks](./assets/Browser%20Work.webp?raw=true "Title")

Browser checks cache for DNS entry to find the corresponding IP address of website.

< It looks for following cache. If not found in one, then continues checking to the next until found.
    Browser Cache
    Operating Systems Cache
    Router Cache
    ISP Cache
If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name. />

< The requests are sent using small data packets that contain information content of request and IP address it is destined for. />

< Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages. />

< Browser sends an HTTP request to the web server. GET or POST request. />

< Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML. />

< Server sends out an HTTP response along with the status of response. />

< Browser displays HTML content />

< Done. />

## a.What is the main functionality of the browser?

A web browser takes us anywhere on the internet. It retrieves information from other parts of the web and displays it on desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web. This information needs to be shared and displayed in a consistent format so that people using any browser, anywhere in the world can see the information.

## b.High Level Components of a browser

![Components](./assets/High%20Level%20Components.avif?raw=true "Title")
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

responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

## d.Parsers (HTML, CSS, etc)

Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.

The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree.

When the HTML parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but <script> tags—particularly those without an async or defer attribute—blocks rendering, and pauses parsing of HTML.

When the browser encounters CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.

JavaScript parsing is done during compile time or whenever the parser is invoked, such as during a call to a method.

## e.Script Processors

The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies.

## f.Tree construction

The input to the tree construction stage is a sequence of tokens from the tokenization stage. The tree construction stage is associated with a DOM Document object when a parser is created. The "output" of this stage consists of dynamically modifying or extending that document's DOM tree.

## g.Order of script processing

It doesn't matter whether it's an external script or an inline script - they are executed in the order they are encountered in the page. Inline scripts that come after external scripts are held until all external scripts that came before them have loaded and run.

## h.Layout and Painting

### `Layout`

It is where the browser figures out the geometric information for elements - their size and location in the page. Each element will have explicit or implicit sizing information based on the CSS that was used, the contents of the element, or a parent element. The process is called Layout in Chrome.

### `Painting`

In the painting or rasterization phase, the browser converts each box calculated in the layout phase to actual pixels on the screen. Painting involves drawing every visual part of an element to the screen, including text, colors, borders, shadows, and replaced elements like buttons and images.
