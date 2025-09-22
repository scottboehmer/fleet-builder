function sortByPointsAndName(components) {
    return components.sort((a,b) => a.points == b.points ? a.name.localeCompare(b.name) : b.points - a.points);
}

function planeCard(type, skill, points) {
    return { name: `${type}, ${skill}`, type: "airplane", faction: "any", points: points };
}

const planeData = sortByPointsAndName([
    planeCard("Fighter", "Green", 20),
    planeCard("Fighter", "Veteran", 30),
    planeCard("Bomber", "Green", 20),
    planeCard("Bomber", "Veteran", 40),
    planeCard("Spotter", "Green", 30),
    planeCard("Spotter", "Veteran", 40),
    planeCard("Heavy Bomber", "Green", 40),
    planeCard("Heavy Bomber", "Veteran", 60),
    planeCard("Turret Fighter", "Green", 20),
    planeCard("Turret Fighter", "Veteran", 30),
    planeCard("Interceptor", "Green", 20),
    planeCard("Interceptor", "Veteran", 30),
    planeCard("Torpedo Bomber", "Green", 30),
    planeCard("Torpedo Bomber", "Veteran", 40)
]);

function getPlaneData() {
    return planeData;
}

function alGunCard(name, points) {
    return { name: name, type: "al-gun", faction: "any", points: points };
}

const alGunData = sortByPointsAndName([
    alGunCard("Semi-Mobile AL Gun", 20),
    alGunCard("Mobile AL Gun", 20),
    alGunCard("High-Mobility AL Gun", 20)
]);

function getALGunData() {
    return alGunData;
}

function admiralCard(name, points, faction) {
    return { name: name, type: "admiral", faction: (faction ? faction : "any"), points: points };
}

const admiralData = sortByPointsAndName([
    admiralCard("Airman", 10),
    admiralCard("Lieutenant", 20),
    admiralCard("Commander", 30),
    admiralCard("Rear Admiral", 40),
    admiralCard("Sky Admiral", 50),
    admiralCard("Improved Keel", 10),
    admiralCard("Breaking the Keel", 20),
    admiralCard("Type Reduction", 30),
    admiralCard("Tesla Support", 40),
    admiralCard("Repair Bonus", 50),
    admiralCard("Reinforced Keel", 10, "italian"),
    admiralCard("Positioning Expert", 20, "italian"),
    admiralCard("Maneuvering Expert", 30, "italian"),
    admiralCard("Torpedo Monitor", 40, "italian"),
    admiralCard("Master of Torpedoes", 50, "italian"),
    admiralCard("Extra Airmen", 10, "british"),
    admiralCard("Tight Spin Evasions", 20, "british"),
    admiralCard("Keel Cracking", 30, "british"),
    admiralCard("Artillery Expert", 40, "british"),
    admiralCard("Master of Weapons", 50, "british"),
    admiralCard("Rapid Repair", 10, "russian"),
    admiralCard("Precision Shots", 20, "russian"),
    admiralCard("Quick Crew Deployment", 30, "russian"),
    admiralCard("Double Shifts", 40, "russian"),
    admiralCard("Master of Repair", 50, "russian"),
    admiralCard("Makeshift Engine", 10, "french"),
    admiralCard("High-Impact Torpedoes", 20, "french"),
    admiralCard("Torpedo Crews", 30, "french"),
    admiralCard("Torpedo Sights", 40, "french"),
    admiralCard("Engineering Expert", 50, "french"),
    admiralCard("Focused Gunners", 10, "german"),
    admiralCard("Hard Burn", 20, "german"),
    admiralCard("Armored Hulls", 30, "german"),
    admiralCard("Chaff Experts", 40, "german"),
    admiralCard("Balanced Vessels", 50, "german")
]);

function getAdmiralData() {
    return admiralData;
}

function captainCard(name, points, faction, shipClass) {
    return { name: name, type: "captain", faction: faction, shipClass: shipClass, points: points };
}

const captainData = sortByPointsAndName([
    captainCard("Anastasia Romanova", 10, "russian", "Kiev"),
    captainCard("Amil Dhar", 20, "british", "Destrier"),
    captainCard("Rene Fonck", 20, "french", "Faucon"),
    captainCard("Manfred von Richtofen", 30, "german", "Greif"),
    captainCard("Castillo Romano", 20, "italian", "Avventuriero")
]);

function getCaptainData() {
    return captainData;
}

function leviathanCard(name, shipClass, shipType, faction, points) {
    return { name: name, type: "leviathan", shipClass: shipClass, shipType: shipType, faction: faction, points: points };
}

const levData = sortByPointsAndName([
    leviathanCard("Kamchatka", "Vladivostok", 4, "russian", 440),
    leviathanCard("Siberia", "Vladivostok", 4, "russian", 430),
    leviathanCard("Aleksandr III", "Aleksandr", 4, "russian", 420),
    leviathanCard("Mariya", "Aleksandr", 4, "russian", 440),
    leviathanCard("Ivan", "Aleksandr", 4, "russian", 430),
    leviathanCard("Peter", "Aleksandr", 4, "russian", 410),
    leviathanCard("Izmail", "Cathrine", 3, "russian", 320),
    leviathanCard("Kazarskii", "Cathrine", 3, "russian", 300),
    leviathanCard("Romanov", "Cathrine", 3, "russian", 330),
    leviathanCard("Aurora", "Kiev", 2, "russian", 210),
    leviathanCard("Rurik", "Kiev", 2, "russian", 210),
    leviathanCard("Bayan", "Kiev", 2, "russian", 230),
    leviathanCard("Kirov", "Kiev", 2, "russian", 220),
    leviathanCard("Alexandra", "Kiev", 2, "russian", 240),
    leviathanCard("Pallada", "Pallada", 2, "russian", 240),
    leviathanCard("Triteia", "Pallada", 2, "russian", 230),
    leviathanCard("Anastasia", "Berkut", 1, "russian", 150),
    leviathanCard("Vsadnik", "Berkut", 1, "russian", 170),
    leviathanCard("Berkut", "Berkut", 1, "russian", 190),
    leviathanCard("Sterliad", "Berkut", 1, "russian", 160),
    leviathanCard("Sud'ba", "Berkut", 1, "russian", 180),
    leviathanCard("Nadeyat'sya", "Berkut", 1, "russian", 140),
    leviathanCard("Pelikan", "Novik", 1, "russian", 140),
    leviathanCard("Kit", "Novik", 1, "russian", 170),
    leviathanCard("USG Virginia", "Frontier", 2, "american", 230),
    leviathanCard("USG Kansas", "Frontier", 2, "american", 240),
    leviathanCard("SML Hohenberg", "Adler", 2, "austro-hungarian", 200),
    leviathanCard("SML Habsburg", "Adler", 2, "austro-hungarian", 190),
    leviathanCard("Ishikawa", "Kawa", 2, "japanese", 220),
    leviathanCard("Tokushima", "Kawa", 2, "japanese", 240),
    leviathanCard("HML Leviathan", "Leviathan", 4, "british", 420),
    leviathanCard("HML Medusa", "Leviathan", 4, "british", 430),
    leviathanCard("HML Munster", "Connaught", 4, "british", 440),
    leviathanCard("HML Wales", "Connaught", 4, "british", 450),
    leviathanCard("HML Leinster", "Connaught", 4, "british", 410),
    leviathanCard("HML Cornwall", "Connaught", 4, "british", 430),
    leviathanCard("HML Spion Kop", "Defender", 3, "british", 320),
    leviathanCard("HML Mafeking", "Defender", 3, "british", 340),
    leviathanCard("HML Tiger", "Defender", 3, "british", 320),
    leviathanCard("HML Cairo", "Destrier", 2, "british", 230),
    leviathanCard("HML Prometheus", "Destrier", 2, "british", 240),
    leviathanCard("HML Sydney", "Destrier", 2, "british", 220),
    leviathanCard("HML Malay", "Destrier", 2, "british", 210),
    leviathanCard("HML Punjab", "Destrier", 2, "british", 240),
    leviathanCard("HML New Zealand", "County", 2, "british", 200),
    leviathanCard("HML Essex", "County", 2, "british", 170),
    leviathanCard("HML Anfield", "D-Class", 1, "british", 160),
    leviathanCard("HML Beagle", "D-Class", 1, "british", 170),
    leviathanCard("HML Dublin", "D-Class", 1, "british", 180),
    leviathanCard("HML Belfast", "D-Class", 1, "british", 150),
    leviathanCard("HML Crow", "D-Class", 1, "british", 150),
    leviathanCard("HML Raven", "D-Class", 1, "british", 160),
    leviathanCard("HML Monitor", "G-Class", 1, "british", 170),
    leviathanCard("HML Surveyor", "G-Class", 1, "british", 160),
    leviathanCard("Augusto", "Cesare", 4, "italian", 430),
    leviathanCard("Giulio", "Cesare", 4, "italian", 440),
    leviathanCard("Pompeii", "Vulcano", 4, "italian", 410),
    leviathanCard("Vesuvius", "Vulcano", 4, "italian", 450),
    leviathanCard("Etna", "Vulcano", 4, "italian", 420),
    leviathanCard("Stromboli", "Vulcano", 4, "italian", 430),
    leviathanCard("Sabatini", "Vulcano", 4, "italian", 480),
    leviathanCard("Sardegna", "Mare Nostrum", 3, "italian", 300),
    leviathanCard("Sicilia", "Mare Nostrum", 3, "italian", 280),
    leviathanCard("Marco Polo", "Avventuriero", 2, "italian", 220),
    leviathanCard("Giovanno Caboto", "Avventuriero", 2, "italian", 220),
    leviathanCard("Cristoforo Colombo", "Avventuriero", 2, "italian", 200),
    leviathanCard("Amerigo Vespucci", "Avventuriero", 2, "italian", 230),
    leviathanCard("Irredentismo", "Avventuriero", 2, "italian", 240),
    leviathanCard("Augustus", "Gloria", 2, "italian", 220),
    leviathanCard("Julius", "Gloria", 2, "italian", 230),
    leviathanCard("Andromeda", "Constellazione", 1, "italian", 180),
    leviathanCard("Aquarius", "Constellazione", 1, "italian", 160),
    leviathanCard("Sagittario", "Constellazione", 1, "italian", 170),
    leviathanCard("Cassiopeia", "Constellazione", 1, "italian", 210),
    leviathanCard("Aries", "Constellazione", 1, "italian", 180),
    leviathanCard("Scorpio", "Constellazione", 1, "italian", 130),
    leviathanCard("Rubicon", "Fiume", 1, "italian", 150),
    leviathanCard("Tevere", "Fiume", 1, "italian", 170),
    leviathanCard("SML Preußen", "Prussia", 4, "german", 460),
    leviathanCard("SML Pommern", "Prussia", 4, "german", 470),
    leviathanCard("SML Kaiser", "Kaiser", 4, "german", 420),
    leviathanCard("SML Kaiserin", "Kaiser", 4, "german", 420),
    leviathanCard("SML Friedrich der Große", "Kaiser", 4, "german", 410),
    leviathanCard("SML Wilhelm", "Kaiser", 4, "german", 430),
    leviathanCard("SML Sachsen", "Saxony", 3, "german", 290),
    leviathanCard("SML Frankfurt", "Saxony", 3, "german", 290),
    leviathanCard("SML Von Zieten", "Saxony", 3, "german", 290),
    leviathanCard("SML Greif", "Greif", 2, "german", 250),
    leviathanCard("SML Brandenburg", "Greif", 2, "german", 200),
    leviathanCard("SML Hannover", "Greif", 2, "german", 190),
    leviathanCard("SML Bayern", "Greif", 2, "german", 220),
    leviathanCard("SML Lübeck", "Greif", 2, "german", 210),
    leviathanCard("SML Hamburg", "Greif", 2, "german", 240),
    leviathanCard("SML Danzig", "Greif", 2, "german", 220),
    leviathanCard("SML Rheinland", "Koenigsberg", 2, "german", 230),
    leviathanCard("SML Königsberg", "Koenigsberg", 2, "german", 200),
    leviathanCard("SML Löwe", "Falke", 1, "german", 180),
    leviathanCard("SML Seelöwe", "Falke", 1, "german", 160),
    leviathanCard("SML Dachs", "Falke", 1, "german", 190),
    leviathanCard("SML Vielfraß", "Falke", 1, "german", 180),
    leviathanCard("SML Geier", "Falke", 1, "german", 190),
    leviathanCard("SML Falke", "Falke", 1, "german", 180),
    leviathanCard("SML Hund", "Falke", 1, "german", 120),
    leviathanCard("SML Wolf", "Falke", 1, "german", 140),
    leviathanCard("SML Bremen", "Bremen", 1, "german", 140),
    leviathanCard("SML Essen", "Bremen", 1, "german", 150),
    leviathanCard("Paris", "Paris", 4, "french", 460),
    leviathanCard("Jean Bart", "Paris", 4, "french", 400),
    leviathanCard("Dunkerque", "Bastille", 4, "french", 420),
    leviathanCard("Louvois", "Bastille", 4, "french", 430),
    leviathanCard("Calais", "Bastille", 4, "french", 420),
    leviathanCard("Bellegarde", "Bastille", 4, "french", 410),
    leviathanCard("Bearn", "Conquent", 3, "french", 320),
    leviathanCard("Ardent", "Conquent", 3, "french", 300),
    leviathanCard("Legion d'Honneur", "Faucon", 2, "french", 230),
    leviathanCard("Jeanne d'Arc", "Faucon", 2, "french", 200),
    leviathanCard("Bretagne", "Faucon", 2, "french", 220),
    leviathanCard("Borgnet", "Faucon", 2, "french", 210),
    leviathanCard("Epervier", "Faucon", 2, "french", 250),
    leviathanCard("Chasseuse", "Faucon", 2, "french", 220),
    leviathanCard("Corse", "Faucon", 2, "french", 200),
    leviathanCard("Geneve", "Faucon", 2, "french", 220),
    leviathanCard("Lave", "Liberte", 2, "french", 200),
    leviathanCard("Pontbriand", "Liberte", 2, "french", 250),
    leviathanCard("Barracuda", "Poisson", 1, "french", 150),
    leviathanCard("Faulx", "Poisson", 1, "french", 160),
    leviathanCard("La Gloire", "Grenouille", 1, "french", 170),
    leviathanCard("Aquitaine", "Grenouille", 1, "french", 170),
    leviathanCard("Normandie", "Grenouille", 1, "french", 170),
    leviathanCard("La Honneur", "Grenouille", 1, "french", 180),
    leviathanCard("Pelletier", "Grenouille", 1, "french", 170),
    leviathanCard("Montcalm", "Grenouille", 1, "french", 160),
    leviathanCard("Montpellier", "Grenouille", 1, "french", 180),
    leviathanCard("Grenadier", "Grenouille", 1, "french", 160),
    leviathanCard("HSwML Ragnar", "Viking", 2, "scandinavian", 210),
    leviathanCard("HSwML Ulfbert", "Viking", 2, "scandinavian", 220),
    leviathanCard("HSwML Åland", "Baltiska", 1, "scandinavian", 180),
    leviathanCard("HSwML Gotland", "Baltiska", 1, "scandinavian", 160),
    leviathanCard("Speer", "Koenigsberg", 2, "swiss", 220),
    leviathanCard("Morgenstern", "Koenigsberg", 2, "swiss", 230),
    leviathanCard("Schwert", "Falke", 1, "swiss", 180),
    leviathanCard("Lanze", "Falke", 1, "swiss", 200),
]);

function getLeviathanData() {
    return levData;
}

function shipTypeName(shipType) {
    switch (shipType) {
        case 1: return "destroyer";
        case 2: return "cruiser";
        case 3: return "battlecruiser";
        case 4: return "battleship";
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
    pointsSpan.innerText = `${points}`;
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

function getDisplayElements(item, button) {
    let element = document.createElement('li');
    if (button) {
        element.append(button);
    }
    let description = getComponentDescription(item);

    let text = assembleListText(item.name, item.points, description);
    element.append(text);

    return element;
}

function addButton(component) {
    let add = document.createElement('button');
    add.title = "Add to fleet";
    add.type = "button";
    add.innerText = "+";
    add.addEventListener("click", () => addToFleet(component));
    return add;
}

function updateAvailableUnits() {
    let leviathans = document.getElementById("levs-list");
    leviathans.innerHTML = '';
    getLeviathanData().forEach((lev) => {
        if (lev.faction == 'any' || lev.faction == document.getElementById("faction-select").value) {
            leviathans.appendChild(getDisplayElements(lev, addButton(lev)));
        }
    });

    let admirals = document.getElementById("admirals-list");
    admirals.innerHTML = '';
    getAdmiralData().forEach((admiral) => {
        if (admiral.faction == 'any' || admiral.faction == document.getElementById("faction-select").value) {
            admirals.appendChild(getDisplayElements(admiral, addButton(admiral)));
        }
    });

    let captains = document.getElementById("captains-list");
    captains.innerHTML = '';
    getCaptainData().forEach((captain) => {
        if (captain.faction == 'any' || captain.faction == document.getElementById("faction-select").value) {
            captains.appendChild(getDisplayElements(captain, addButton(captain)));
        }
    });

    let planes = document.getElementById("planes-list");
    planes.innerHTML = '';
    getPlaneData().forEach((plane) => {
        planes.appendChild(getDisplayElements(plane, addButton(plane)));
    });

    let guns = document.getElementById("al-list");
    guns.innerHTML = '';
    getALGunData().forEach((gun) => {
        guns.appendChild(getDisplayElements(gun, addButton(gun)));
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
        totalPoints += component.points;
        table.append(dataRow([component.name, getComponentDescription(component), component.points]));
    });
    table.append(dataRow(["","", totalPoints]));
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
        totalPoints += component.points;

        let item = document.createElement('li');

        let remove = document.createElement('button');
        remove.title = "Remove from fleet";
        remove.type = "button";
        remove.innerText = "-";
        remove.addEventListener("click", () => removeFromFleet(i));

        item.append(getDisplayElements(component, remove));

        fleetList.appendChild(item);
    });
    document.getElementById("fleet-points").innerText = totalPoints;

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

function listBuildingErrors() {
    let errors = [];
    let fleetFaction = "any";
    currentFleet.forEach((component) => {
        if (component.faction != "any" && component.faction != fleetFaction) {
            if (fleetFaction == "any") {
                fleetFaction = component.faction;
            } else {
                errors.push("All components must be of the same faction.")
            }
        }
    });

    let totalPoints = 0;
    let planePoints = 0;
    currentFleet.forEach((component) => {
        totalPoints += component.points;
        if (component.type == "airplane") {
            planePoints += component.points;
        }
    });
    if (totalPoints > 1000) {
        errors.push("A fleet may have a maximum point value of 1000 points.");
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
        errors.push("A fleet must have a capital ship (battleship or battle cruiser).");
    }
    if (type4Count > 1) {
        errors.push("A fleet may only have one battleship.");
    }
    if (type3Count > 1) {
        errors.push("A fleet may only have one battle cruiser.");
    }
    if (admiralCount > 1) {
        errors.push("Only a single Admiral Card may be included.");
    }
    if (alGunCount > 2) {
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

    currentFleet.forEach((component, i) => {
        if (component.type == "leviathan" || component.type == "captain") {
            for (let j = i + 1; j < currentFleet.length; j++) {
                if (component.name == currentFleet[j].name) {
                    errors.push("Only one of a given Ship or Captain Card may be included.");
                    return;
                }
            }
        }
    });


    return errors;
}

let factionSelect = document.getElementById("faction-select");
[
    "austro-hungarian", 
    "british", 
    "french", 
    "german", 
    "japanese",
    "italian",  
    "russian", 
    "scandinavian", 
    "swiss",
    "american", 
].forEach((factionId) => {
    let item = document.createElement('option');
    item.value = factionId;
    item.innerText = getFactionLongName(factionId);
    factionSelect.appendChild(item);
});
factionSelect.addEventListener("change", () => updateAvailableUnits());

let printButton = document.getElementById("print-button");
printButton.addEventListener("click", () => {
    updatePrintDisplay();
    window.print();
});

updateAvailableUnits();
updateCurrentFleet();
