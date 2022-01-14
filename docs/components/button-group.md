<ins id="stable"></ins>

## Usage

Create a div with the class `btn-group` added to it. And inside the div add the class `btn` to it's children.

<div class="p-4 m-1 bg-dark-1">
	<div class="btn-group">
		<button class="btn">Button</button>
		<button class="btn">Button</button>
		<button class="btn">Button</button>
	</div>
</div>

```xml
<div class="btn-group">
	<button class="btn">Button</button>
	<button class="btn">Button</button>
	<button class="btn">Button</button>
</div>
```

## Interactive Examples
You can also use the button group to create interactive elements.

### Button group with dropdown
<div class="p-4 m-1 bg-dark-1">
	<div class="btn-group" style="width:max-content">
		<button class="btn primary unelevated">Button</button>
		<button class="btn primary unelevated" data-toggle-menu="a">
		 <i class="mdi mdi-arrow-down-drop-circle display-h6"></i>
		</button>
	</div>
	<div class="menu list" data-menu-id="a">
		<a class="item" href="javascript:void">Item</a>
		<a class="item" href="javascript:void">Item</a>
		<a class="item" href="javascript:void">Item</a>
		<a class="item" href="javascript:void">Item</a>
	</div>
</div>

```xml
<div class="btn-group">
	<button class="btn">Button</button>
	<button class="btn">Button</button>
	<button class="btn">Button</button>
</div>
```
