## Usage
Add class `ripple-e` to the element you want to add the ripple effect.
<div class="alert alert-primary" role="alert">
    <p class="alert-message">Note that you don't need to add the class to `.btn` or `button` elements.</p>
</div>
<div class="p-4 m-1 background-light-grey">
	<div class="background-light-grey ripple-e dark-ripple elevation-1" style="height: 200px;width: 200px;"></div>	
</div> 

```xml
<div class="background-light-grey ripple-e dark-ripple" style="height: 200px;width: 200px;"></div>
```

## Ripple colors
<div class="p-4 row m-1 background-light-grey">
	<div class="col m-1 rounded background-primary ripple-e light-ripple elevation-1" style="height: 200px;width: 200px;">Light</div>
	<div class="col m-1 rounded background-light-grey ripple-e secondary-ripple elevation-1" style="height: 200px;width: 200px;">Secondary</div>
	<div class="col m-1 rounded background-light-grey ripple-e success-ripple elevation-1" style="height: 200px;width: 200px;">Success</div>
	<div class="col m-1 rounded background-light-grey ripple-e danger-ripple elevation-1" style="height: 200px;width: 200px;">Danger</div>
	<div class="col m-1 rounded background-light-grey ripple-e dark-ripple elevation-1" style="height: 200px;width: 200px;">Dark</div>
</div>   

```xml
<div class="background-primary ripple-e light-ripple" style="height: 200px;width: 200px;">Light</div>
<div class="background-light-grey ripple-e secondary-ripple" style="height: 200px;width: 200px;">Secondary</div>
<div class="background-light-grey ripple-e success-ripple" style="height: 200px;width: 200px;">Success</div>
<div class="background-light-grey ripple-e danger-ripple" style="height: 200px;width: 200px;">Danger</div>
<div class="background-light-grey ripple-e dark-ripple" style="height: 200px;width: 200px;">Dark</div>
```

## Center ripple
Add the class `center-ripple`.
<div class="p-4 m-1 background-light-grey">
	<div class="background-light-grey ripple-e dark-ripple center-ripple elevation-1" style="height: 200px;width: 200px;"></div>	
</div>   

```xml
<div class="ripple-e dark-ripple center-ripple" style="height: 200px;width: 200px;"></div>
```

## Custom ripple color
<div class="p-4 m-1 background-light-grey">
	<div class="ripple-e elevation-1" style="height: 200px;width: 200px;--ripple-color: #e4e0124a;"></div>	
</div>   

```xml
<div class="ripple-e" style="height: 200px;width: 200px;--ripple-color: #e4e0124a;"></div>	
```

