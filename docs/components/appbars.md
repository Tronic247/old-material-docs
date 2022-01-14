<ins id="stable"></ins>

## Usage

<div class="p-4 m-1 bg-dark-1">
	<div class="appbar elevation-1">
		<div class="left">
			<span class="title">Appbar</span>
		</div>
	</div>	
</div>

```xml
<div class="appbar">
	<div class="left">
		<span class="title">Appbar</span>
	</div>
</div>
```

## Items placement

<div class="p-4 m-1 bg-dark-1">
	<div class="appbar elevation-1">
		<div class="left">
			<span class="title">Left</span>
		</div>
        <div class="middle">
			<span class="title">Middle</span>
		</div>
        <div class="right">
			<span class="title">Right</span>
		</div>
	</div>	
</div>

```xml
<div class="appbar">
	<div class="left">
		<span class="title">Left</span>
	</div>
    <div class="middle">
		<span class="title">Middle</span>
	</div>
    <div class="right">
		<span class="title">Right</span>
	</div>
</div>
```

## Using Icons and Buttons

<div class="p-4 m-1 bg-dark-1">
	<div class="appbar elevation-1">
		<div class="left">
			<span class="title">Title</span>
		</div>
        <div class="right">
            <a class="icon" href="#!">
                <i class="mdi mdi-thumb-up"></i>
            </a>
			<a class="btn text" href="#!">
                Button
            </a>
		</div>
	</div>	
</div>

```xml
<div class="appbar">
	<div class="left">
		<span class="title">Title</span>
	</div>
    <div class="right">
        <a class="icon" href="#!">
            <i class="mdi mdi-thumb-up"></i>
        </a>
		<a class="btn text" href="#!">
            Button
        </a>
	</div>
</div>
```

## Add a color

<div class="p-4 m-1 bg-dark-1">
	<div class="appbar primary">
		<div class="left">
			<span class="title">Appbar With color</span>
		</div>
        <div class="right">
            <a class="btn text" href="#!">
                Button
            </a>
        </div>
	</div>	
</div>

```xml
<div class="appbar primary">
	<div class="left">
		<span class="title">Appbar With color</span>
	</div>
    <div class="right">
        <a class="btn text" href="#!">
            Button
        </a>
    </div>
</div>
```

## With an input

<div class="p-4 m-1 bg-dark-1">
    <div class="appbar elevation-1">
        <div class="left">
            <span class="title">Appbar With input</span>
        </div>
        <div class="right">
            <input type="text" class="appbar-input" placeholder="Search">
            <a class="btn text" href="#!">
                Button
            </a>
        </div>
    </div>
</div>

```xml
<div class="appbar elevation-1">
    <div class="left">
        <span class="title">Appbar With input</span>
    </div>
    <div class="right">
        <input type="text" class="appbar-input" placeholder="Search">
        <a class="btn text" href="#!">
            Button
        </a>
    </div>
</div>
```

## Elevating the Appbar
Simply add the class `elevating` to the `appbar` element to make it elevate when scrolling.