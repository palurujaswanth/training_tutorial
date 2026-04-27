export const tutorialData = [
  {
    day: 1,
    title: 'HTML Basics',
    tags: ['html'],
    content: `
      <h3>Introduction to HTML</h3>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure of your web page and its content.</p>
      <br/>
      <h4>Essential Tags:</h4>
      <ul>
        <li><strong>&lt;html&gt;</strong>: The root element of an HTML page.</li>
        <li><strong>&lt;head&gt;</strong>: Contains meta information about the document (like its title).</li>
        <li><strong>&lt;title&gt;</strong>: Specifies a title for the document.</li>
        <li><strong>&lt;body&gt;</strong>: Contains the visible page content.</li>
        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: HTML headings.</li>
        <li><strong>&lt;p&gt;</strong>: Defines a paragraph.</li>
        <li><strong>&lt;a&gt;</strong>: Defines a hyperlink.</li>
        <li><strong>&lt;img&gt;</strong>: Embeds an image.</li>
        <li><strong>&lt;sup&gt; and &lt;sub&gt;</strong>: Superscript and subscript text.</li>
      </ul>
    `
  },
  {
    day: 2,
    title: 'Forms and CSS Transitions',
    tags: ['html', 'css'],
    content: `
      <h3>HTML Forms and CSS Basics</h3>
      <p>Forms are used to collect user input. CSS is used to style and animate HTML elements.</p>
      <br/>
      <h4>Forms Elements:</h4>
      <ul>
        <li><strong>&lt;form&gt;</strong>: Container for form elements.</li>
        <li><strong>&lt;input&gt;</strong>: The most common form element. Can be text, password, email, radio, checkbox, etc.</li>
        <li><strong>&lt;textarea&gt;</strong>: A multi-line input field.</li>
        <li><strong>&lt;button&gt;</strong>: A clickable button.</li>
      </ul>
      <br/>
      <h4>CSS Transitions:</h4>
      <p>CSS transitions allow you to change property values smoothly (from one value to another), over a given duration. For example, changing a background color when a user hovers over an element.</p>
    `
  },
  {
    day: 3,
    title: 'Tables and Layouts',
    tags: ['html', 'css'],
    content: `
      <h3>HTML Tables</h3>
      <p>HTML tables allow web developers to arrange data into rows and columns.</p>
      <br/>
      <h4>Table Structure:</h4>
      <ul>
        <li><strong>&lt;table&gt;</strong>: Defines the table.</li>
        <li><strong>&lt;tr&gt;</strong>: Defines a row in a table.</li>
        <li><strong>&lt;th&gt;</strong>: Defines a header cell in a table.</li>
        <li><strong>&lt;td&gt;</strong>: Defines a standard cell in a table.</li>
      </ul>
      <p>You can use the <code>colspan</code> and <code>rowspan</code> attributes to make a cell span multiple columns or rows respectively.</p>
    `
  },
  {
    day: 4,
    title: 'JS Introduction',
    tags: ['html', 'js'],
    content: `
      <h3>Introduction to JavaScript</h3>
      <p>JavaScript is the programming language of the Web. It is used to make web pages interactive.</p>
      <br/>
      <h4>Basic Concepts:</h4>
      <ul>
        <li><strong>Variables:</strong> Containers for storing data values. In modern JS, we use <code>let</code> and <code>const</code>.</li>
        <li><strong>Functions:</strong> Blocks of code designed to perform a particular task. They are executed when "something" invokes them.</li>
        <li><strong>Events:</strong> "Things" that happen to HTML elements (e.g., a user clicks a button). JS can react to these events.</li>
      </ul>
    `
  },
  {
    day: 5,
    title: 'JS DOM Manipulation',
    tags: ['html', 'js'],
    content: `
      <h3>The HTML DOM</h3>
      <p>The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content.</p>
      <br/>
      <h4>Accessing Elements:</h4>
      <p>You can access HTML elements using methods like:</p>
      <ul>
        <li><code>document.getElementById(id)</code></li>
        <li><code>document.querySelector(selector)</code></li>
      </ul>
      <br/>
      <h4>Changing Content:</h4>
      <p>To change the content of an HTML element, you can use the <code>innerHTML</code> or <code>innerText</code> properties.</p>
    `
  },
  {
    day: 6,
    title: 'Logic and Operations',
    tags: ['html', 'js'],
    content: `
      <h3>JavaScript Logic</h3>
      <p>Control structures allow you to dictate the flow of your program.</p>
      <br/>
      <h4>Loops:</h4>
      <p>Loops are handy if you want to run the same code over and over again, each time with a different value.</p>
      <ul>
        <li><strong>For Loop:</strong> Loops through a block of code a number of times.</li>
        <li><strong>While Loop:</strong> Loops through a block of code while a specified condition is true.</li>
      </ul>
      <br/>
      <h4>Dynamic HTML Generation:</h4>
      <p>Using loops and variables, you can dynamically build strings containing HTML and insert them into the DOM, like building a table dynamically based on user input.</p>
    `
  },
  {
    day: 7,
    title: 'Advanced Forms',
    tags: ['html', 'css', 'js'],
    content: `
      <h3>Advanced Form Handling with JS</h3>
      <p>JavaScript can be used to validate form input and to handle complex data extraction from forms.</p>
      <br/>
      <h4>Key Concepts:</h4>
      <ul>
        <li><strong>Event Listeners:</strong> Using <code>addEventListener('submit', callback)</code> to intercept form submissions.</li>
        <li><strong>Prevent Default:</strong> Calling <code>event.preventDefault()</code> to stop the browser from reloading the page when a form is submitted.</li>
        <li><strong>JSON:</strong> JavaScript Object Notation is a lightweight format for storing and transporting data. Form data can be gathered, formatted into a JS object, and then converted to a JSON string.</li>
      </ul>
    `
  },
  {
    day: 8,
    title: 'Profile Portfolio Building',
    tags: ['html', 'css', 'js'],
    content: `
      <h3>Building a Complete Portfolio</h3>
      <p>Combining HTML structure, CSS styling, and JavaScript logic to create a cohesive, interactive web application.</p>
      <br/>
      <h4>Core Components:</h4>
      <ul>
        <li><strong>Hero Section:</strong> The topmost section of a website designed to grab attention immediately.</li>
        <li><strong>Navigation:</strong> Sticky or fixed navigation bars help users move through a single-page application easily.</li>
        <li><strong>Responsive Design:</strong> Ensuring the layout looks good on desktops, tablets, and mobile devices using CSS Media Queries or frameworks like Bootstrap.</li>
        <li><strong>Typing Effects:</strong> Using JS <code>setTimeout()</code> to create dynamic text animations.</li>
      </ul>
    `
  },
  {
    day: 9,
    title: 'Mean & Median Calculator',
    tags: ['html', 'css', 'js'],
    content: `
      <h3>Mathematical Operations in JS</h3>
      <p>JavaScript provides the <code>Math</code> object for mathematical tasks, and arrays can be manipulated to compute statistics.</p>
      <br/>
      <h4>Mean (Average):</h4>
      <p>Calculated by summing all numbers in an array and dividing by the array's length.</p>
      <br/>
      <h4>Median:</h4>
      <p>The middle value of a sorted array. If the array has an even number of elements, the median is the average of the two middle elements. Requires using the array <code>sort()</code> method properly.</p>
    `
  },
  {
    day: 10,
    title: 'JavaScript Calculator',
    tags: ['html', 'css', 'js'],
    content: `
      <h3>Building a functional Calculator</h3>
      <p>A calculator application tests your ability to handle multiple events and maintain state.</p>
      <br/>
      <h4>Key Mechanisms:</h4>
      <ul>
        <li><strong>State Management:</strong> Keeping track of the current input string or numbers being operated on.</li>
        <li><strong>Evaluation:</strong> Computing the result of a mathematical string. (Note: Using <code>eval()</code> is common in simple tutorials but generally avoided in production due to security risks; parsing the string manually is the safer alternative).</li>
        <li><strong>Grid Layouts:</strong> Using CSS Grid to perfectly align calculator buttons into rows and columns.</li>
      </ul>
    `
  }
];