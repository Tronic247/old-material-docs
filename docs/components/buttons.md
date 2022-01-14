<ins id="stable"></ins>

## Types
<div class="p-4 m-1 bg-dark-1">
	<button class="btn primary">Normal</button>
	<button class="btn primary unelevated">Unelevated</button>
	<button class="btn outlined primary">Outlined</button>
	<button class="btn text primary">Text</button>
</div>

```xml
<button class="btn primary">Normal</button>
<button class="btn primary unelevated">Unelevated</button>
<button class="btn outlined primary">Outlined</button>
<button class="btn text primary">Text</button>
```

## Colors

<div class="p-4 m-1 bg-dark-1">
	<button class="btn">Normal</button>
	<button class="btn primary">Primary</button>
	<button class="btn secondary">Secondary</button>
	<button class="btn danger">Danger</button>
	<button class="btn warning">Warning</button>
	<button class="btn success">Success</button>
</div>

```xml
<button class="btn primary">Normal</button>
<button class="btn primary unelevated">Unelevated</button>
<button class="btn outlined primary">Outlined</button>
<button class="btn text primary">Text</button>
```

## Sizes

<div class="p-4 m-1 bg-dark-1">
	<button class="btn small">Small</button>
	<button class="btn">Normal</button>
	<button class="btn large">Large</button>
</div>

```xml
<button class="btn small">Small</button>
<button class="btn">Normal</button>
<button class="btn large">Large</button>
```

## Using Icons

<div class="p-4 m-1 bg-dark-1">
	<button class="btn primary">
		<i class="mdi me-2 mdi-thumb-up"></i>
		Like	
	</button>
	<button class="btn primary">
		Like	
		<i class="mdi ms-2 mdi-thumb-up"></i>
	</button>
</div>

```xml
<button class="btn primary">
	<i class="mdi me-2 mdi-thumb-up"></i>
	Like
</button>
<button class="btn primary">
	Like
	<i class="mdi ms-2 mdi-thumb-up"></i>
</button>
```

## Disabled

<div class="p-4 m-1 bg-dark-1">
	<button class="btn disabled" disabled>Disabled</button>
	<button class="btn outlined disabled" disabled>Disabled</button>
	<button class="btn text disabled" disabled>Disabled</button>
</div>
Add the `disabled` attribute and the `disabled` class to the button to disable it.
```
<button class="btn disabled" disabled>Disabled</button>
<button class="btn outlined disabled" disabled>Disabled</button>
<button class="btn text disabled" disabled>Disabled</button>
```

## Icon Buttons

<div class="p-4 m-1 bg-dark-1">
	<button class="icon">
		<i class="mdi mdi-thumb-up"></i>
	</button>
	<button class="icon">
		<i class="mdi mdi-thumb-down"></i>
	</button>
</div>

```xml
<button class="icon">
	<i class="mdi mdi-thumb-up"></i>
</button>
<button class="icon">
	<i class="mdi mdi-thumb-down"></i>
</button>
```

## Interactive Examples

You can use the button component to create stuff like this.

<div class="p-4 m-1 bg-dark-1">
	<button class="btn primary outlined">
	Loading Stuff
		<div style="transform:scale(0.3);height: 15px;width: 27px;margin-top: -15px;">
        	<span class="progress circle" style="background:transparent;"></span>
        </div>
	</button>
</div>

```xml
<button class="btn primary outlined">
	Loading Stuff
	<div style="transform:scale(0.3);height: 15px;width: 27pxmargin-top: -15px;">
    	<span class="progress circle" style="background:transparent;"><span>
    </div>
</button>
```

<div class="p-4 m-1 bg-dark-1">
	<button class="btn outlined primary" style="outline-offset:-6px !important">
		Button
	</button>
</div>

```xml
<button class="btn outlined primary" style="outline-offset:-6px !important">
	Button
</button>
```