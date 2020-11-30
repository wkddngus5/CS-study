# Javscript study

1. Diffrence between 'Document' and 'document'
   - Document is the interface which returns document object. It is implemented by web browser.
   - document is a DOM object. It is an entry point to the web page's content.

2. Diffrence between 'HTMLCollection' and 'NodeList'
   - HTMLCollection is a collection of HTML elements. It's items can be accessed by their name, id, or index number. ({element}.children)
   - NodeList is a collection of document nodes. It's items can only be accessed by index. ({element}.childNodes)
   - HTML element is an spcific type of document node.

3. Diffrence between 'DOM Tree' and 'Render tree'
   - DOM tree includes HTML elments.
   - Render tree contains DOM and CSSOM trees. It is the information about actually render to page.

4. Diffrence between 'EventHandler' and 'EventListener'
	- EventHandler is a block of code that runs when the event fires. It sometimes called 'EventListener'.
  	```
	  button.onclick = function() {...}
	  button.addEventListener('click', function() {...})
	  ```
	- EventListener can be overwrited. And bubbling and capturing are triggered. binding is also easy. But IE 6~7 are not support.

5. Properly size images
	- Fit the image's size to rendered image's size. If not, It wasts bytes and slow down page load time.
	- Serve responsive images.
	- [sharp](https://www.npmjs.com/package/sharp) and [ImageMagick](https://www.imagemagick.org/script/index.php) 
	- Use Image CDNs

6. Functional Programming vs Object Oriented Programing
	- Functional Programming(FP)
		- FP emphasizes on evaluation of functions
		- FP uses immutable data
		- FP does follow declarative programming model
		- Parallel programming supported by FP
		- In FP, the statements can be executed in any order
		- In FP, recursion is used for iterative data
		- The basic elements of FP are variables and Functions
		- The FP is used only when there are few things with more operations

	- Object Oriented Programming(OOP)
		- OOP pbased on concept of objects
		- OOP uses the mutable data
		- OOP does follow imperative programming model
		- OOP does not support parallel programming
		- In OOPs, the statements should be executed in particular order
		- In OOPs, loops are used for iterative data
		- The basic elements of OOP are objects and methods
		- OOP is used when there are many things with few operations

7. Promise
	- Promise is a proxy(define new actions in basic methods) for a value not necessary known when the promise is created.
	- It supports to use asynchronous methods like synchronous's.
	- There are 3 states.
		- fist, initial state is the 'pending'
		- If the promise complete succesfully, it gonna be 'fulfilled' state in 'then' method.
		- On the other hand, if the promise fails, the state will be 'rejected' in 'catch'.
	- Promise.all: It returns a Promise that all itearable Promise's process are done. If a promises is rejected, It also reject the same reason.
	- Promise.race: It returns a Promise that the fastest promise in iterable promises. It follows the fastest promise's resolve or reject.

8. Generator
	- Javascript engine	adopts asynchronous for performance.
	- async/await are created based on Generator.
	- To use iterable in object, you need to add \[Symbol.iterator\]() method.
	- You can declare like 'function* foo'. The iterator suspend at each 'yield' statements. You can resume and get each values by using 'next()' method.
	```
		function* foo() {
			yield 1;
			yield 2;
			yield 3;
		}
	```
	- Generator function can use memory efficiently by using Lazy-Evaluation.

  9. Prototype-based Object oriented Language
  - All of JS objects are linked to parent object. They can use parent's property and method.
  - 'Prototype' object is used to give to each objects created by constructor function.
  - All JS objects have '[[prototype]]' internal slot. It's used to implement extending. The [[prototype]] object's property can be acceed by 'get', but not in 'set'.
  - JS functions also have 'prototype' property. It's linked to parent object's prototype.
  - Prototype chain: If there's no property or method in some object, it follow [[prototype]] and find parent's property or method.

  10. 'Scope' and 'this'
  - Scope is a rule to find reference target identifier
  - Global scope can refer anywhere.
  - Local scope(Functional-level scope) can refer just function self or children functions.
  - Lexical scope: upper scope is determined by the declaration. 
  - Immediate function: to remove global variables
  - JS 'this' is changed according to the method calling the function.
  - If some function is a property of object, it is called as a method. The 'this' in method binds to owner object.
  - In constructor, new empty object will be created.
  - The other cases, this will be window(global) and return it. We can set property and methods to there.

  11. dynamic typed language and loosely typed language
  - JS variables are set types when they are allocated. So we can allocate multiple types to one value.

  12. localStorage vs sessionStorage
   - SessionStorage consist data only same tab
   - Both web storage objects connected to domain, protocol 
   - Unlike cookies, they don't use the HTTP header so they can save bigger data.

  13. call, bind, apply, arrow function
    - Set the 'this' to first parameter.
    - Arrow function doesn't bind 'this'. 



	


> References
> 
> - https://stackoverflow.com/questions/23052135/what-is-the-difference-between-document-and-document/23052164
> - https://www.w3schools.com/js/js_htmldom_nodelist.asp
>
> - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
>
> - https://hanjungv.github.io/2018-01-21-1_JS_onclick_vs_addEventListener/
