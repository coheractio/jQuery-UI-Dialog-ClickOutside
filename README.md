jQuery UI Dialog : close when clicking outside
=============================

This plugin enables to close a jQuery UI dialog when clicking outside anywhere outside the dialog or the element that opened it.
A simple demo is available as well.

## Demo
 
A demo is available here : http://www.coheractio.com/blog/jquery-ui-dialog-close-when-clicking-outside-demo

## How to install
In order to use it, simply add "jquery.ui.dialog-clickoutside.js" located in the "ui-clickoutside" folder to your page after any javascript required by the jQuery UI dialog.

Works with jQuery 1.9.1 and jQuery UI 1.10.3 (untested with other versions).
## How to use
Define the dialog configuration options as indicated below. And enjoy.
```javascript
$( "#dialog1" ).dialog({
  autoOpen: false,
  // Regular jQuery dialog options
  show: {
  effect: "fade",
  duration: 1000
  },
  hide: {
  effect: "fade",
  duration: 1000
  },
  // Add the 2 options below to use click outside feature
  clickOutside: true, // clicking outside the dialog will close it
  clickOutsideTrigger: "#opener1"  // Element (id or class) that triggers the dialog opening 
});
```
Any click outside the dialog or the element that triggers the dialog opening will close it.

[Coheractio - Agence Web Paris](http://www.coheractio.com)
