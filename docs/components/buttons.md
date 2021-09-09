<div class="p-4 m-1 background-light-grey">
	<button class="demobtn primary">Primary</button>
	<button class="demobtn secondary">Secondary</button>
	<button class="demobtn success">Success</button>
	<button class="demobtn danger">Danger</button>
	<button class="demobtn dark">Dark</button>
	<button class="demobtn warning">Warning</button>
	<br><br>
	<button class="demobtn outlined primary">Outlined - Primary</button>
	<button class="demobtn outlined secondary">Outlined - Secondary</button>
	<button class="demobtn outlined success">Outlined - Success</button>
	<button class="demobtn outlined danger">Outlined - Danger</button>
	<button class="demobtn outlined dark">Outlined - Dark</button>
	<button class="demobtn outlined warning">Outlined - Warning</button>
	<br><br>
	<button class="demobtn text primary">Text - Primary</button>
	<button class="demobtn text secondary">Text - Secondary</button>
	<button class="demobtn text success">Text - Success</button>
	<button class="demobtn text danger">Text - Danger</button>
	<button class="demobtn text dark">Text - Dark</button>
	<button class="demobtn text warning">Text - Warning</button>
	<br><br>
	<button class="demobtn unelevated primary">Unelevated - Primary</button>
	<button class="demobtn unelevated secondary">Unelevated - Secondary</button>
	<button class="demobtn unelevated success">Unelevated - Success</button>
	<button class="demobtn unelevated danger">Unelevated - Danger</button>
	<button class="demobtn unelevated dark">Unelevated - Dark</button>
	<button class="demobtn unelevated warning">Unelevated - Warning</button>
</div>

```xml
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="success">Success</button>
<button class="danger">Danger</button>
<button class="dark">Dark</button>

<button class="outlined primary">Outlined - Primary</button>
<button class="outlined secondary">Outlined - Secondary</button>
<button class="outlined success">Outlined - Success</button>
<button class="outlined danger">Outlined - Danger</button>
<button class="outlined dark">Outlined - Dark</button>

<button class="text primary">Text - Primary</button>
<button class="text secondary">Text - Secondary</button>
<button class="text success">Text - Success</button>
<button class="text danger">Text - Danger</button>
<button class="text dark">Text - Dark</button>

<button class="unelevated primary">Unelevated - Primary</button>
<button class="unelevated secondary">Unelevated - Secondary</button>
<button class="unelevated success">Unelevated - Success</button>
<button class="unelevated danger">Unelevated - Danger</button>
<button class="unelevated dark">Unelevated - Dark</button>
```

## Normal button
Add the class `.btn` to the element.
<div class="p-4 m-1 background-light-grey">
	<button class="btn">Click Me</button>
</div>

```xml
<button class="btn">Click Me</button>
```

## Unelevated button
Add the class `.unelevated` to the element.
<div class="p-4 m-1 background-light-grey">
	<button class="btn unelevated">Click Me</button>
</div>

```xml
<button class="btn unelevated">Click Me</button>
```

## Text button
Add the class `.text` to the element.
<div class="p-4 m-1 background-light-grey">
	<button class="btn text">Click Me</button>
</div>

```xml
<button class="btn text">Click Me</button>
```

## Outlined button
Add the class `.outlined` to the element.
<div class="p-4 m-1 background-light-grey">
	<button class="btn outlined">Click Me</button>
</div>

```xml
<button class="btn outlined">Click Me</button>
```

## Link button
Add the class `.btn` to the `a` element.
<div class="p-4 m-1 background-light-grey">
	<a class="btn" href="https://google.com" onclick="return false;">Click Me</a>
</div>

```xml
<a class="btn" href="https://google.com">Click Me</a>
```

## Disabled button
Add the class `.disabled` to the element.
<div class="p-4 m-1 background-light-grey">
	<button class="btn disabled">Click Me</button>
</div>

```xml
<button class="btn disabled">Click Me</button>
```

## Icons
<div class="p-4 m-1 background-light-grey">
	<button class="btn"><i class="material-icons">favorite</i>Click Me</button>
	<button class="btn">Click Me&nbsp;&nbsp;<i class="material-icons">favorite</i></button>
</div>

```xml
<button class="btn"><i class="material-icons">favorite</i>Click Me</button>
<button class="btn">Click Me&nbsp;&nbsp;<i class="material-icons">favorite</i></button>
```

## Shaped button
Add the class `shaped` to the button.
<div class="p-4 m-1 background-light-grey">
	<button class="btn shaped">Click Me</button>
</div>

```xml
<button class="btn shaped">Click Me</button>
```

## Square button
Add the class `square` to the button.
<div class="p-4 m-1 background-light-grey">
	<button class="btn square">Click Me</button>
</div>

```xml
<button class="btn square">Click Me</button>
```

## Button colors

<div class="table-container">
<table>
	<thead>
	<tr>
	<th>Color</th>
	<th>class</th>
	<th>Preview</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Primary</td>
		<td>--</td>
		<td><button>Button</button>  </td>
	</tr>
	<tr>
		<td>Secondary</td>
		<td>.secondary</td>
		<td><button class="secondary">Button</button></td>
	</tr>
	<tr>
		<td>Success</td>
		<td>.success</td>
		<td><button class="success">Button</button></td>
	</tr>
	<tr>
		<td>Danger</td>
		<td>.danger</td>
		<td><button class="danger">Button</button></td>
	</tr>
	<tr>
		<td>Dark</td>
		<td>.dark</td>
		<td><button class="dark">Button</button></td>
	</tr>
	<tr>
		<td>Warning</td>
		<td>.warning</td>
		<td><button class="warning">Button</button></td>
	</tr>
</tbody>
</table>
</div>


## Button sizes

<div class="table-container">
<table>
	<thead>
	<tr>
	<th>Size</th>
	<th>class</th>
	<th>Preview</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Normal</td>
		<td>--</td>
		<td><button>Button</button>  </td>
	</tr>
	<tr>
		<td>Large</td>
		<td>.large</td>
		<td><button class="large">Button</button></td>
	</tr>
	<tr>
		<td>Small</td>
		<td>.small</td>
		<td><button class="small">Button</button></td>
	</tr>
</tbody>
</table>
</div>
