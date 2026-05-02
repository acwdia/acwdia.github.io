---
title: Client-Side Storage
---

# Client-Side Storage

Persistent data is a fundamental part of modern web development through the use of client-side storage. Client-side storage allows web applications to store data on a user’s device (in the browser) rather than on a server. This can make your web app more efficient, allow it to function offline, and reduce the need for server requests. Several options are available for client-side storage, each with its strengths and limitations. these options include **cookies**, **web storage** (local storage and session storage), and **IndexedDB**. 

| Storage Type    | Pros                                                            | Cons                                                                 |
|-----------------|-----------------------------------------------------------------|----------------------------------------------------------------------|
| Cookies         | Server and client-side access, widely supported                 | Small size limit (4KB), sent with every HTTP request, security risks |
| Local Storage   | Larger storage capacity, persistent across sessions             | Only accessible client-side, can be cleared by the user              |
| Session Storage | Larger storage capacity, only available during a single session | Only accessible client-side, data is lost when the session ends      |
| IndexedDB       | Can store large and complex data, supports transactions         | More complex to work with, not as straightforward as web storage     |