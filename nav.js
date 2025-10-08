function initializeNavMenu() {
    let nav = document.getElementById("nav-menu");

    let depth = nav.dataset.depth;
    let prefix = "";
    if (depth) {
        for (let i = 0; i < Number(depth); i++) {
            prefix = "../" + prefix;
        }
    }

    let builder = document.createElement("a");
    builder.innerText = "Fleet Builder";
    if (nav.dataset.current == "builder") {
        builder.href = "#";
        builder.ariaCurrent = "page";
    } else {
        builder.href = `${prefix}index.htm`;
    }
    nav.append(builder);

    let catalog = document.createElement("a");
    catalog.innerText = "Catalog";
    if (nav.dataset.current == "catalog") {
        catalog.href = "#";
        catalog.ariaCurrent = "page";
    } else {
        catalog.href = `${prefix}catalog.htm`;
    }
    nav.append(catalog);
}

initializeNavMenu();