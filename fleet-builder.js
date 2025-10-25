function isPreviewEnabled() {
    try {
        var p = localStorage.getItem("preview-mode");
        if (p === "true") {
            return true;
        }
    } catch (ex) {
        console.log("Error accessing local storage.");
    }
    return false;
}

function isPreviewRequested() {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");
    return preview === "true";
}

function isAppMode() {
    if (window.matchMedia('(display-mode: minimal-ui)').matches ||
        window.matchMedia('(display-mode: standalone)').matches) {
        return true;
    }
    try {
        var debug = localStorage.getItem("debug-app-mode");
        if (debug == "true") {
            return true;
        }
    } catch (ex) {
        console.log("Error accessing local storage.");
    }
    return false;
}

function shipTypeName(shipType) {
    switch (shipType) {
        case 1: return "destroyer";
        case 2: return "cruiser";
        case 3: return "battlecruiser";
        case 4: return "battleship";
        case 5: return "fortress";
        case 8: return "transport";
        default: return "ship";
    }
}

function getClassName(shipClass) {
    if (shipClass.length > 6 && shipClass.slice(-6) == "-Class") {
        return shipClass;
    }
    return `${shipClass} class`
}

function getFactionLongName(faction) {
    switch (faction) {
        case "american": return "United States of America";
        case "austro-hungarian": return "Austro-Hungarian Empire";
        case "british": return "British Empire";
        case "french": return "French Republic";
        case "german": return "German Empire";
        case "italian": return "Kingdom of Italy";
        case "japanese": return "Japanese Empire";
        case "russian": return "Russian Empire";
        case "scandinavian": return "Scandinavian Union";
        case "swiss": return "Swiss Mercenaries";
        case "any": return "Generic";
        default: return `Unknown Faction (${faction})`;
    }
}

function assembleListText(name, points, description) {
    let text = document.createElement('div');

    let nameSpan = document.createElement('strong');
    nameSpan.innerHTML = name;
    text.append(nameSpan);

    let divider = document.createElement('span');
    divider.innerText = " - ";
    text.append(divider);

    if (description.length > 0) {
        let desc = document.createElement('em');
        desc.innerText = description;
        desc.className = "desktop description";
        text.append(desc);

        let divider2 = document.createElement('span');
        divider2.innerText = " - ";
        divider2.className = "desktop";
        text.append(divider2);
    }

    let pointsSpan = document.createElement('span');
    pointsSpan.innerText = points > 0 ? `${points}` : "Unknown";
    text.append(pointsSpan);

    return text;
}

function assembleListSecondaryText(description) {
    let text = document.createElement('div');
    text.className = "mobile small description";
    let em = document.createElement('em');
    em.innerText = description;
    text.append(em);
    return text;
}

function getComponentDescription(item) {
    let description = "";

    if (item.type == "leviathan") {
        description = `${getClassName(item.shipClass)} ${shipTypeName(item.shipType)}`;
    } else if (item.type == "admiral") {
        description = `${getFactionLongName(item.faction)} Admiral Card`;
    } else if (item.type == "captain") {
        description = `${getClassName(item.shipClass)} Captain Card`;
    } else if (item.type == "airplane") {
        description = "Airplane";
    } else if (item.type == "al-gun") {
        description = "Anti-Leviathan Gun";
    }

    return description;
}

function getTag(item) {
    if (item.type == "leviathan") {
        switch (item.shipType) {
            case 1: return "D";
            case 2: return "C";
            case 3: return "BC";
            case 4: return "B";
            case 5: return "FORT";
            case 8: return "AP";
        }
    } else if (item.type == "airplane") {
        return "AIR";
    } else if (item.type == "al-gun") {
        return "ALG";
    } else if (item.type == "admiral") {
        return "ADM";
    } else if (item.type == "captain") {
        return "CAPT";
    }
}

function getShipNameWithStyling(ship, markdown) {
    if (ship.generic) {
        return ship.name;
    }
    let startItalics = markdown ? "_" : "<em>";
    let endItalics = markdown ? "_" : "</em>";
    const prefixes = ["HML ", "SML ", "USG ", "HSwML "];
    for(let i = 0; i < prefixes.length; i++) {
        if (ship.name.startsWith(prefixes[i]))
        {
            return `${prefixes[i]}${startItalics}${ship.name.substr(prefixes[i].length)}${endItalics}`
        }
    }

    return `${startItalics}${ship.name}${endItalics}`;  
}

function getDisplayElements(item, button, link) {
    let element = document.createElement('li');
    let description = getComponentDescription(item);

    let nameHtml = item.name;
    if (item.type == "leviathan") {
        nameHtml = getShipNameWithStyling(item);
    }

    let text = assembleListText(nameHtml, item.points, description);
    text.classList.add("tagged");
    
    var tag = getTag(item);
    if (tag) {
        text.dataset.tag = tag;
    }

    let secondary = assembleListSecondaryText(description);

    let content = document.createElement('div');
    content.classList.add("primary-list-item");
    content.append(text);
    content.append(secondary);
    element.append(content);

    if (link) {
        element.append(link);
    }

    if (button) {
        element.append(button);
    }
    
    return element;
}

function addButton(component) {
    let add = document.createElement('button');
    add.title = "Add to fleet";
    add.type = "button";

    let span = document.createElement('span');
    span.className = "material-symbols-outlined";
    span.innerText = "add";
    add.appendChild(span);

    add.addEventListener("click", () => addToFleet(component));
    return add;
}

function linkToElement(component) {
    if (component.link) {
        let link = document.createElement('a');
        link.href = `${component.link}#builder`;
        if (!isAppMode()) {
            link.target = "_blank";
        }
        let span = document.createElement('span');
        span.classList.add("material-symbols-outlined");
        span.classList.add("more-info-link");
        span.innerText = "article";
        link.appendChild(span);
        return link;
    }
    return null;
}

function isElementAvailable(element, allowedFaction, allowedSources) {
    let available = false;
    if (element.faction == "any" || allowedFaction == "*" || element.faction == allowedFaction) {
        element.sources.forEach((source) => {
            if (allowedSources.includes(source)) {
                available = true;
                if (element.type == "leviathan" && requiredSlots.length > 0) {
                    requiredSlots.forEach((rs) => {
                        if (element.slots.findIndex(x => x == rs) == -1) {
                            available = false;
                        }
                    });
                }
            }
        });
    }
    return available;
}

function updateAvailableUnits() {
    let leviathans = document.getElementById("levs-list");
    leviathans.innerHTML = '';

    const currentFaction = document.getElementById("faction-select").value;

    getLeviathanData().forEach((lev) => {
        if (isElementAvailable(lev, currentFaction, selectedSources)) {
            leviathans.appendChild(getDisplayElements(lev, addButton(lev), linkToElement(lev)));
        }
    });

    let admirals = document.getElementById("admirals-list");
    admirals.innerHTML = '';
    getAdmiralData().forEach((admiral) => {
        if (isElementAvailable(admiral, currentFaction, selectedSources)) {
            admirals.appendChild(getDisplayElements(admiral, addButton(admiral), linkToElement(admiral)));
        }
    });

    let captains = document.getElementById("captains-list");
    captains.innerHTML = '';
    getCaptainData().forEach((captain) => {
        if (isElementAvailable(captain, currentFaction, selectedSources)) {
            captains.appendChild(getDisplayElements(captain, addButton(captain), linkToElement(captain)));
        }
    });

    let planes = document.getElementById("planes-list");
    planes.innerHTML = '';
    getPlaneData().forEach((plane) => {
        if (isElementAvailable(plane, currentFaction, selectedSources)) {
            planes.appendChild(getDisplayElements(plane, addButton(plane), linkToElement(plane)));
        }
    });

    let guns = document.getElementById("al-list");
    guns.innerHTML = '';
    getALGunData().forEach((gun) => {
        if (isElementAvailable(gun, currentFaction, selectedSources)) {
            guns.appendChild(getDisplayElements(gun, addButton(gun), linkToElement(gun)));
        }
    });
}

let currentFleet = [];

function addToFleet(item) {
    currentFleet.push(item);
    sortByPointsAndName(currentFleet);
    updateCurrentFleet();
}

function removeFromFleet(index) {
    currentFleet.splice(index, 1);
    updateCurrentFleet();
}

function headerRow(headers) {
    let headerRow = document.createElement("tr");
    headers.forEach((text) => {
        let header = document.createElement("th");
        header.innerText = text;
        headerRow.append(header);
    });
    return headerRow;
}

function dataRow(values) {
    let dataRow = document.createElement("tr");
    values.forEach((text) => {
        let data = document.createElement("td");
        data.innerHTML = text;
        dataRow.append(data);
    });
    return dataRow;
}

function clearPrintDisplay() {
    let printArea = document.getElementById("print-area");
    printArea.innerHTML = '';
}

function updatePrintDisplay() {
    let totalPoints = 0;

    let printArea = document.getElementById("print-area");
    printArea.innerHTML = '';

    let printHeader = document.createElement("h2");
    printHeader.innerText = "Leviathans Fleet";
    printArea.append(printHeader);

    let printDescription = document.createElement("em");
    printDescription.innerText = "Create with the Leviathans Fleet Builder";
    printArea.append(printDescription);

    let table = document.createElement("table");
    table.append(headerRow(["Name", "Description", "Points"]));
    currentFleet.forEach((component) => {
        if (component.points > 0 && totalPoints != -1) {
            totalPoints += component.points;
        } else {
            totalPoints = -1;
        }
        let name = component.name;
        if (component.type == "leviathan") {
            name = getShipNameWithStyling(component);
        }
        table.append(dataRow([name, getComponentDescription(component), component.points > 0 ? component.points : "Unknown"]));
    });
    table.append(dataRow(["","", totalPoints >= 0 ? totalPoints : "Unknown"]));
    printArea.append(table);

    let printFooter = document.createElement("code");
    printFooter.innerText = "https://scottboehmer.github.io/fleet-builder/";
    printArea.append(printFooter);
}

function updateCurrentFleet() {
    let totalPoints = 0;

    let fleetList = document.getElementById("current-fleet");
    fleetList.innerHTML = '';

    let fleetTags = document.getElementById("fleet-tags");
    fleetTags.innerHTML = '';

    currentFleet.forEach((component, i) => {
        if (totalPoints != -1 && component.points > 0) {
            totalPoints += component.points;
        } else {
            totalPoints = -1;
        }

        let remove = document.createElement('button');
        remove.title = "Remove from fleet";
        remove.type = "button";
        
        let span = document.createElement('span');
        span.className = "material-symbols-outlined";
        span.innerText = "delete";
        remove.appendChild(span);

        remove.addEventListener("click", () => removeFromFleet(i));

        fleetList.append(getDisplayElements(component, remove, linkToElement(component)));

        let tag = document.createElement('span');
        tag.className = "tag";
        tag.innerText = getTag(component);
        fleetTags.append(tag);
        fleetTags.append(" ");
    });
    document.getElementById("fleet-points").innerText = totalPoints >= 0 ? totalPoints : "Unknown";

    if (currentFleet.length == 0) {
        fleetTags.innerText = "None";
    }

    let errors = listBuildingErrors();
    let errorList = document.getElementById("error-list");
    errorList.innerHTML = '';
    errors.forEach((error) => {
        let listItem = document.createElement('li');
        let message = document.createElement('strong');
        message.innerText = error;
        listItem.appendChild(message);
        errorList.appendChild(listItem);
    });

    let errorIndicator = document.getElementById("error-indicator");
    if (errors.length > 0) {
        errorIndicator.innerHTML = " <span class=\"error-indicator\">!</span>";
    } else {
        errorIndicator.innerHTML = '';
    }

    saveFleetToStorage();

    updateMarkdownDisplay();
}

function saveFleetToStorage() {
    try {
        const json = JSON.stringify(currentFleet);
        if (isAppMode()) {
            localStorage.setItem("fleet", json);
        } else {
            sessionStorage.setItem("fleet", json);
        }
    } catch (ex) {
        console.log("Unable to save fleet.");
    }
}

function loadFleetFromStorage() {
    try {
        if (isAppMode()) {
            const json = localStorage.getItem("fleet");
            if (json) {
                currentFleet = JSON.parse(json);
            }
        } else {
            const json = sessionStorage.getItem("fleet");
            if (json) {
                currentFleet = JSON.parse(json);
            }
        }
    } catch (ex) {
        console.log("Unable to load saved fleet.");
    }
}

function saveFiltersToStorage() {
    if (isAppMode()) {
        try {
            const json = JSON.stringify(requiredSlots);
            sessionStorage.setItem("slot-filters", json);
        } catch (ex) {
            console.log("Unable to save slot filters.");
        }
    }
}

function loadFiltersFromStorage() {
    if (isAppMode()) {
        try {
            const json = sessionStorage.getItem("slot-filters");
            if (json) {
                requiredSlots = JSON.parse(json);
            }
        } catch (ex) {
            console.log("Unable to load slot filters.");
        }
    }
}

function getMarkdownForFleet() {
    let totalPoints = 0;
    let markdownText = "# Leviathans Fleet\n\n";
    currentFleet.forEach((component, i) => {
        if (totalPoints != -1 && component.points > 0) {
            totalPoints += component.points;
        } else {
            totalPoints = -1;
        }

        let description = getComponentDescription(component);

        let styledName = component.name;
        if (component.type == "leviathan") {
            styledName = getShipNameWithStyling(component, true);
        }

        markdownText += `- **${styledName}** - _${description}_ - ${(component.points > 0 ? component.points : "Unknown")}\n`;
    });
    markdownText += `\n**Total Points:** ${(totalPoints >= 0 ? totalPoints : "Unknown")}\n`

    return markdownText;
}

function updateMarkdownDisplay() {
    if (markdownVisible) {
        let markdown = document.getElementById("markdown-pre");
        markdown.innerText = getMarkdownForFleet();
    }
}

function listBuildingErrors() {
    let errors = [];

    let factionMismatchReported = false;
    let fleetFaction = "any";
    currentFleet.forEach((component) => {
        if (!factionMismatchReported) {
            if (component.faction != "any" && component.faction != fleetFaction) {
                if (fleetFaction == "any") {
                    fleetFaction = component.faction;
                } else {
                    errors.push("All components must be of the same faction.");
                    factionMismatchReported = true;
                }
            }
        }
    });

    let totalPoints = 0;
    let planePoints = 0;
    currentFleet.forEach((component) => {
        if (totalPoints != -1 && component.points > 0) {
            totalPoints += component.points;
        } else {
            totalPoints = -1;
        }
        if (component.type == "airplane") {
            planePoints += component.points;
        }
    });
    if (totalPoints > 1000) {
        errors.push("A fleet may have a maximum point value of 1000 points.");
    }
    if (totalPoints < 0) {
        errors.push("Fleet contains an element without an offical points value.");
    }
    if (planePoints > 100) {
        errors.push("A maximum of 100 points may be spent on planes.");
    }

    let type4Count = 0;
    let type3Count = 0;
    let admiralCount = 0;
    let alGunCount = 0;
    let captains = [];
    currentFleet.forEach((component) => {
        if (component.type == "leviathan") {
            if (component.shipType == 3) {
                type3Count += 1;
            } else if (component.shipType == 4) {
                type4Count += 1;
            }
        } else if (component.type == "admiral") {
            admiralCount += 1;
        } else if (component.type == "captain") {
            captains.push(component);
        } else if (component.type == "al-gun") {
            alGunCount += 1;
        }
    });
    if (type3Count + type4Count <= 0) {
        errors.push("A fleet must have a capital ship (battleship or battlecruiser).");
    }
    if (type4Count > 1) {
        errors.push("A fleet may only have one battleship.");
    }
    if (type3Count > 1) {
        errors.push("A fleet may only have one battlecruiser.");
    }
    if (admiralCount > 1) {
        errors.push("Only a single Admiral Card may be included.");
    }
    if (alGunCount > 2) {
        errors.push("A fleet may have at most two anti-leviathan guns.");
    }

    captains.forEach((captainCard) => {
        let hasShip = false;
        currentFleet.forEach((component) => {
            if (component.type == "leviathan" && component.shipClass == captainCard.shipClass) {
                hasShip = true;
            }
        });
        if (!hasShip) {
            errors.push("Captain Card does not have a matching ship.");
        }
    });

    let duplicateCaptainReported = false;
    let duplicateShipReported = false;
    currentFleet.forEach((component, i) => {
        if (component.type == "leviathan" && !component.generic && !duplicateShipReported) {
            for (let j = i + 1; j < currentFleet.length; j++) {
                if (component.name == currentFleet[j].name) {
                    errors.push("Only one of a given Ship Card may be included.");
                    duplicateShipReported = true;
                    return;
                }
            }
        } else if (component.type == "captain" && !component.generic && !duplicateCaptainReported) {
            for (let j = i + 1; j < currentFleet.length; j++) {
                if (component.name == currentFleet[j].name) {
                    errors.push("Only one of a given Captain Card may be included.");
                    duplicateCaptainReported = true;
                    return;
                }
            }
        }
    });


    return errors;
}

let assembledSourceList = [];

function buildSourceList() {
    if (assembledSourceList.length == 0) {
        let sources = [];

        getLeviathanData().forEach((item) => {
            item.sources.forEach((source) => {
                if (!sources.includes(source)) {
                    sources.push(source);
                }
            });
        });

        getAdmiralData().forEach((item) => {
            item.sources.forEach((source) => {
                if (!sources.includes(source)) {
                    sources.push(source);
                }
            });
        });

        getCaptainData().forEach((item) => {
            item.sources.forEach((source) => {
                if (!sources.includes(source)) {
                    sources.push(source);
                }
            });
        });

        getPlaneData().forEach((item) => {
            item.sources.forEach((source) => {
                if (!sources.includes(source)) {
                    sources.push(source);
                }
            });
        });

        getALGunData().forEach((item) => {
            item.sources.forEach((source) => {
                if (!sources.includes(source)) {
                    sources.push(source);
                }
            });
        });

        assembledSourceList = sources.sort();
    }
    
    return assembledSourceList;
}

function updateSourcesSummary() {
    let summary = document.getElementById("sources-summary");
    const total = buildSourceList().length;
    const count = selectedSources.length;
    summary.innerText = `Sources (${count} of ${total} Selected)`
}

function setupSourceList() {
    let sourceList = document.getElementById("source-list");
    sourceList.innerHTML = '';

    buildSourceList().forEach((source) => {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = selectedSources.includes(source);
        checkbox.name = source;
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                if (!selectedSources.includes(source)) {
                    selectedSources.push(source);
                }
            } else {
                let index = selectedSources.findIndex((x) => x == source);
                if (index >= 0) {
                    selectedSources.splice(index, 1);
                }
            }
            updateSourcesSummary();
            updateAvailableUnits();
            saveSourceList();
        });
        var checkboxdiv = document.createElement("div");
        checkboxdiv.append(checkbox);
        li.append(checkboxdiv);
        var div = document.createElement("div");
        div.classList.add("primary-list-item");
        div.innerText = source;
        li.append(div);
        sourceList.append(li);
    });

    updateSourcesSummary();
}

function setupSettings() {
    if (isPreviewEnabled() || isAppMode() || isPreviewRequested()) {
        var settingsArea = document.getElementById("main-settings");
        var label = document.createElement("label");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        label.append(checkbox);
        label.append("Enable preview features");
        settingsArea.append(label);

        try {
            var p = localStorage.getItem("preview-mode");
            if (p === "true") {
                checkbox.checked = true;
            }
        } catch (ex) {
            console.log("Error accessing local storage.");
        }

        checkbox.addEventListener("change", () => {
            try {
                localStorage.setItem("preview-mode", checkbox.checked ? "true" : "false");
                window.location.reload();
            } catch (ex) {
                console.log("Error writing to local storage.");
            }
        });
    }
}

function loadStoredSourceList() {
    try {
        var storageValue = localStorage.getItem("selectedSources");
        if (storageValue) {
            const knownSources = buildSourceList();
            selectedSources = [];
            storageValue.split(",").map(s => s.trim()).forEach(storedSource => {
                if (knownSources.includes(storedSource)) {
                    selectedSources.push(storedSource);
                }
            });
        }
    } catch(ex) {
        console.log("Unable to load previously selected source list.");
    }
}

function saveSourceList() {
    try {
        var storageValue = selectedSources.join(",");
        if (!storageValue) {
            storageValue = "empty";
        }
        localStorage.setItem("selectedSources", storageValue);
    } catch (ex) {
        console.log("Unable to save source list.");
    }
}

function saveFactionPreference(factionId) {
    try {
        localStorage.setItem("faction", factionId);
    } catch (ex) {
        console.log("Unable to save faction selection.");
    }
}

function getFactionPreference() {
    try {
        return localStorage.getItem("faction");
    } catch (ex) {
        console.log("Unable to load previous faction selection.");
    }
}

const lastSelectedFaction = getFactionPreference();
let factionSelect = document.getElementById("faction-select");
let majorFactionsGroup = document.createElement('optgroup');
majorFactionsGroup.label = "Major Factions";
factionSelect.append(majorFactionsGroup);
[
    "british", 
    "french", 
    "german", 
    "italian",  
    "russian", 
].forEach((factionId) => {
    let item = document.createElement('option');
    item.value = factionId;
    item.innerText = getFactionLongName(factionId);
    if (item.value == lastSelectedFaction) {
        item.selected = true;
    }
    majorFactionsGroup.appendChild(item);
});
let futureFactionsGroup = document.createElement('optgroup');
futureFactionsGroup.label = "Major Factions (Upcoming)";
factionSelect.append(futureFactionsGroup);
[
    "austro-hungarian", 
    "japanese",
    "american", 
].forEach((factionId) => {
    let item = document.createElement('option');
    item.value = factionId;
    item.innerText = getFactionLongName(factionId);
    if (item.value == lastSelectedFaction) {
        item.selected = true;
    }
    futureFactionsGroup.appendChild(item);
});
let minorFactionsGroup = document.createElement('optgroup');
minorFactionsGroup.label = "Minor Factions";
factionSelect.append(minorFactionsGroup);
[
    "scandinavian", 
    "swiss",
].forEach((factionId) => {
    let item = document.createElement('option');
    item.value = factionId;
    item.innerText = getFactionLongName(factionId);
    if (item.value == lastSelectedFaction) {
        item.selected = true;
    }
    minorFactionsGroup.appendChild(item);
});
let miscGroup = document.createElement('optgroup');
miscGroup.label = "Other Filters";
let wildCard = document.createElement('option');
wildCard.value = "*";
wildCard.innerText = "All Components";
if (wildCard.value == lastSelectedFaction) {
    wildCard.selected = true;
}
miscGroup.appendChild(wildCard);
let generic = document.createElement('option');
generic.value = "any";
generic.innerText = "Generic Components";
if (generic.value == lastSelectedFaction) {
    generic.selected = true;
}
miscGroup.appendChild(generic);
factionSelect.append(miscGroup);

factionSelect.addEventListener("change", () => {
    saveFactionPreference(factionSelect.options[factionSelect.selectedIndex].value);
    updateAvailableUnits();
});

let printButton = document.getElementById("print-button");
printButton.addEventListener("click", () => {
    updatePrintDisplay();
    window.print();
});

let markdownVisible = false;
let markdownButton = document.getElementById("toggle-md-button");
markdownButton.addEventListener("click", () => {
    if (markdownVisible) {
        markdownVisible = false;
        let buttonContent = document.getElementById("toggle-md-button-content");
        buttonContent.innerText = "markdown";

        let markdownArea = document.getElementById("markdown-area");
        markdownArea.innerHTML = '';

        let listArea = document.getElementById("list-area");
        listArea.classList.remove("hidden");
    } else {
        markdownVisible = true;
        let buttonContent = document.getElementById("toggle-md-button-content");
        buttonContent.innerText = "table_rows";

        let markdownArea = document.getElementById("markdown-area");
        let pre = document.createElement("pre");
        pre.id = "markdown-pre";
        markdownArea.append(pre);

        updateMarkdownDisplay();

        let listArea = document.getElementById("list-area");
        listArea.classList.add("hidden");
    }
});

document.getElementById("copy-md-button").addEventListener("click", () => {
    const md = getMarkdownForFleet();
    navigator.clipboard.writeText(md);
    document.getElementById("command-status").innerText = "Copied!";
    setTimeout(() => {
        document.getElementById("command-status").innerHTML = "";
    }, 3000);
});

if (isPreviewEnabled()) {
    document.getElementById("copy-md-button").className = "";
}

document.getElementById("select-all-sources").addEventListener("click", () => {
    selectedSources = buildSourceList();
    setupSourceList();
    saveSourceList();
    updateAvailableUnits();
});

document.getElementById("clear-sources").addEventListener("click", () => {
    selectedSources = [];
    setupSourceList();
    saveSourceList();
    updateAvailableUnits();
});

let requiredSlots = [];

let potentialSlotFilters = [
    { id: "adv-fire-control", display: "Advanced Fire Control" },
    { id: "artillery-guns", display: "Artillery Guns" },
    { id: "bracket-crew", display: "Bracketing Crew" },
    { id: "chaff", display: "Chaff" },
    { id: "edison", display: "Edison Coil Trim Tank" },
    { id: "he-torpedo", display: "HE Torpedo" },
    { id: "imp-steering-gear", display: "Improved Steering Gear" },
    { id: "mine-layer", display: "Mine Layer" },
    { id: "precision-crew", display: "Precision Crew" },
    { id: "ram", display: "Ram" },
    { id: "ram-engine", display: "Ram Engine" },
    { id: "repair-crew", display: "Repair Crew" },
    { id: "saturation-crew", display: "Saturation Crew" },
    { id: "saturation-guns", display: "Saturation Guns" },
    { id: "screen-crew", display: "Screening Crew" },
    { id: "shot-cannon", display: "Shot Cannon" },
    { id: "slip-shaft", display: "Slip Shaft" },
    { id: "sniper-guns", display: "Sniper Guns"},
    { id: "steering-gear", display: "Steering Gear" },
    { id: "ted-guns", display: "TED Guns" },
    { id: "torpedo", display: "Torpedo" },
];

function setupLeviathanFilters()
{
    loadFiltersFromStorage();

    let levsDetails = document.getElementById("levs-details");

    let filters = document.createElement("details");
    let filterSummary = document.createElement("summary");
    filterSummary.innerText = "Required Slots";
    filters.append(filterSummary);
    filters.classList.add("column-host");
    let filterNotes = document.createElement("p");
    filterNotes.innerText = "Filter out leviathans that do not have all of the selected slot types.";
    filterNotes.className = "note small";
    filters.append(filterNotes);

    let column1 = document.createElement("div");
    column1.classList.add("column");
    let column2 = document.createElement("div");
    column2.classList.add("column");
    filters.append(column1);
    filters.append(column2);

    potentialSlotFilters.forEach((filter, index) => {
        let filterLabel = document.createElement("label");
        let filterCheckbox = document.createElement("input");
        filterCheckbox.type = "checkbox";
        filterCheckbox.id = `chk-${filter.id}`;
        if (requiredSlots.indexOf(filter.id) != -1) {
            filterCheckbox.checked = true;
        }
        filterCheckbox.addEventListener("change", () => {
            if (filterCheckbox.checked) {
                requiredSlots.push(filter.id);
            } else {
                const index = requiredSlots.findIndex(x => x == filter.id);
                if (index >= 0) {
                    requiredSlots.splice(index, 1);
                }
            }
            saveFiltersToStorage();
            updateAvailableUnits();
        });
        filterLabel.append(filterCheckbox);
        filterLabel.append(filter.display);
        if (index >= Math.round(potentialSlotFilters.length / 2.0)) {
            column2.append(filterLabel);
        } else {
            column1.append(filterLabel);
        }
    });

    levsDetails.insertBefore(filters, levsDetails.childNodes[1]);
}

let selectedSources = buildSourceList();
loadStoredSourceList();
setupSourceList();
setupLeviathanFilters();
updateAvailableUnits();

loadFleetFromStorage();
updateCurrentFleet();
setupSettings();