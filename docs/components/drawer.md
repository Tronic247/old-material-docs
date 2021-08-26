## Usage

<div class="p-4 m-1 background-light-grey">
  <div class="drawer" style="width: 40vh;margin: auto;border-right: none;">
    <h3>Mail</h3>
      <p>By Tronic247</p>
      <nav class="list small">
        <a href="#!" class="list-item active"><i class="material-icons">inbox</i>Item</a>
        <a href="#!" class="list-item"><i class="material-icons">star</i>Item</a>
        <a href="#!" class="list-item"><i class="material-icons">send</i>Item</a>
        <a href="#!" class="list-item"><i class="material-icons">drafts</i>Item</a>
        <hr>
        <a href="#!" class="list-item"><i class="material-icons">label</i>Label 1</a>
        <a href="#!" class="list-item"><i class="material-icons">label</i>Label 2</a>
        <a href="#!" class="list-item"><i class="material-icons">label</i>Label 3</a>
        <a href="#!" class="list-item"><i class="material-icons">label</i>Label 4</a>
        <a href="#!" class="list-item"><i class="material-icons">label</i>Label 5</a>
        <hr>
        <a href="#!" class="list-item"><i class="material-icons">feedback</i>Feedback</a>
        <a href="#!" class="list-item"><i class="material-icons">settings</i>Options</a>
      </nav>
    </div>
</div>

```xml
<div class="drawer">
  <h3>Mail</h3>
  <p>By Tronic247</p>
  <nav class="list small">
    <a href="#!" class="list-item active"><i class="material-icons">inbox</i>Item</a>
    <a href="#!" class="list-item"><i class="material-icons">star</i>Item</a>
    <a href="#!" class="list-item"><i class="material-icons">send</i>Item</a>
    <a href="#!" class="list-item"><i class="material-icons">drafts</i>Item</a>
    <hr>
    <a href="#!" class="list-item"><i class="material-icons">label</i>Label 1</a>
    <a href="#!" class="list-item"><i class="material-icons">label</i>Label 2</a>
    <a href="#!" class="list-item"><i class="material-icons">label</i>Label 3</a>
    <a href="#!" class="list-item"><i class="material-icons">label</i>Label 4</a>
    <a href="#!" class="list-item"><i class="material-icons">label</i>Label 5</a>
    <hr>
    <a href="#!" class="list-item"><i class="material-icons">feedback</i>Feedback</a>
    <a href="#!" class="list-item"><i class="material-icons">settings</i>Options</a>
  </nav>
</div>
```

## Modal Drawer

<div class="p-4 m-1 background-light-grey">
  <button data-trigger="drawer" data-drawer="#drawer">Toggle</button>
  <div class="drawer-overlay" id="drawer" style="z-index: 9999999;">
      <div class="drawer modal">
        <h3>Mail</h3>
        <p>By Tronic247</p>
        <nav class="list small">
          <a href="#!" class="list-item active"><i class="material-icons">inbox</i>Item</a>
          <a href="#!" class="list-item"><i class="material-icons">star</i>Item</a>
          <a href="#!" class="list-item"><i class="material-icons">send</i>Item</a>
          <a href="#!" class="list-item"><i class="material-icons">drafts</i>Item</a>
          <hr>
          <a href="#!" class="list-item"><i class="material-icons">label</i>Label 1</a>
          <a href="#!" class="list-item"><i class="material-icons">label</i>Label 2</a>
          <a href="#!" class="list-item"><i class="material-icons">label</i>Label 3</a>
          <a href="#!" class="list-item"><i class="material-icons">label</i>Label 4</a>
          <a href="#!" class="list-item" data-trigger="drawer" data-drawer="#drawer"><i class="material-icons">close</i>Close Me</a>
          <hr>
          <a href="#!" class="list-item"><i class="material-icons">feedback</i>Feedback</a>
          <a href="#!" class="list-item"><i class="material-icons">settings</i>Options</a>
        </nav>
      </div>
    </div>
</div>

```xml
<button data-trigger="drawer" data-drawer="#drawer">Toggle</button>
<div class="drawer-overlay" id="drawer">
  <div class="drawer modal">
    <h3>Mail</h3>
    <p>By Tronic247</p>
    <nav class="list small">
      <a href="#!" class="list-item active"><i class="material-icons">inbox</i>Item</a>
      <a href="#!" class="list-item"><i class="material-icons">star</i>Item</a>
      <a href="#!" class="list-item"><i class="material-icons">send</i>Item</a>
      <a href="#!" class="list-item"><i class="material-icons">drafts</i>Item</a>
      <hr>
      <a href="#!" class="list-item"><i class="material-icons">label</i>Label 1</a>
      <a href="#!" class="list-item"><i class="material-icons">label</i>Label 2</a>
      <a href="#!" class="list-item"><i class="material-icons">label</i>Label 3</a>
      <a href="#!" class="list-item"><i class="material-icons">label</i>Label 4</a>
      <a href="#!" class="list-item" data-trigger="drawer" data-drawer="#drawer"><i class="material-icons">close</i>Close Me</a>
      <hr>
      <a href="#!" class="list-item"><i class="material-icons">feedback</i>Feedback</a>
      <a href="#!" class="list-item"><i class="material-icons">settings</i>Options</a>
    </nav>
  </div>
</div>
```

Here are available attributes.
<div class="table-container">
  <table>
    <thead>
      <th>Attribute</th>
      <th>Value</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr>
        <td>data-trigger *</td>
        <td>drawer</td>
        <td>Tell the js that It's a trigger</td>
      </tr>
      <tr>
        <td>data-dialog *</td>
        <td><i>queryselector (#id , .class)</i></td>
        <td>The parent class or ID of the dialog</td>
      </tr>
      <tr>
        <td>data-action</td>
        <td>open , close , (blank)</td>
        <td>The action to be performed</td>
      </tr>
    </tbody>
  </table>
</div>