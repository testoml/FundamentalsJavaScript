# Manipulate web page elements using JS
Manipulating web elements using JavaScript is fundamental for creating dynamic and interactive web pages. JavaScript allows you to select, modify, add, and remove elements from the DOM (Document Object Model). Here are some common tasks for manipulating web elements using JavaScript.

## Selecting Elements
You can select elements using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.
```js
let element = document.getElementById('myElement');
let elements = document.getElementsByClassName('myClass');
let elements = document.getElementsByTagName('div');
let element = document.querySelector('.myClass'); // Selects the first element with the class 'myClass'
let elements = document.querySelectorAll('.myClass'); // Selects all elements with the class 'myClass'
```

## Modifying Elements
Once you have selected an element, you can modify its content, attributes, styles, and more.

```js
let element = document.getElementById('myElement');
element.innerHTML = 'New content'; // Sets new HTML content
element.textContent = 'New text content'; // Sets new text content

let element = document.getElementById('myElement');
element.setAttribute('title', 'New Title'); // Sets a new attribute
let attr = element.getAttribute('title'); // Gets the attribute value
element.removeAttribute('title'); // Removes the attribute

let element = document.getElementById('myElement');
element.style.color = 'red'; // Sets the text color to red
element.style.fontSize = '20px'; // Sets the font size
```
## Adding and Removing Elements
You can add or remove elements from the DOM dynamically.
```js
let newElement = document.createElement('div');
newElement.id = 'newElement';
newElement.textContent = 'This is a new element';

let parentElement = document.getElementById('parentElement');
parentElement.appendChild(newElement); // Appends the new element as a child of the parent element

let element = document.getElementById('myElement');
element.remove(); // Removes the element from the DOM
```

### Example: Manipulating Web Elements
Here is a complete example demonstrating various manipulations:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulating Web Elements</title>
</head>
<body>
    <div id="myElement">Original content</div>
    <div class="myClass">Class content 1</div>
    <div class="myClass">Class content 2</div>
    <div id="parentElement"></div>

    <script>
        // Selecting an element by ID and modifying its content
        let element = document.getElementById('myElement');
        element.innerHTML = 'Modified content';

        // Selecting elements by class name and modifying their content
        let elements = document.getElementsByClassName('myClass');
        for (let i = 0; i < elements.length; i++) {
            elements[i].textContent = 'Modified class content ' + (i + 1);
        }

        // Adding a new element
        let newElement = document.createElement('div');
        newElement.id = 'newElement';
        newElement.textContent = 'This is a new element';

        let parentElement = document.getElementById('parentElement');
        parentElement.appendChild(newElement);

        // Removing an element
        element.remove();
    </script>
</body>
</html>
```

### Example: Adding Event Listeners
You can also add event listeners to elements to handle user interactions.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Listener Example</title>
</head>
<body>
    <button id="myButton">Click me</button>
    <p id="myParagraph">This text will change.</p>

    <script>
        let button = document.getElementById('myButton');
        let paragraph = document.getElementById('myParagraph');

        button.addEventListener('click', function() {
            paragraph.textContent = 'The text has been changed!';
        });
    </script>
</body>
</html>
```

## Check element
To check an option in a dropdown (select) element using JavaScript, you can manipulate the selected attribute of the option elements within the select element. Here’s a step-by-step guide on how to do this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check Option Example</title>
</head>
<body>
    <select id="mySelect">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>

    <button id="selectOptionButton">Select Option 2</button>

    <script>
        document.getElementById('selectOptionButton').addEventListener('click', function() {
            checkOption('mySelect', 'option2');
        });

        function checkOption(selectId, valueToSelect) {
            let selectElement = document.getElementById(selectId);
            let options = selectElement.options;

            for (let i = 0; i < options.length; i++) {
                if (options[i].value === valueToSelect) {
                    options[i].selected = true;
                    break;
                }
            }
        }
    </script>
</body>
</html>
```
