<ins id="stable"></ins>

## Usage
<div class="p-4 m-1 bg-dark-1">
	<button class="btn" onclick="snack(1)">Show Snackbar</button>	
</div>

```javascript
Material.Snackbar.show("Don't forget to star on &nbsp;<b><i>Github</i></b>");
```
## With Custom Action Button
<div class="p-4 m-1 bg-dark-1">
	<button class="btn" onclick="snack(2)">Show Snackbar</button>	
</div>

```javascript
Material.Snackbar.show("Don't forget to star on &nbsp;<b><i>Github</i></b>", "Sure I can");
```

## With Action 
<div class="p-4 m-1 bg-dark-1">
	<button class="btn" onclick="snack(3)">Show Snackbar</button>	
</div>

```javascript
 Material.Snackbar.show(
    "Account deleted", "what?", () => {
    Material.Snackbar.show("I am joking");
});
```