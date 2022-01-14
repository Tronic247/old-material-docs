<ins id="stable"></ins>

## Dialog Markup
Hover to see an explanation.
<div class="p-4 m-1 bg-dark-1">
    <img src="https://res.cloudinary.com/tronic247/image/upload/v1626077024/Capture_s7w393.png" usemap="#image-map">
    <map name="image-map">
        <area coords="142,123,371,313" shape="rect" data-tooltip="Content">
        <area coords="138,316,386,360" shape="rect" data-tooltip="Footer">
        <area coords="144,78,376,116" shape="rect" data-tooltip="Header">
        <area coords="1,87,9,447,11,362,510,365,509,18,415,15,400,439,23,364,19,446,12,158,106,353,111,3,6,7,471,1,443,62,4,46" shape="poly" data-tooltip="Overlay">
    </map>
</div>

## Usage 
<div class="p-4 m-1 bg-dark-1">
    <div class="dialog" id="a">
        <div class="content">
            Content goes here
            <br>
            <button id=aa class=btn>Close</button>
        </div>
    </div>
    <button id=aaa class=btn>Open</button>
</div>

```xml
<div class="dialog" id="a">
    <div class="content">
        Content goes here
        <br>
        <button id=aa class=btn>Close</button>
    </div>
</div>
<button id=aaa class=btn>Open</button>
```

```javascript
let a = document.querySelector("#a");
let aaa = document.querySelector("#aaa");
let aa = document.querySelector("#aa");

aaa.addEventListener("click", () => {
    Material.Dialog.open(a);
});

aa.addEventListener("click", () => {
    Material.Dialog.close(a);
});
```

## Bottom sheet style 
Add the class `bottom-sheet` to the dialog to make it a bottom sheet.

## Javascript API
```javascript
let Dialog = Material.Dialog;
// Open a dialog
Dialog.open(element);
// Close a dialog
Dialog.close(element);
// Toggle a dialog
Dialog.toggle(element);
```