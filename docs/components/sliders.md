<ins id="experimental"></ins>

<div class="p-4 m-1 bg-dark-1">
  <div class="aa"></div>
</div>

```xml
<input type="text" class="js-range-slider" name="my_range" value="" />
```

```javascript
let range = Material.Forms.initRangeSlider(document.querySelector(".aa"), {
  start: 20,
  range: {
    min: 0,
    max: 100,
  },
});
alert(range.noUiSlider.get());
```
