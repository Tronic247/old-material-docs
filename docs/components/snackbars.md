## Usage
<div class="p-4 m-1 background-light-grey">
	<button id="demosnackbarbtn" onclick="snack(1)">Show Snackbar</button>	
</div>

```javascript
Material.Snackbar({message: "Don't forget to star on &nbsp;<b><i>Github</i></b>"});
```
## With Action Button
<div class="p-4 m-1 background-light-grey">
	<button id="demosnackbarbtn" onclick="snack(2)">Show Snackbar</button>	
</div>

```javascript
Material.Snackbar({message: "Your Account was created" , actiontext:"Got it"});
```

## With Action 
<div class="p-4 m-1 background-light-grey">
	<button id="demosnackbarbtn" onclick="snack(3)">Show Snackbar</button>	
</div>

```javascript
Material.Snackbar(
    {
        message: "Your Github Account was deleted",
        actiontext: "What ?",
    },
    function () {
        Material.Snackbar({ message: "I was Joking :)", actiontext: "Enough" });
    }
);
```