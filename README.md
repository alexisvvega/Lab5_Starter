# Lab 5 - Starter

## Partners: Alexis Vega and Eric Song 


[Link to the expose](https://alexisvvega.github.io/Lab5_Starter/expose.html)  

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   > No, we would not use a unit test to test the "message feature." Unit tests are typically used for testing the individual parts of our code in these small, encapsulated units. This is good for debugging on a small scale. On the other hand, the "message feature" of a messaging application is definitely not a small scale part of the application. There would be a lot of interactions within the app (on the top of our heads, we can think of message storing, messaging sending, message receiving, etc.). There are too many moving parts to effectively use unit testing and changing other app features would probably impact any unit tests that we would write.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
   > Yes, we would use unit tests to test the "max message length" feature. This would be an appropriate feature to have unit tests on because it is a small scale feature with very few moving parts. We just want to make sure a very specific function is behaving as expected and changing other parts of the app shouldn't impact how we check to see if we handle the cases where our messages are too long. 

