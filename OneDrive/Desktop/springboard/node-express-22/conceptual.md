### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for JSON Web Token. It's a way we tranfer information secure via HTTPS. JWT is use for authentication and authorization

- What is the signature portion of the JWT?  What does it do?
the signature portion is consit of the header(information about the algorithm) , the payload(data of the user info) and 
the signature is use to verifies that the token is authentic

- If a JWT is intercepted, can the attacker see what's inside the payload?
yes, the attacker can see everything in the payload

- How can you implement authentication with a JWT?  Describe how it works at a high level.
JSON Web Token (JWT) authentication works by exchanging a token between a user and a server to verify the user's identity:

- Compare and contrast unit, integration and end-to-end tests.

- What is a mock? What are some things you would mock?
 A mock test is used as practice for a future real exam. 

- What is continuous integration?
Continuous integration is the practice of integrating source code changes. We can use a tool like Version Control System(Git)  make changes to our codebase and

- What is an environment variable and what are they used for?
Environment variables are used to store app secrets and configuration data,
 which are retrieved by your running app when needed.

- What is TDD? What are some benefits and drawbacks?
TDD stand for Test-Driven Development and it make our code 
 more reliable, easier to maintain, and able to handle more users.


- What is the value of using JSONSchema for validation?
 JSONSchema is a valuable tool for validating JSON data
 because it provides a standard way to describe and define 
 the structure and content of JSON data. 


- What does `RETURNING` do in SQL? When would you use it?
The RETURNING in SQL is used to retrieve values from a data modification
 statement, such as INSERT , UPDATE , or DELETE after the statement has
  been executed.

- What are some differences between Web Sockets and HTTP?
HTTP with its request-response model, WebSockets are 
designed to enable realtime bidirectional communication between 
 the server and client. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I prefer Express. Express better when it comes to scalability and handling havy loads. With NPM packages Express give you more freedom.
