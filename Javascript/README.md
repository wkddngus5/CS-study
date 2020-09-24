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




> References
> 
> - https://stackoverflow.com/questions/23052135/what-is-the-difference-between-document-and-document/23052164
> - https://www.w3schools.com/js/js_htmldom_nodelist.asp
>
> - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
>
> - https://hanjungv.github.io/2018-01-21-1_JS_onclick_vs_addEventListener/
