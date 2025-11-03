function sortByPointsAndName(components) {
    return components.sort((a,b) => a.points == b.points ? a.name.localeCompare(b.name) : b.points - a.points);
}

function getItemByName(list, name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name == name) {
            return list[i];
        }
    }
    return null;
}

function getComponentByName(name) {
    let match = getItemByName(getLeviathanData(), name);
    if (match != null) {
        return match;
    }
    match = getItemByName(getAdmiralData(), name);
    if (match != null) {
        return match;
    }
    match = getItemByName(getPlaneData(), name);
    if (match != null) {
        return match;
    }
    match = getItemByName(getCaptainData(), name);
    if (match != null) {
        return match;
    }
    match = getItemByName(getALGunData(), name);
    if (match != null) {
        return match;
    }
    return null;
}

function planeCard(name, points, sources, link) {
    return { name: name, type: "airplane", faction: "any", points: points, sources: sources, link: link };
}

function getPlaneData() {
    return planeData;
}

function alGunCard(name, points, sources, link) {
    return { name: name, type: "al-gun", faction: "any", points: points, sources: sources, link: link };
}

function getALGunData() {
    return alGunData;
}

function admiralCard(name, points, faction, sources, link) {
    return { name: name, type: "admiral", faction: (faction ? faction : "any"), points: points, sources: sources, link: link };
}

function getAdmiralData() {
    return admiralData;
}

function captainCard(name, points, faction, shipClass, sources, link) {
    return { name: name, type: "captain", faction: faction, shipClass: shipClass, points: points, sources: sources, link: link };
}

function getCaptainData() {
    return captainData;
}

function leviathanCard(name, shipClass, shipType, faction, generic, points, sources, link, slots) {
    return { name: name, type: "leviathan", shipClass: shipClass, shipType: shipType, faction: faction, generic: generic , points: points, sources: sources, link: link, slots: slots ? slots : [] };
}

function getLeviathanData() {
    return levData;
}

const levData = sortByPointsAndName([
    leviathanCard("Kamchatka", "Vladivostok", 4, "russian", false , 440, ["Vladivostok Battleship Pack"], "elements/1.htm", ["precision-crew", "saturation-guns", "steering-gear"]),
    leviathanCard("Siberia", "Vladivostok", 4, "russian", false , 430, ["Vladivostok Battleship Pack"], "elements/2.htm", ["precision-crew", "saturation-guns", "repair-crew", "steering-gear"]),
    leviathanCard("Aleksandr III", "Aleksandr", 4, "russian", false , 420, ["Russian Fleet Box"], "elements/3.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Mariya", "Aleksandr", 4, "russian", false , 440, ["Russian Fleet Box"], "elements/4.htm", ["saturation-guns", "precision-crew", "torpedo", "steering-gear"]),
    leviathanCard("Ivan", "Aleksandr", 4, "russian", false , 430, ["Aleksandr Battleship Pack"], "elements/5.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("Peter", "Aleksandr", 4, "russian", false , 410, ["Aleksandr Battleship Pack"], "elements/6.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("Izmail", "Cathrine", 3, "russian", false , 320, ["Cathrine Battlecruiser Pack"], "elements/7.htm", ["saturation-guns", "precision-crew", "steering-gear"]),
    leviathanCard("Kazarskii", "Cathrine", 3, "russian", false , 300, ["Cathrine Battlecruiser Pack"], "elements/8.htm", ["saturation-guns", "torpedo", "repair-crew"]),
    leviathanCard("Romanov", "Cathrine", 3, "russian", false , 330, ["Kickstarter Ship Cards"], "elements/9.htm", ["precision-crew"]),
    leviathanCard("Aurora", "Kiev", 2, "russian", false , 210, ["Russian Fleet Box"], "elements/10.htm", ["precision-crew"]),
    leviathanCard("Rurik", "Kiev", 2, "russian", false , 210, ["Russian Fleet Box"], "elements/11.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Bayan", "Kiev", 2, "russian", false , 230, ["Kiev Cruiser Pack"], "elements/12.htm", ["precision-crew", "torpedo", "steering-gear"]),
    leviathanCard("Kirov", "Kiev", 2, "russian", false , 220, ["Kiev Cruiser Pack"], "elements/13.htm", []),
    leviathanCard("Alexandra", "Kiev", 2, "russian", false , 240, ["Anastasia Cruiser Pack"], "elements/14.htm", ["precision-crew", "repair-crew", "steering-gear"]),
    leviathanCard("Pallada", "Pallada", 2, "russian", false , 240, ["Pallada Cruiser Pack"], "elements/15.htm", ["steering-gear"]),
    leviathanCard("Triteia", "Pallada", 2, "russian", false , 230, ["Pallada Cruiser Pack"], "elements/16.htm", []),
    leviathanCard("Anastasia", "Berkut", 1, "russian", false , 150, ["Russian Fleet Box"], "elements/17.htm", ["repair-crew"]),
    leviathanCard("Vsadnik", "Berkut", 1, "russian", false , 170, ["Russian Fleet Box"], "elements/18.htm", ["precision-crew"]),
    leviathanCard("Berkut", "Berkut", 1, "russian", false , 190, ["Russian Fleet Box"], "elements/19.htm", ["precision-crew"]),
    leviathanCard("Sterliad", "Berkut", 1, "russian", false , 160, ["Russian Fleet Box"], "elements/20.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Sud'ba", "Berkut", 1, "russian", false , 180, ["Berkut Destroyer Pack"], "elements/21.htm", ["precision-crew"]),
    leviathanCard("Nadezhda", "Berkut", 1, "russian", false , 140, ["Berkut Destroyer Pack"], "elements/22.htm", ["repair-crew", "torpedo"]),
    leviathanCard("Pelikan", "Novik", 1, "russian", false , 140, ["Novik Destroyer Pack"], "elements/23.htm", ["precision-crew", "torpedo", "steering-gear"]),
    leviathanCard("Kit", "Novik", 1, "russian", false , 170, ["Novik Destroyer Pack"], "elements/24.htm", ["repair-crew", "steering-gear"]),
    leviathanCard("USG Virginia", "Frontier", 2, "american", false , 230, ["Frontier Cruiser Pack"], "elements/25.htm", ["ted-guns", "edison", "he-torpedo", "adv-fire-control"]),
    leviathanCard("USG Kansas", "Frontier", 2, "american", false , 240, ["Frontier Cruiser Pack"], "elements/26.htm", ["ted-guns", "edison", "adv-fire-control"]),
    leviathanCard("SML Hohenberg", "Adler", 2, "austro-hungarian", false , 200, ["Adler Cruiser Pack"], "elements/27.htm", ["ram", "steering-gear", "ram-engine"]),
    leviathanCard("SML Habsburg", "Adler", 2, "austro-hungarian", false , 190, ["Adler Cruiser Pack"], "elements/28.htm", ["ram", "sniper-guns", "steering-gear", "ram-engine"]),
    leviathanCard("Ishikawa", "Kawa", 2, "japanese", false , 220, ["Kawa Cruiser Pack"], "elements/29.htm", ["chaff", "saturation-guns", "armored-hull", "saturation-crew"]),
    leviathanCard("Tokushima", "Kawa", 2, "japanese", false , 240, ["Kawa Cruiser Pack"], "elements/30.htm", ["saturation-guns", "armored-hull"]),
    leviathanCard("HML Leviathan", "Leviathan", 4, "british", false , 420, ["Leviathan Battleship Pack", "2012 Ship Cards"], "elements/31.htm", ["saturation-guns"]),
    leviathanCard("HML Medusa", "Leviathan", 4, "british", false , 430, ["Leviathan Battleship Pack", "2012 Ship Cards"], "elements/32.htm", ["saturation-guns", "torpedo"]),
    leviathanCard("HML Munster", "Connaught", 4, "british", false , 440, ["British Fleet Box"], "elements/33.htm", ["saturation-guns", "sniper-guns", "steering-gear"]),
    leviathanCard("HML Wales", "Connaught", 4, "british", false , 450, ["British Fleet Box"], "elements/34.htm", ["saturation-guns", "sniper-guns", "steering-gear"]),
    leviathanCard("HML Leinster", "Connaught", 4, "british", false , 410, ["Connaught Battleship Pack"], "elements/35.htm", ["saturation-guns", "sniper-guns", "steering-gear"]),
    leviathanCard("HML Cornwall", "Connaught", 4, "british", false , 430, ["Connaught Battleship Pack"], "elements/36.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("HML Spion Kop", "Defender", 3, "british", false , 320, ["Defender Battlecruiser Pack", "2012 Ship Cards"], "elements/37.htm", ["saturation-guns"]),
    leviathanCard("HML Mafeking", "Defender", 3, "british", false , 340, ["Defender Battlecruiser Pack", "2012 Ship Cards"], "elements/38.htm", ["sniper-guns", "saturation-guns"]),
    leviathanCard("HML Tiger", "Defender", 3, "british", false , 320, ["Kickstarter Ship Cards"], "elements/39.htm", ["saturation-guns", "torpedo"]),
    leviathanCard("HML Cairo", "Destrier", 2, "british", false , 230, ["British Fleet Box"], "elements/40.htm", ["sniper-guns", "torpedo"]),
    leviathanCard("HML Prometheus", "Destrier", 2, "british", false , 240, ["British Fleet Box"], "elements/41.htm", ["torpedo"]),
    leviathanCard("HML Sydney", "Destrier", 2, "british", false , 220, ["Destrier Cruiser Pack"], "elements/42.htm", ["steering-gear"]),
    leviathanCard("HML Malay", "Destrier", 2, "british", false , 210, ["Destrier Cruiser Pack"], "elements/43.htm", ["sniper-guns", "torpedo"]),
    leviathanCard("HML Punjab", "Destrier", 2, "british", false , 240, ["Amil Dhar Cruiser Pack"], "elements/44.htm", []),
    leviathanCard("HML Courser", "Destrier", 2, "british", false , -1, ["2012 Ship Cards"], "elements/45.htm", []),
    leviathanCard("HML New Zealand", "County", 2, "british", false , 200, ["County Cruiser Pack", "2012 Ship Cards"], "elements/46.htm", []),
    leviathanCard("HML Essex", "County", 2, "british", false , 170, ["County Cruiser Pack", "2012 Ship Cards"], "elements/47.htm", ["torpedo", "steering-gear"]),
    leviathanCard("HML Hertfordshire", "County", 2, "british", false , -1, ["2012 Ship Cards"], "elements/48.htm", []),
    leviathanCard("HML Anfield", "D-Class", 1, "british", false , 160, ["British Fleet Box", "2012 Ship Cards"], "elements/49.htm", ["torpedo"]),
    leviathanCard("HML Beagle", "D-Class", 1, "british", false , 170, ["British Fleet Box", "2012 Ship Cards"], "elements/50.htm", []),
    leviathanCard("HML Dublin", "D-Class", 1, "british", false , 180, ["British Fleet Box", "2012 Ship Cards"], "elements/51.htm", ["sniper-guns"]),
    leviathanCard("HML Belfast", "D-Class", 1, "british", false , 150, ["British Fleet Box", "2012 Ship Cards"], "elements/52.htm", ["sniper-guns", "torpedo", "chaff"]),
    leviathanCard("HML Crow", "D-Class", 1, "british", false , 150, ["D-Class Destroyer Pack", "2012 Ship Cards"], "elements/53.htm", ["steering-gear"]),
    leviathanCard("HML Raven", "D-Class", 1, "british", false , 160, ["D-Class Destroyer Pack", "2012 Ship Cards"], "elements/54.htm", []),
    leviathanCard("HML Trafford", "D-Class", 1, "british", false , -1, ["2012 Ship Cards"], "elements/55.htm", ["torpedo"]),
    leviathanCard("HML Monitor", "G-Class", 1, "british", false , 170, ["G-Class Destroyer Pack"], "elements/56.htm", ["artillery-guns"]),
    leviathanCard("HML Surveyor", "G-Class", 1, "british", false , 160, ["G-Class Destroyer Pack"], "elements/57.htm", ["artillery-guns", "steering-gear"]),
    leviathanCard("Augusto", "Cesare", 4, "italian", false , 430, ["Cesare Battleship Pack"], "elements/58.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("Giulio", "Cesare", 4, "italian", false , 440, ["Cesare Battleship Pack"], "elements/59.htm", ["torpedo", "saturation-guns", "steering-gear"]),
    leviathanCard("Pompeii", "Vulcano", 4, "italian", false , 410, ["Italian Fleet Box"], "elements/60.htm", ["torpedo", "saturation-guns", "imp-steering-gear"]),
    leviathanCard("Vesuvius", "Vulcano", 4, "italian", false , 450, ["Italian Fleet Box"], "elements/61.htm", ["torpedo", "saturation-guns", "imp-steering-gear"]),
    leviathanCard("Etna", "Vulcano", 4, "italian", false , 420, ["Vulcano Battleship Pack"], "elements/62.htm", ["torpedo", "saturation-guns", "imp-steering-gear"]),
    leviathanCard("Stromboli", "Vulcano", 4, "italian", false , 430, ["Vulcano Battleship Pack"], "elements/63.htm", ["torpedo", "saturation-guns", "imp-steering-gear"]),
    leviathanCard("Sabatini", "Vulcano", 4, "italian", false , 480, ["Kickstarter Ship Cards"], "elements/64.htm", ["saturation-guns", "imp-steering-gear"]),
    leviathanCard("Sardegna", "Mare Nostrum", 3, "italian", false , 300, ["Mare Nostrum Battlecruiser Pack"], "elements/65.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Sicilia", "Mare Nostrum", 3, "italian", false , 280, ["Mare Nostrum Battlecruiser Pack"], "elements/66.htm", ["saturation-guns", "torpedo", "imp-steering-gear"]),
    leviathanCard("Marco Polo", "Avventuriero", 2, "italian", false , 220, ["Italian Fleet Box"], "elements/67.htm", ["torpedo"]),
    leviathanCard("Giovanno Caboto", "Avventuriero", 2, "italian", false , 220, ["Italian Fleet Box"], "elements/68.htm", ["torpedo", "imp-steering-gear"]),
    leviathanCard("Cristoforo Colombo", "Avventuriero", 2, "italian", false , 200, ["Avventuriero Cruiser Pack"], "elements/69.htm", ["torpedo"]),
    leviathanCard("Amerigo Vespucci", "Avventuriero", 2, "italian", false , 230, ["Avventuriero Cruiser Pack"], "elements/70.htm", []),
    leviathanCard("Irredentismo", "Avventuriero", 2, "italian", false , 240, ["Castillo Romano Cruiser Pack"], "elements/71.htm", ["torpedo", "imp-steering-gear"]),
    leviathanCard("Augustus", "Gloria", 2, "italian", false , 220, ["Gloria Cruiser Pack"], "elements/72.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Julius", "Gloria", 2, "italian", false , 230, ["Gloria Cruiser Pack"], "elements/73.htm", ["saturation-guns", "imp-steering-gear"]),
    leviathanCard("Andromeda", "Constellazione", 1, "italian", false , 180, ["Italian Fleet Box"], "elements/74.htm", ["torpedo"]),
    leviathanCard("Aquarius", "Constellazione", 1, "italian", false , 160, ["Italian Fleet Box"], "elements/75.htm", ["torpedo"]),
    leviathanCard("Sagittario", "Constellazione", 1, "italian", false , 170, ["Italian Fleet Box"], "elements/76.htm", ["torpedo"]),
    leviathanCard("Cassiopeia", "Constellazione", 1, "italian", false , 210, ["Italian Fleet Box"], "elements/77.htm", []),
    leviathanCard("Aries", "Constellazione", 1, "italian", false , 180, ["Constellazione Destroyer Pack"], "elements/78.htm", ["torpedo"]),
    leviathanCard("Scorpio", "Constellazione", 1, "italian", false , 130, ["Constellazione Destroyer Pack"], "elements/79.htm", []),
    leviathanCard("Rubicon", "Fiume", 1, "italian", false , 150, ["Fiume Destroyer Pack"], "elements/80.htm", ["torpedo"]),
    leviathanCard("Tevere", "Fiume", 1, "italian", false , 170, ["Fiume Destroyer Pack"], "elements/81.htm", ["torpedo"]),
    leviathanCard("SML Preußen", "Prussia", 4, "german", false , 460, ["Prussia Battleship Pack"], "elements/82.htm", ["saturation-guns", "chaff"]),
    leviathanCard("SML Pommern", "Prussia", 4, "german", false , 470, ["Prussia Battleship Pack"], "elements/83.htm", ["saturation-guns"]),
    leviathanCard("SML Kaiser", "Kaiser", 4, "german", false , 420, ["Kaiser Battleship Pack"], "elements/84.htm", ["saturation-guns", "armored-hull", "slip-shaft"]),
    leviathanCard("SML Kaiserin", "Kaiser", 4, "german", false , 420, ["Kaiser Battleship Pack"], "elements/85.htm", ["saturation-guns", "slip-shaft"]),
    leviathanCard("SML Friedrich der Große", "Kaiser", 4, "german", false , 410, ["German Fleet Box"], "elements/86.htm", ["chaff", "saturation-guns", "slip-shaft"]),
    leviathanCard("SML Wilhelm I", "Kaiser", 4, "german", false , 430, ["German Fleet Box"], "elements/87.htm", ["saturation-guns", "armored-hull", "slip-shaft"]),
    leviathanCard("SML Sachsen", "Saxony", 3, "german", false , 290, ["Saxony Battlecruiser Pack"], "elements/88.htm", ["saturation-guns"]),
    leviathanCard("SML Frankfurt", "Saxony", 3, "german", false , 280, ["Saxony Battlecruiser Pack"], "elements/89.htm", ["chaff", "slip-shaft"]),
    leviathanCard("SML Von Zieten", "Saxony", 3, "german", false , 290, ["Kickstarter Ship Cards"], "elements/90.htm", ["armored-hull", "bracket-crew", "slip-shaft"]),
    leviathanCard("SML Greif", "Greif", 2, "german", false , 250, ["Red Baron Cruiser Pack"], "elements/91.htm", []),
    leviathanCard("SML Brandenburg", "Greif", 2, "german", false , 200, ["Starter Box"], "elements/92.htm", ["slip-shaft"]),
    leviathanCard("SML Hannover", "Greif", 2, "german", false , 190, ["Starter Box"], "elements/93.htm", ["chaff"]),
    leviathanCard("SML Bayern", "Greif", 2, "german", false , 220, ["German Fleet Box"], "elements/94.htm", []),
    leviathanCard("SML Lübeck", "Greif", 2, "german", false , 210, ["German Fleet Box"], "elements/95.htm", ["chaff", "bracket-crew"]),
    leviathanCard("SML Hamburg", "Greif", 2, "german", false , 240, ["Greif Cruiser Pack"], "elements/96.htm", []),
    leviathanCard("SML Danzig", "Greif", 2, "german", false , 220, ["Greif Cruiser Pack"], "elements/97.htm", ["slip-shaft", "bracket-crew"]),
    leviathanCard("SML Rheinland", "Koenigsberg", 2, "german", false , 230, ["Koenigsberg Cruiser Pack"], "elements/98.htm", []),
    leviathanCard("SML Königsberg", "Koenigsberg", 2, "german", false , 200, ["Koenigsberg Cruiser Pack"], "elements/99.htm", []),
    leviathanCard("SML Löwe", "Falke", 1, "german", false , 180, ["Starter Box"], "elements/100.htm", []),
    leviathanCard("SML Seelöwe", "Falke", 1, "german", false , 160, ["Starter Box"], "elements/101.htm", ["screen-crew", "chaff", "slip-shaft"]),
    leviathanCard("SML Dachs", "Falke", 1, "german", false , 190, ["Falke Destroyer Pack"], "elements/102.htm", []),
    leviathanCard("SML Vielfraß", "Falke", 1, "german", false , 180, ["Falke Destroyer Pack"], "elements/103.htm", ["slip-shaft"]),
    leviathanCard("SML Geier", "Falke", 1, "german", false , 190, ["German Fleet Box"], "elements/104.htm", ["bracket-crew"]),
    leviathanCard("SML Falke", "Falke", 1, "german", false , 180, ["German Fleet Box"], "elements/105.htm", ["bracket-crew"]),
    leviathanCard("SML Hund", "Falke", 1, "german", false , 120, ["German Fleet Box"], "elements/106.htm", ["slip-shaft", "secondary-engine"]),
    leviathanCard("SML Wolf", "Falke", 1, "german", false , 140, ["German Fleet Box"], "elements/107.htm", ["screen-crew", "chaff", "slip-shaft", "secondary-engine"]),
    leviathanCard("SML Bremen", "Bremen", 1, "german", false , 140, ["Bremen Destroyer Pack"], "elements/108.htm", ["saturation-guns", "slip-shaft"]),
    leviathanCard("SML Essen", "Bremen", 1, "german", false , 150, ["Bremen Destroyer Pack"], "elements/109.htm", ["screen-crew", "torpedo"]),
    leviathanCard("Paris", "Paris", 4, "french", false , 460, ["Paris Battleship Pack", "2012 Ship Cards"], "elements/110.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Jean Bart", "Paris", 4, "french", false , 400, ["Paris Battleship Pack", "2012 Ship Cards"], "elements/111.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Dunkerque", "Bastille", 4, "french", false , 420, ["Bastille Battleship Pack"], "elements/112.htm", ["saturation-guns", "he-torpedo", "steering-gear"]),
    leviathanCard("Louvois", "Bastille", 4, "french", false , 430, ["Bastille Battleship Pack"], "elements/113.htm", ["saturation-guns", "he-torpedo", "steering-gear"]),
    leviathanCard("Calais", "Bastille", 4, "french", false , 420, ["French Fleet Box"], "elements/114.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Bellegarde", "Bastille", 4, "french", false , 410, ["French Fleet Box"], "elements/115.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Béarn", "Conquent", 3, "french", false , 320, ["Conquent Battlecruiser Pack", "2012 Ship Cards"], "elements/116.htm", []),
    leviathanCard("Ardent", "Conquent", 3, "french", false , 300, ["Conquent Battlecruiser Pack", "2012 Ship Cards"], "elements/117.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("La Fantasque", "Conquent", 3, "french", false , -1, ["2012 Ship Cards"], "elements/118.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Legion d'Honneur", "Faucon", 2, "french", false , 230, ["Rene Fonck Cruiser Pack"], "elements/119.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("Jeanne d'Arc", "Faucon", 2, "french", false , 200, ["Starter Box"], "elements/120.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("Bretagne", "Faucon", 2, "french", false , 220, ["Starter Box"], "elements/121.htm", ["steering-gear"]),
    leviathanCard("Borgnet", "Faucon", 2, "french", false , 210, ["Kickstarter Ship Cards"], "elements/122.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Epervier", "Faucon", 2, "french", false , 250, ["French Fleet Box"], "elements/123.htm", ["saturation-guns", "torpedo", "steering-gear"]),
    leviathanCard("Chasseuse", "Faucon", 2, "french", false , 220, ["French Fleet Box"], "elements/124.htm", ["torpedo"]),
    leviathanCard("Corse", "Faucon", 2, "french", false , 200, ["Faucon Cruiser Pack"], "elements/125.htm", ["saturation-guns", "steering-gear"]),
    leviathanCard("Geneve", "Faucon", 2, "french", false , 220, ["Faucon Cruiser Pack"], "elements/126.htm", []),
    leviathanCard("Lave", "Liberté", 2, "french", false , 200, ["Liberte Cruiser Pack", "2012 Ship Cards"], "elements/127.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Pontbriand", "Liberté", 2, "french", false , 250, ["Liberte Cruiser Pack", "2012 Ship Cards"], "elements/128.htm", []),
    leviathanCard("Barracuda", "Poisson", 1, "french", false , 150, ["Poisson Destroyer Pack"], "elements/129.htm", ["he-torpedo", "steering-gear"]),
    leviathanCard("Faulx", "Poisson", 1, "french", false , 160, ["Poisson Destroyer Pack"], "elements/130.htm", ["he-torpedo", "steering-gear"]),
    leviathanCard("La Gloire", "Grenouille", 1, "french", false , 170, ["Starter Box", "2012 Ship Cards"], "elements/131.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Aquitaine", "Grenouille", 1, "french", false , 170, ["Starter Box", "2012 Ship Cards"], "elements/132.htm", []),
    leviathanCard("Normandie", "Grenouille", 1, "french", false , 170, ["Grenouille Destroyer Pack", "2012 Ship Cards"], "elements/133.htm", []),
    leviathanCard("L'Honneur", "Grenouille", 1, "french", false , 180, ["Grenouille Destroyer Pack", "2012 Ship Cards"], "elements/134.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Pelletier", "Grenouille", 1, "french", false , 170, ["French Fleet Box", "2012 Ship Cards"], "elements/135.htm", []),
    leviathanCard("Montcalm", "Grenouille", 1, "french", false , 160, ["French Fleet Box", "2012 Ship Cards"], "elements/136.htm", ["torpedo", "steering-gear"]),
    leviathanCard("Montpellier", "Grenouille", 1, "french", false , 180, ["French Fleet Box", "2012 Ship Cards"], "elements/137.htm", []),
    leviathanCard("Grenadier", "Grenouille", 1, "french", false , 160, ["French Fleet Box", "2012 Ship Cards"], "elements/138.htm", ["steering-gear"]),
    leviathanCard("HSwML Ragnar", "Viking", 2, "scandinavian", false , 210, ["Operation Ragnar"], "elements/139.htm", ["shot-cannon", "slip-shaft"]),
    leviathanCard("HSwML Ulfbert", "Viking", 2, "scandinavian", false , 220, ["Operation Ragnar"], "elements/140.htm", ["slip-shaft"]),
    leviathanCard("HSwML Åland", "Baltiska", 1, "scandinavian", false , 180, ["Operation Ragnar"], "elements/141.htm", ["shot-cannon", "slip-shaft"]),
    leviathanCard("HSwML Gotland", "Baltiska", 1, "scandinavian", false , 160, ["Operation Ragnar"], "elements/142.htm", ["shot-cannon", "slip-shaft"]),
    leviathanCard("Speer", "Koenigsburg", 2, "swiss", false , 220, ["Operation Hannibal"], "elements/143.htm", ["chaff", "steering-gear", "mine-layer"]),
    leviathanCard("Morgenstern", "Koenigsburg", 2, "swiss", false , 230, ["Operation Hannibal"], "elements/144.htm", ["chaff", "imp-steering-gear"]),
    leviathanCard("Schwert", "Falke", 1, "swiss", false , 180, ["Operation Hannibal"], "elements/145.htm", ["slip-shaft", "mine-layer"]),
    leviathanCard("Lanze", "Falke", 1, "swiss", false , 200, ["Operation Hannibal"], "elements/146.htm", ["mine-layer"]),
    leviathanCard("Troop Transport", "Hansa", 8, "any", true , -1, ["Operation Ragnar"], "elements/147.htm", ["steering-gear"]),
    leviathanCard("Aerial Fortress", "Hindenburg", 5, "german", true , -1, ["Operation Hannibal"], "elements/205.htm", ["fort-shaft", "saturation-guns"]),
    leviathanCard("Aerial Fortress", "Vauban", 5, "french", true , -1, ["Operation Hannibal"], "elements/206.htm", ["fort-shaft", "saturation-guns"])
]);

const planeData = sortByPointsAndName([
    planeCard("Fighter, Green", 20, ["Starter Box", "Plane Token Pack"], "elements/148.htm"),
    planeCard("Fighter, Veteran", 30, ["Starter Box", "Plane Token Pack"], "elements/149.htm"),
    planeCard("Bomber, Green", 20, ["Starter Box", "Plane Token Pack"], "elements/150.htm"),
    planeCard("Bomber, Veteran", 40, ["Starter Box", "Plane Token Pack"], "elements/151.htm"),
    planeCard("Spotter, Green", 30, ["Plane Token Pack"], "elements/152.htm"),
    planeCard("Spotter, Veteran", 40, ["Plane Token Pack"], "elements/153.htm"),
    planeCard("Heavy Bomber, Green", 40, ["Plane Token Pack"], "elements/154.htm"),
    planeCard("Heavy Bomber, Veteran", 60, ["Plane Token Pack"], "elements/155.htm"),
    planeCard("Turret Fighter, Green", 20, ["Plane Token Pack"], "elements/156.htm"),
    planeCard("Turret Fighter, Veteran", 30, ["Plane Token Pack"], "elements/157.htm"),
    planeCard("Interceptor, Green", 20, ["Plane Token Pack"], "elements/158.htm"),
    planeCard("Interceptor, Veteran", 30, ["Plane Token Pack"], "elements/159.htm"),
    planeCard("Torpedo Bomber, Green", 30, ["Plane Token Pack"], "elements/160.htm"),
    planeCard("Torpedo Bomber, Veteran", 40, ["Plane Token Pack"], "elements/161.htm")
]);

const captainData = sortByPointsAndName([
    captainCard("Anastasia Romanova", 10, "russian", "Kiev", ["Anastasia Cruiser Pack"], "elements/200.htm"),
    captainCard("Amil Dhar", 20, "british", "Destrier", ["Amil Dhar Cruiser Pack"], "elements/201.htm"),
    captainCard("Rene Fonck", 20, "french", "Faucon", ["Rene Fonck Cruiser Pack"], "elements/202.htm"),
    captainCard("Manfred von Richthofen", 30, "german", "Greif", ["Red Baron Cruiser Pack"], "elements/203.htm"),
    captainCard("Castillo Romano", 20, "italian", "Avventuriero", ["Castillo Romano Cruiser Pack"], "elements/204.htm")
]);

const admiralData = sortByPointsAndName([
    admiralCard("Airman", 10, "any", ["Kickstarter Admiral Cards"], "elements/165.htm"),
    admiralCard("Lieutenant", 20, "any", ["Kickstarter Admiral Cards"], "elements/166.htm"),
    admiralCard("Commander", 30, "any", ["Kickstarter Admiral Cards"], "elements/167.htm"),
    admiralCard("Rear Admiral", 40, "any", ["Kickstarter Admiral Cards"], "elements/168.htm"),
    admiralCard("Sky Admiral", 50, "any", ["Kickstarter Admiral Cards"], "elements/169.htm"),
    admiralCard("Improved Keel", 10, "any", ["Starter Box"], "elements/170.htm"),
    admiralCard("Breaking the Keel", 20, "any", ["Starter Box"], "elements/171.htm"),
    admiralCard("Type Reduction", 30, "any", ["Starter Box"], "elements/172.htm"),
    admiralCard("Tesla Support", 40, "any", ["Starter Box"], "elements/173.htm"),
    admiralCard("Repair Bonus", 50, "any", ["Starter Box"], "elements/174.htm"),
    admiralCard("Reinforced Keel", 10, "italian", ["Italian Fleet Box"], "elements/175.htm"),
    admiralCard("Positioning Expert", 20, "italian", ["Italian Fleet Box"], "elements/176.htm"),
    admiralCard("Maneuvering Expert", 30, "italian", ["Italian Fleet Box"], "elements/177.htm"),
    admiralCard("Torpedo Monitor", 40, "italian", ["Italian Fleet Box"], "elements/178.htm"),
    admiralCard("Master of Torpedoes", 50, "italian", ["Italian Fleet Box"], "elements/179.htm"),
    admiralCard("Extra Airmen", 10, "british", ["British Fleet Box"], "elements/180.htm"),
    admiralCard("Tight Spin Evasions", 20, "british", ["British Fleet Box"], "elements/181.htm"),
    admiralCard("Keel Cracking", 30, "british", ["British Fleet Box"], "elements/182.htm"),
    admiralCard("Artillery Expert", 40, "british", ["British Fleet Box"], "elements/183.htm"),
    admiralCard("Master of Weapons", 50, "british", ["British Fleet Box"], "elements/184.htm"),
    admiralCard("Rapid Repair", 10, "russian", ["Russian Fleet Box"], "elements/185.htm"),
    admiralCard("Precision Shots", 20, "russian", ["Russian Fleet Box"], "elements/186.htm"),
    admiralCard("Quick Crew Deployment", 30, "russian", ["Russian Fleet Box"], "elements/187.htm"),
    admiralCard("Double Shifts", 40, "russian", ["Russian Fleet Box"], "elements/188.htm"),
    admiralCard("Master of Repair", 50, "russian", ["Russian Fleet Box"], "elements/189.htm"),
    admiralCard("Makeshift Engine", 10, "french", ["French Fleet Box"], "elements/190.htm"),
    admiralCard("High Impact Torpedos", 20, "french", ["French Fleet Box"], "elements/191.htm"),
    admiralCard("Torpedo Crews", 30, "french", ["French Fleet Box"], "elements/192.htm"),
    admiralCard("Torpedo Sights", 40, "french", ["French Fleet Box"], "elements/193.htm"),
    admiralCard("Engineering Expert", 50, "french", ["French Fleet Box"], "elements/194.htm"),
    admiralCard("Focused Gunners", 10, "german", ["German Fleet Box"], "elements/195.htm"),
    admiralCard("Hard Burn", 20, "german", ["German Fleet Box"], "elements/196.htm"),
    admiralCard("Armored Hulls", 30, "german", ["German Fleet Box"], "elements/197.htm"),
    admiralCard("Chaff Experts", 40, "german", ["German Fleet Box"], "elements/198.htm"),
    admiralCard("Balanced Vessels", 50, "german", ["German Fleet Box"], "elements/199.htm")
]);

const alGunData = sortByPointsAndName([
    alGunCard("Semi-Mobile Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"], "elements/162.htm"),
    alGunCard("Mobile Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"], "elements/163.htm"),
    alGunCard("High-Mobility Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"], "elements/164.htm")
]);
