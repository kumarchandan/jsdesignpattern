jsdesignpattern
===============

=======================================
Edited by - Chandan Kumar
=======================================

Javascript design pattern : How to implement &amp; use

We'll cover following patterns:

1. Constructor Pattern
2. Module Pattern
3. Reveal Module Pattern
4. Singleton Pattern
5. Observer Pattern
6. Mediator Pattern
7. Prototype Pattern
8. Facade Pattern
9. Factory Pattern
10. Command Pattern
11. Mixin Pattern
12. Decorator Pattern
13. FlyWeight Pattern


The Constructor Pattern

In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once memory has been allocated for it. In JavaScript, as almost everything is an object, we're most often interested in object constructors.

Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

Object Creation

The three common ways to create new objects in JavaScript are as follows:

// Each of the following options will create a new empty object:
 var newObject = {};
 
// or
var newObject = Object.create( Object.prototype );
 
// or
var newObject = new Object();

