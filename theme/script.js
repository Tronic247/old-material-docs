/**
 * Replace content of the page
 */
let badges = {
    stable: "https://img.shields.io/badge/status-stable-brightgreen.svg",
    experimental: "https://img.shields.io/badge/status-experimental-yellow.svg",
};

/**
 * Replace content of the page
 */
for (let badge in badges) {
    let badge_url = badges[badge];
    let badge_element = document.querySelector(`#${badge}`);
    if (badge_element) {
        let img = document.createElement("img");
        img.src = badge_url;
        img.alt = badge;
        badge_element.appendChild(img);
    }
}


const snack = (n) => {
    switch (n) {
        case 1:
            Material.Snackbar.show("Don't forget to star on &nbsp;<b><i>Github</i></b>");
            break;
        case 2:
            Material.Snackbar.show("Don't forget to star on &nbsp;<b><i>Github</i></b>", "Sure I can");
            break;
        case 3:
            Material.Snackbar.show(
                "Account deleted", "what?", () => {
                    Material.Snackbar.show("I am joking");
                });
            break;
        default:
            Material.Snackbar.show("Never gonna give you up");
            break;
    }
};

if (document.querySelector(".aa")) {
    let range = Material.Forms.initRangeSlider(document.querySelector(".aa"), {
        start: 20,
        range: {
            'min': 0,
            'max': 100
        }
    });
    alert(range.get());
}

if (document.querySelector("#aaa") && document.querySelector("#a") && document.querySelector("#a")) {
    let a = document.querySelector("#a");
    let aaa = document.querySelector("#aaa");
    let aa = document.querySelector("#aa");
    
    aaa.addEventListener("click", () => {
        Material.Dialog.open(a);
    });
    aa.addEventListener("click", () => {
        Material.Dialog.close(a);
    });
}

Material.Forms.init();