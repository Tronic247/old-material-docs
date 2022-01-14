<ins id="experimental"></ins>

## Usage

<div class="p-4 m-1 bg-dark-1">
  <div class="drawer" style="width: 40vh;margin: auto;border-right: none;background:#fff">
    <div class="top ps-3">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet co.</p>
    </div>
    <div class="content">
      <div class="list">
        <a href="#!" class="item">Item 1</a>
        <a href="#!" class="item active">Item 2</a>
        <a href="#!" class="item">Item 3</a>
        <a href="#!" class="item">Item 4</a>
        <a href="#!" class="item">Item 5</a>
        <a href="#!" class="item">Item 6</a>
        <a href="#!" class="item">Item 7</a>
      </div>
    </div>
  </div>
</div>

```xml
<div class="drawer">
  <div class="top ps-3">
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit amet co.</p>
  </div>
  <div class="content">
    <div class="list">
      <a href="#!" class="item">Item 1</a>
      <a href="#!" class="item active">Item 2</a>
      <a href="#!" class="item">Item 3</a>
      <a href="#!" class="item">Item 4</a>
      <a href="#!" class="item">Item 5</a>
      <a href="#!" class="item">Item 6</a>
      <a href="#!" class="item">Item 7</a>
    </div>
  </div>
</div>
```

## Modal Drawer

<div class="p-4 m-1 bg-dark-1">
  <button id="aaa" class="btn">Toggle</button>
   <div class="dialog" id="a">
    <div class="content p-0 drawer" style="height:max-content">
        <div class="top ps-3">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet co.</p>
        </div>
        <div class="content">
          <div class="list">
            <a href="#!" class="item">Item 1</a>
            <a href="#!" class="item active">Item 2</a>
            <a href="#!" class="item">Item 3</a>
            <a href="#!" class="item">Item 4</a>
            <a href="#!" class="item">Item 5</a>
            <a href="#!" class="item">Item 6</a>
            <a href="#!" class="item" id="aa">Close</a>
          </div>
        </div>
      </div>
  </div>
</div>

```xml
<button id="aaa" class="btn">Toggle</button>
<div class="dialog" id="a">
  <div class="content p-0 drawer" style="height:max-content">
    <div class="top ps-3">
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet co.</p>
    </div>
    <div class="content">
      <div class="list">
        <a href="#!" class="item">Item 1</a>
        <a href="#!" class="item active">Item 2</a>
        <a href="#!" class="item">Item 3</a>
        <a href="#!" class="item">Item 4</a>
        <a href="#!" class="item">Item 5</a>
        <a href="#!" class="item">Item 6</a>
        <a href="#!" class="item" id="aa">Close</a>
      </div>
    </div>
  </div>
</div>
```

```
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

<div class="alert primary">
  <p>The javaScript api is the same as the <b><a href="/components/dialogs">Dialog API</a></b></p>
</div>

<div class="p-2"></div>