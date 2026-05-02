---
title: Form Validation
---

# Form Validation

Form validation ensures that the data a user enters into a form is accurate, complete, and properly formatted before it's submitted. Without validation, a form might allow users to send incorrect or incomplete information, causing issues such as failed submissions or errors on the backend. However, validation can improve user experience and keep our data clean and safe. 

## Types of Valdiation
Form validation can be broken down into two different types: client-side and server-side validation.  

**Client-Side Validation** happens in the browser as soon as the user interacts with the form. This helps provide instant feedback. For example, if someone forgets to enter their email, the browser can immediately notify them.

**Server-Side Validation** occurs after the form is submitted and the data is sent to the server. The server then checks if the data is valid. Server-side validation is crucial because it ensures that even if someone bypasses client-side validation (e.g., by disabling JavaScript), the server will still check the data for accuracy and safety.

Both are important. Client-side validation enhances user experience by catching errors early, while server-side validation provides a safety net to ensure that no bad data slips through. 

In this module, we will focus on client-side validation. While developers should never solely rely on client-side validation, it can greatly improve the user experience when implemented correctly. Client-side validation comes in two different flavours: HTML-only validation and JavaScript Validation. 

## HTML-Only Validation

HTML offers several built-in validation attributes that make it easy to enforce rules without needing any JavaScript. These include:

- `required`: Ensures that a field is filled out before form submission.
- `minlength` and `maxlength`: Set minimum and maximum character limits for text fields.
- `type`: Specifies the type of input, such as `email`, `url`, `number`, etc., to ensure the input matches the expected format.
- `pattern`: Defines a regular expression for which the input must match.

Here’s a quick example:

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required minlength="3" maxlength="15">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" pattern="\d{3}-\d{3}-\d{4}" required>
  
  <button type="submit">Submit</button>
</form>
```

In this form:

- The **username** field must be filled out with between 3 and 15 characters.
- The **email** field is required and must contain a properly formatted email address.
- The **phone number** must match the pattern `123-456-7890`.

### Styling Form Validation

We can use the `:valid` and `:invalid` CSS pseudo-classes to apply different styles based on whether the input is valid or invalid. HTML will automatically determine the validity of the input based on the provided attribute and apply the appropriate pseudo-class.

```css
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}

input:invalid:focus {
  outline-color: red;
}
```

With this CSS, any valid input will have a green border, and any invalid input will have a red border. It's a simple way to give users immediate visual feedback as they fill out the form.

## JavaScript Validation

HTML validation is great, but there are times when you need more control or more complex validation rules. This is where JavaScript comes in, specifically the **Constraints Validation API**.

First, we can use the `novalidate` attribute in the form tag to disable the browser's automatic validation and take control ourselves.

```html
<form id="myForm" novalidate>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required minlength="3" maxlength="15">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" pattern="\d{3}-\d{3}-\d{4}" required>
  
  <button type="submit">Submit</button>
</form>
```

Now, we can use JavaScript to handle the validation manually:

```js
const $myForm = document.getElementById('myForm')
 
$myForm.addEventListener('submit', function (event) {
  // Get form elements
  const form = event.target

  // Check if form is valid
  if (!form.checkValidity()) {
    event.preventDefault() // Prevent submission
    alert('Please correct the errors in the form.')
  }
})
```

The `checkValidity()` method checks if the form fields meet their constraints. If the form is invalid, we can prevent submission using `event.preventDefault()` and alert the user to correct the errors.

### Customizing Error Message

Sometimes, you might want to provide custom error messages. You can do that by using the `setCustomValidity()` method.

```js
const $username = document.getElementById('username')

$username.addEventListener('input', function (event) {
  if ($username.validity.tooShort) {
    $username.setCustomValidity('Username must be at least 3 characters long.');
  } else {
    $username.setCustomValidity(''); // Clear the message if valid
  }
});
```

With this code, if the username is too short, a custom message is shown, giving users more context about the error.

## Conclusion

Form validation is a crucial part of web development. Whether you're using simple HTML attributes like `required` and `pattern` or diving deeper with JavaScript and the Constraints Validation API, validating form input improves both user experience and data quality. By combining these techniques, you can ensure that your forms are user-friendly, visually appealing, and, most importantly, secure.

## See Also 
- [Form Validation | MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
