## Dialog Markup
Hover to see an explanation.
<div class="p-4 background-light-grey">
    <img src="https://res.cloudinary.com/tronic247/image/upload/v1626077024/Capture_s7w393.png" usemap="#image-map">
    <map name="image-map">
        <area coords="142,123,371,313" shape="rect" data-tooltip="Content">
        <area coords="138,316,386,360" shape="rect" data-tooltip="Footer">
        <area coords="144,78,376,116" shape="rect" data-tooltip="Header">
        <area coords="1,87,9,447,11,362,510,365,509,18,415,15,400,439,23,364,19,446,12,158,106,353,111,3,6,7,471,1,443,62,4,46" shape="poly" data-tooltip="Overlay">
    </map>
</div>


```xml
<div class="dialog-overlay" id="demodialog">
    <div class="dialog">
        <div class="dialog-header">
            <h3>Select Account</h3>
        </div>
        <div class="dialog-content">
            <!--- Content !-->
            <div class="list">
                <a href="#!" class="list-item">
                    <span class="material-icons">person</span>Account
                    <span class="after">
                        <label class="radio">
                            <input name="accounddemo" type="radio" />
                            <span></span>
                        </label>
                    </span>
                </a>
                <a href="#!" class="list-item">
                    <span class="material-icons">person</span>Account
                    <span class="after">
                        <label class="radio">
                            <input name="accounddemo" type="radio" />
                            <span></span>
                        </label>
                    </span>
                </a>
                <a href="#!" class="list-item">
                    <span class="material-icons">person</span>Account
                    <span class="after">
                        <label class="radio">
                            <input type="radio" name="accounddemo" checked="" />
                            <span></span>
                        </label>
                    </span>
                </a>
            </div>
            <!--- Content !-->
        </div>
        <div class="dialog-footer">
            <!--- Footer !-->
            <button class="text">Select</button>
            <button class="text">Cancel</button>
        </div>
    </div>
</div>
```

## Trigger

<div class="p-4 background-light-grey">
    <button data-trigger="dialog" data-dialog="#demo-dialog-trigger" class="text">Open</button>
        <div class="dialog-overlay" id="demo-dialog-trigger">
            <div class="dialog">
                <div class="dialog-header">
                    <h3>Demo content</h3>
                </div>
                <div class="dialog-content">
                 <p>demo content</p>
             </div>
             <div class="dialog-footer">
                <button class="text" data-trigger="dialog" data-dialog="#demo-dialog-trigger" data-action="close">Dismiss</button>
            </div>
        </div>
    </div>
</div>

```xml
<button data-trigger="dialog" data-dialog="#demo-dialog-trigger">Open</button>
<div class="dialog-overlay" id="demo-dialog-trigger">
    <div class="dialog">
        <div class="dialog-header">
            <h3>Demo content</h3>
        </div>
        <div class="dialog-content">
            <p>demo content</p>
        </div>
        <div class="dialog-footer">
            <button class="text" data-trigger="dialog" data-dialog="#demo-dialog-trigger" data-action="close">Dismiss</button>
        </div>
    </div>
</div>
```
Here are avaialable attributes.
<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Attribute</th>
                <th>Value(s)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Initialize trigger *</td>
                <td>data-trigger</td>
                <td>dialog</td>
            </tr>
            <tr>
                <td>DOM selector of the dialog *</td>
                <td>data-dialog</td>
                <td>#id , .class , element</td>
            </tr>
            <tr>
                <td>Action</td>
                <td>data-action</td>
                <td>open , close , toggle</td>
            </tr>
        </tbody>
    </table>
</div>

## Bottom sheet style
<div class="p-4 background-light-grey">
<button class="text" data-trigger="dialog" data-dialog="#demodialogsheet">Open</button>
   <div class="dialog-overlay" id="demodialogsheet">
    <div class="dialog bottom-sheet">
        <div class="dialog-header">
            <h3>Accept Cookies</h3>
        </div>
        <div class="dialog-content">
            <p class="text-muted">Cookies are yum yum dummy placeholder text for you and everyone nice to see the lorem</p>
        </div>
        <div class="dialog-footer">
            <button class="text" onclick="jQuery('#demodialogsheet').toggleClass('open')">Accept</button>
        </div>
    </div>
</div>
</div>

```xml
<div class="dialog-overlay" id="demodialogsheet">
    <div class="dialog bottom-sheet">
        <div class="dialog-header">
            <h3>Accept Cookies</h3>
        </div>
        <div class="dialog-content">
            <p class="text-muted">Cookies are yum yum dummy placeholder text for you and everyone nice to see the lorem</p>
        </div>
        <div class="dialog-footer">
            <button class="text" onclick="jQuery('#demodialogsheet').toggleClass('open')">Accept</button>
        </div>
    </div>
</div>
```
## Full Screen dialog
<div class="p-4 background-light-grey">
    <button class="text" data-trigger="dialog" data-dialog="#demodialogfs">Open</button>
    <div class="dialog-overlay" id="demodialogfs">
            <div class="dialog fullscreen">
                <div class="dialog-header">
                    <div class="dialog-left">
                        <button class="fab small unelevated" onclick="jQuery('#demodialogfs').toggleClass('open')"><span class="material-icons">close</span></button>
                        <h3 style="margin-left: 10px;">Sound</h3>
                    </div>
                    <div class="dialog-right">
                        <button class="unelevated" onclick="jQuery('#demodialogfs').toggleClass('open')">Close</button>
                    </div>
                </div>
                <div class="dialog-content">
                    <p class="text-muted">Cookies are yum yum dummy placeholder text for you and everyone nice to see the lorem</p>
                </div>
                <div class="dialog-footer">
                    <button class="text" onclick="jQuery('#demodialogfs').toggleClass('open')">Dismiss</button>
                    <button class="text" onclick="jQuery('#demodialogfs').toggleClass('open')">Okay</button>
                </div>
            </div>
        </div>
</div>

```xml
<div class="dialog-overlay" id="demodialogfs">
    <div class="dialog fullscreen">
        <div class="dialog-header">
            <div class="dialog-left">
                <button class="fab small unelevated" onclick="jQuery('#demodialogfs').toggleClass('open')"><span class="material-icons">close</span></button>
                <h3 style="margin-left: 10px;">Sound</h3>
            </div>
            <div class="dialog-right">
                <button class="unelevated" onclick="jQuery('#demodialogfs').toggleClass('open')">Close</button>
            </div>
        </div>
        <div class="dialog-content">
            <p class="text-muted">Cookies are yum yum dummy placeholder text for you and everyone nice to see the lorem</p>
        </div>
        <div class="dialog-footer">
            <button class="text" onclick="jQuery('#demodialogfs').toggleClass('open')">Dismiss</button>
            <button class="text" onclick="jQuery('#demodialogfs').toggleClass('open')">Okay</button>
        </div>
    </div>
</div>
```
## JS (jQuery) API
Add the class `open` to the dialog when you need to open it.
Remove the class `open` from the dialog when you need to close it.

```javascript
//Open
$(".dialog-overlay#dialog").addClass('open');
//Close
$(".dialog-overlay#dialog").removeClass('open');
//Toggle
$(".dialog-overlay#dialog").toggleClass('open');
```
