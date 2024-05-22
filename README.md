# Counter Application

This is a simple web-based counter application that allows users to increment, decrement, and reset a counter value. Additionally, users can specify a step value for incrementing and decrementing the counter.

![Screenshot of Counter Application](images/counter%20Application.png)

## Features

- **Increment and Decrement**: Basic functionality to increase or decrease the counter value.
- **Reset**: A button to reset the counter to zero.
- **Step Value**: An input field to specify the step value for incrementing and decrementing.
- **Responsive UI**: Modern and user-friendly interface with improved accessibility features.

## Project Structure

The project consists of the following files:

### `index.html`
This is the main HTML file that contains the structure of the counter application.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Counter: <span id="counter">0</span></h1>
    <label for="stepInput" style="display: block; margin-bottom: 10px;">Step value:</label>
    <input type="number" id="stepInput" aria-label="Step value" placeholder="Step value" min="1" style="font-size: 18px; padding: 10px; margin-bottom: 20px;">
    <br>
    <button id="incrementBtn" aria-label="Increment counter">Increment</button>
    <button id="decrementBtn" aria-label="Decrement counter">Decrement</button>
    <button id="resetBtn" aria-label="Reset counter">Reset</button>

    <script src="script.js"></script>
</body>
</html>
