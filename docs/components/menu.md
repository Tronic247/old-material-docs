<ins id="experimental"></ins>

## Demo
<div class="p-4 m-1 bg-dark-1">
	<div class="menu list open" style="position: relative;transform: scale(1);width: 110px;opacity: 1;pointer-events: all;">
		<a href="#!" class="item ripple-e">Item 1</a>
		<a href="#!" class="item ripple-e">Item 2</a>
		<a href="#!" class="item ripple-e">Item 3</a>
	</div>
</div> 

```xml
<div class="menu open">
	<a href="#!" class="item ripple-e">Item 1</a>
	<a href="#!" class="item ripple-e">Item 2</a>
	<a href="#!" class="item ripple-e">Item 3</a>
</div>
```

## With Trigger
<div class="p-4 m-1 bg-dark-1">
	<button data-toggle-menu="as" class="btn">Open Menu</button>
	<div class="menu list" data-menu-id="as">
		<a href="#!" class="item ripple-e">Item 1</a>
		<a href="#!" class="item ripple-e">Item 2</a>
		<a href="#!" class="item ripple-e">Item 3</a>
	</div>
</div> 

```xml
<button data-toggle-menu="as" class="btn">Open Menu</button>
<div class="menu list" data-menu-id="as">
	<a href="#!" class="item ripple-e">Item 1</a>
	<a href="#!" class="item ripple-e">Item 2</a>
	<a href="#!" class="item ripple-e">Item 3</a>
</div>
```

## JavaScript API
```javascript
let menu = Material.menu;
let selector = document.querySelector('.menu');
// open menu
menu.open(selector);
// close menu
menu.close(selector);
// toggle menu
menu.toggle(selector);
```