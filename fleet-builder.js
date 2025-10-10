function isPreviewEnabled() {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");
    return preview === "true";
}

function isAppMode() {
    if (window.matchMedia('(display-mode: minimal-ui)').matches) {
        return true;
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
    nameSpan.innerText = name;
    text.append(nameSpan);

    let divider = document.createElement('span');
    divider.innerText = " - ";
    text.append(divider);

    if (description.length > 0) {
        let desc = document.createElement('em');
        desc.innerText = description;
        desc.className = "desktop";
        text.append(desc);

        let divider2 = document.createElement('span');
        divider2.innerText = " - ";
        divider2.className = "desktop";
        text.append(divider2);
    }

    let pointsSpan = document.createElement('span');
    pointsSpan.innerText = points > 0 ? `${points}` : "Unknown";
    text.append(pointsSpan);

    if (description.length > 0) {
        let desc = document.createElement('em');
        desc.innerText = description;
        desc.className = "mobile small";
        text.append(document.createElement('br'));
        text.append(desc);
    }

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
        return "AL";
    } else if (item.type == "admiral") {
        return "ADM";
    } else if (item.type == "captain") {
        return "CAPT";
    }
}

function getDisplayElements(item, button, link) {
    let element = document.createElement('li');
    let description = getComponentDescription(item);

    let text = assembleListText(item.name, item.points, description);
    text.classList.add("tagged");
    text.classList.add("primary-list-item");
    var tag = getTag(item);
    if (tag) {
        text.dataset.tag = tag;
    }
    element.append(text);

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
        link.href = component.link;
        link.target = "_blank";
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
    if (element.faction == "any" || element.faction == allowedFaction) {
        element.sources.forEach((source) => {
            if (allowedSources.includes(source)) {
                available = true;
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
        data.innerText = text;
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
        table.append(dataRow([component.name, getComponentDescription(component), component.points > 0 ? component.points : "Unknown"]));
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
    });
    document.getElementById("fleet-points").innerText = totalPoints >= 0 ? totalPoints : "Unknown";

    updateErrorList();

    saveFleetToStorage();

    updateMarkdownDisplay();
}

function updateErrorList() {
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

function updateMarkdownDisplay() {
    if (markdownVisible) {
        let totalPoints = 0;

        let markdown = document.getElementById("markdown-pre");
        markdown.innerHTML = '';

        let markdownText = "# Leviathans Fleet\n\n";

        currentFleet.forEach((component, i) => {
            if (totalPoints != -1 && component.points > 0) {
                totalPoints += component.points;
            } else {
                totalPoints = -1;
            }

            let description = getComponentDescription(component);

            markdownText += `- **${component.name}** - _${description}_ - ${(component.points > 0 ? component.points : "Unknown")}\n`;
        });

        markdownText += `\n**Total Points:** ${(totalPoints >= 0 ? totalPoints : "Unknown")}\n`
        
        markdown.innerText = markdownText;
    }
}

let fleetBuildingRules = {};
resetFleetBuildingRules();

function resetFleetBuildingRules() {
    fleetBuildingRules = {
        singleFaction: true,
        pointsLimit: 1000,
        maxPointsOnPlanes: 100,
        requireCapitalShip: true,
        maxType4: 1,
        maxType3: 1,
        maxAdmirals: 1,
        maxALGuns: 2,
        shipsAreUnique: true,
        captainsAreUnique: true
    };
}

function listBuildingErrors() {
    let errors = [];

    let singleFaction = true;
    if (fleetBuildingRules.singleFaction) {
        let fleetFaction = "any";
        currentFleet.forEach((component) => {
            if (component.faction != "any" && component.faction != fleetFaction) {
                if (fleetFaction == "any") {
                    fleetFaction = component.faction;
                } else {
                    if (singleFaction) {
                        errors.push("All components must be of the same faction.");
                        singleFaction = false;
                    }
                }
            }
        });
    }

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
    if (totalPoints > fleetBuildingRules.pointsLimit && fleetBuildingRules.pointsLimit >= 0) {
        errors.push(`A fleet may have a maximum point value of ${fleetBuildingRules.pointsLimit} points.`);
    }
    if (totalPoints < 0 && fleetBuildingRules.pointsLimit >= 0) {
        errors.push("Fleet contains an element without an offical points value.");
    }
    if (planePoints > fleetBuildingRules.maxPointsOnPlanes && fleetBuildingRules.maxPointsOnPlanes >= 0) {
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
    if (type3Count + type4Count <= 0 && fleetBuildingRules.requireCapitalShip) {
        errors.push("A fleet must have a capital ship (battleship or battle cruiser).");
    }
    if (type4Count > fleetBuildingRules.maxType4 && fleetBuildingRules.maxType4 >= 0) {
        errors.push("A fleet may only have one battleship.");
    }
    if (type3Count > fleetBuildingRules.maxType3 && fleetBuildingRules.maxType3 >= 0) {
        errors.push("A fleet may only have one battle cruiser.");
    }
    if (admiralCount > fleetBuildingRules.maxAdmirals && fleetBuildingRules.maxAdmirals >= 0) {
        errors.push("Only a single Admiral Card may be included.");
    }
    if (alGunCount > fleetBuildingRules.maxALGuns && fleetBuildingRules.maxALGuns >= 0) {
        errors.push("A fleet may have at most two AL guns.");
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

    let duplicateShips = false;
    let duplicateCaptains = false;
    if (fleetBuildingRules.captainsAreUnique || fleetBuildingRules.shipsAreUnique) {
        currentFleet.forEach((component, i) => {
            if ((component.type == "leviathan" && fleetBuildingRules.shipsAreUnique) 
               || (component.type == "captain" && fleetBuildingRules.captainsAreUnique)) {
                for (let j = i + 1; j < currentFleet.length; j++) {
                    if (component.name == currentFleet[j].name) {
                        if (component.type == "leviathan") {
                            if (!duplicateShips) {
                                errors.push("Only one of a given Ship Card may be included.");
                            }
                            duplicateShips = true;
                        } else if (component.type == "captain") {
                            if (!duplicateCaptains) {
                                errors.push("Only one of a given Captain Card may be included.");
                            }
                            duplicateCaptains = true;
                        }
                    }
                }
            }
        });
    }


    return errors;
}

function buildSourceList() {
    var sources = [];

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

    return sources.sort();
}

function updateSourcesSummary() {
    let summary = document.getElementById("sources-summary");
    const count = selectedSources.length;
    summary.innerText = `Sources (${count} Selected)`
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

function initializeRulesOptions() {
    initializeRulesOptionCheckbox("chkSingleFactionFleet", "singleFaction");
    initializeRulesOptionCheckbox("chkRequireCapitalShip", "requireCapitalShip");
    initializeRulesOptionCheckbox("chkShipsAreUnique", "shipsAreUnique");
    initializeRulesOptionCheckbox("chkCaptainsAreUnique", "captainsAreUnique");
    initializeRulesOptionWithNumber("chkPointsLimit", "numPointsLimit", "pointsLimit");
}

function initializeRulesOptionCheckbox(checkboxId, propertyName) {
    let checkbox = document.getElementById(checkboxId);
    checkbox.checked = fleetBuildingRules[propertyName];
    checkbox.addEventListener("change", () => {
        fleetBuildingRules[propertyName] = checkbox.checked;
        updateErrorList();
    });
}

function initializeRulesOptionWithNumber(checkboxId, numberId, propertyName) {
    let checkbox = document.getElementById(checkboxId);
    let field = document.getElementById(numberId);
    checkbox.checked = fleetBuildingRules[propertyName] >= 0;
    field.value = fleetBuildingRules[propertyName];
    field.disabled = !checkbox.checked;
    if (field.disabled) {
        field.value = 1000;
    }
    checkbox.addEventListener("change", () => {
        fleetBuildingRules[propertyName] = checkbox.checked ? field.value : -1;
        field.disabled = !checkbox.checked;
        updateErrorList();
    });
    field.addEventListener("change", () => {
        if (checkbox.checked) {
            fleetBuildingRules[propertyName] = field.value;
            updateErrorList();
        }
    });
}

let selectedSources = buildSourceList();
loadStoredSourceList();
setupSourceList();
updateAvailableUnits();
initializeRulesOptions();

loadFleetFromStorage();
updateCurrentFleet();
