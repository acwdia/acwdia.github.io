---
title: Cookies
---

# Cookies

Cookies are the earliest form of client-side storage. They store small pieces of data (typically up to 4KB) and are sent to the server with every HTTP request. 

Cookies are managed using JavaScript’s `document.cookie` API. Here’s a quick example of how to set, get, and delete cookies:

```js
// setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 12:00:00 UTC; path=/";


// getting a cookie
function getCookie(name) {
  let cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

console.log(getCookie("username"));  // Outputs: JohnDoe

// deleting a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

While cookies can be read by both the client and the server and useful for user authentication and tracking, the size limit and potential security issues make cookies a less desirable means of persistent data for modern web applications. 