<ins id="stable"></ins>

## Usage

<div class="p-4 m-1 bg-dark-1">
	<div class="alert primary" role="alert">
		Lorem ipsum, dolor sit, amet consectetur adipisicing elit. 
	</div>
</div>

```xml
<div class="alert primary" role="alert">
	Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
</div>
```

## Dividing into sections

<div class="p-4 m-1 bg-dark-1">
	<div class="alert primary" role="alert">
		<div>
			<i class="mdi display-h4 mdi-alert-circle-outline"></i>
		</div>
		<div class="alert-center" style="display:flex;align-items:center;">
			Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
		</div> 
		<div>
			<i class="mdi display-h4 mdi-alert-circle-outline"></i>
		</div>
	</div>
</div>

```xml
<div class="alert primary" role="alert">
	<div>
		<i class="mdi display-h4 mdi-alert-circle-outline"></i>
	</div>
	<div class="alert-center" style="display:flex;align-items:center;">
		Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
	</div>
	<div>
		<i class="mdi display-h4 mdi-alert-circle-outline"></i>
	</div>
</div>
```

You can also create alerts like this.

<div class="p-4 m-1 bg-dark-1">
	<div class="alert danger" role="alert">
		<div>
			<i class="mdi display-h4 mdi-alert-circle-outline"></i>
		</div>
		<div class="alert-center" style="display:flex;align-items:center;">
			Something will happen if you click this button.
		</div> 
		<script>
			window.a=0;
		</script>
		<div style="display:flex;align-items:center;">
			<button class="btn outlined small danger" onclick="if(a){window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');}window.a=1;this.textContent='Click me again';">Got It</button>
		</div>
	</div>
</div>

```xml
<div class="alert danger" role="alert">
	<div>
		<i class="mdi display-h4 mdi-alert-circle-outline"></i>
	</div>
	<div class="alert-center" style="display:flex;align-items:center;">
		Something will happen if you click this button.
	</div> 
	<div style="display:flex;align-items:center;">
		<button class="btn outlined small danger">Got It</button>
	</div>
</div>
```

## Colors
You can change colors too.
<div class="p-4 m-1 bg-dark-1">
	<div class="alert primary mb-4" role="alert">
		.primary 
	</div>
	<div class="alert secondary mb-4" role="alert">
		.secondary
	</div>
	<div class="alert success mb-4" role="alert">
		.success
	</div>
	<div class="alert danger mb-4" role="alert">
		.danger
	</div>
	<div class="alert warning mb-4" role="alert">
		.warning
	</div>
</div>

```xml
<div class="alert primary mb-4" role="alert">
	.primary 
</div>
<div class="alert secondary mb-4" role="alert">
	.secondary
</div>
<div class="alert success mb-4" role="alert">
	.success
</div>
<div class="alert danger mb-4" role="alert">
	.danger
</div>
<div class="alert warning mb-4" role="alert">
	.warning
</div>
```