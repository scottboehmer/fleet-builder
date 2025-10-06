function sortByPointsAndName(components) {
    return components.sort((a,b) => a.points == b.points ? a.name.localeCompare(b.name) : b.points - a.points);
}

function planeCard(name, points, sources) {
    return { name: name, type: "airplane", faction: "any", points: points, sources: sources};
}

function getPlaneData() {
    return planeData;
}

function alGunCard(name, points, sources) {
    return { name: name, type: "al-gun", faction: "any", points: points, sources: sources };
}

function getALGunData() {
    return alGunData;
}

function admiralCard(name, points, faction, sources) {
    return { name: name, type: "admiral", faction: (faction ? faction : "any"), points: points, sources: sources };
}

function getAdmiralData() {
    return admiralData;
}

function captainCard(name, points, faction, shipClass, sources) {
    return { name: name, type: "captain", faction: faction, shipClass: shipClass, points: points, sources: sources };
}

function getCaptainData() {
    return captainData;
}

function leviathanCard(name, shipClass, shipType, faction, points, sources, link) {
    return { name: name, type: "leviathan", shipClass: shipClass, shipType: shipType, faction: faction, points: points, sources: sources, link: link };
}

function getLeviathanData() {
    return levData;
}

const levData = sortByPointsAndName([
    leviathanCard("Kamchatka", "Vladivostok", 4, "russian", 440, ["Vladivostok Battleship Pack"]),
    leviathanCard("Siberia", "Vladivostok", 4, "russian", 430, ["Vladivostok Battleship Pack"]),
    leviathanCard("Aleksandr III", "Aleksandr", 4, "russian", 420, ["Russian Fleet Box"]),
    leviathanCard("Mariya", "Aleksandr", 4, "russian", 440, ["Russian Fleet Box"]),
    leviathanCard("Ivan", "Aleksandr", 4, "russian", 430, ["Aleksandr Battleship Pack"]),
    leviathanCard("Peter", "Aleksandr", 4, "russian", 410, ["Aleksandr Battleship Pack"]),
    leviathanCard("Izmail", "Cathrine", 3, "russian", 320, ["Cathrine Battlecruiser Pack"]),
    leviathanCard("Kazarskii", "Cathrine", 3, "russian", 300, ["Cathrine Battlecruiser Pack"]),
    leviathanCard("Romanov", "Cathrine", 3, "russian", 330, ["Kickstarter Ship Cards"]),
    leviathanCard("Aurora", "Kiev", 2, "russian", 210, ["Russian Fleet Box"]),
    leviathanCard("Rurik", "Kiev", 2, "russian", 210, ["Russian Fleet Box"]),
    leviathanCard("Bayan", "Kiev", 2, "russian", 230, ["Kiev Cruiser Pack"]),
    leviathanCard("Kirov", "Kiev", 2, "russian", 220, ["Kiev Cruiser Pack"]),
    leviathanCard("Alexandra", "Kiev", 2, "russian", 240, ["Anastasia Cruiser Pack"]),
    leviathanCard("Pallada", "Pallada", 2, "russian", 240, ["Pallada Cruiser Pack"]),
    leviathanCard("Triteia", "Pallada", 2, "russian", 230, ["Pallada Cruiser Pack"]),
    leviathanCard("Anastasia", "Berkut", 1, "russian", 150, ["Russian Fleet Box"]),
    leviathanCard("Vsadnik", "Berkut", 1, "russian", 170, ["Russian Fleet Box"]),
    leviathanCard("Berkut", "Berkut", 1, "russian", 190, ["Russian Fleet Box"]),
    leviathanCard("Sterliad", "Berkut", 1, "russian", 160, ["Russian Fleet Box"]),
    leviathanCard("Sud'ba", "Berkut", 1, "russian", 180, ["Berkut Destroyer Pack"]),
    leviathanCard("Nadeyat'sya", "Berkut", 1, "russian", 140, ["Berkut Destroyer Pack"]),
    leviathanCard("Pelikan", "Novik", 1, "russian", 140, ["Novik Destroyer Pack"]),
    leviathanCard("Kit", "Novik", 1, "russian", 170, ["Novik Destroyer Pack"]),
    leviathanCard("USG Virginia", "Frontier", 2, "american", 230, ["Frontier Cruiser Pack"]),
    leviathanCard("USG Kansas", "Frontier", 2, "american", 240, ["Frontier Cruiser Pack"]),
    leviathanCard("SML Hohenberg", "Adler", 2, "austro-hungarian", 200, ["Adler Cruiser Pack"]),
    leviathanCard("SML Habsburg", "Adler", 2, "austro-hungarian", 190, ["Adler Cruiser Pack"]),
    leviathanCard("Ishikawa", "Kawa", 2, "japanese", 220, ["Kawa Cruiser Pack"]),
    leviathanCard("Tokushima", "Kawa", 2, "japanese", 240, ["Kawa Cruiser Pack"]),
    leviathanCard("HML Leviathan", "Leviathan", 4, "british", 420, ["Leviathan Battleship Pack", "2012 Ship Cards"]),
    leviathanCard("HML Medusa", "Leviathan", 4, "british", 430, ["Leviathan Battleship Pack", "2012 Ship Cards"]),
    leviathanCard("HML Munster", "Connaught", 4, "british", 440, ["British Fleet Box"]),
    leviathanCard("HML Wales", "Connaught", 4, "british", 450, ["British Fleet Box"]),
    leviathanCard("HML Leinster", "Connaught", 4, "british", 410, ["Connaught Battleship Pack"]),
    leviathanCard("HML Cornwall", "Connaught", 4, "british", 430, ["Connaught Battleship Pack"]),
    leviathanCard("HML Spion Kop", "Defender", 3, "british", 320, ["Defender Battlecruiser Pack", "2012 Ship Cards"]),
    leviathanCard("HML Mafeking", "Defender", 3, "british", 340, ["Defender Battlecruiser Pack", "2012 Ship Cards"]),
    leviathanCard("HML Tiger", "Defender", 3, "british", 320, ["Kickstarter Ship Cards"]),
    leviathanCard("HML Cairo", "Destrier", 2, "british", 230, ["British Fleet Box"]),
    leviathanCard("HML Prometheus", "Destrier", 2, "british", 240, ["British Fleet Box"]),
    leviathanCard("HML Sydney", "Destrier", 2, "british", 220, ["Destrier Cruiser Pack"]),
    leviathanCard("HML Malay", "Destrier", 2, "british", 210, ["Destrier Cruiser Pack"]),
    leviathanCard("HML Punjab", "Destrier", 2, "british", 240, ["Amil Dhar Cruiser Pack"]),
    leviathanCard("HML Courser", "Destrier", 2, "british", -1, ["2012 Ship Cards"]),
    leviathanCard("HML New Zealand", "County", 2, "british", 200, ["County Cruiser Pack", "2012 Ship Cards"]),
    leviathanCard("HML Essex", "County", 2, "british", 170, ["County Cruiser Pack", "2012 Ship Cards"]),
    leviathanCard("HML Hertfordshire", "County", 2, "british", -1, ["2012 Ship Cards"]),
    leviathanCard("HML Anfield", "D-Class", 1, "british", 160, ["British Fleet Box", "2012 Ship Cards"]),
    leviathanCard("HML Beagle", "D-Class", 1, "british", 170, ["British Fleet Box", "2012 Ship Cards"]),
    leviathanCard("HML Dublin", "D-Class", 1, "british", 180, ["British Fleet Box", "2012 Ship Cards"]),
    leviathanCard("HML Belfast", "D-Class", 1, "british", 150, ["British Fleet Box", "2012 Ship Cards"]),
    leviathanCard("HML Crow", "D-Class", 1, "british", 150, ["D-Class Destroyer Pack", "2012 Ship Cards"]),
    leviathanCard("HML Raven", "D-Class", 1, "british", 160, ["D-Class Destroyer Pack", "2012 Ship Cards"]),
    leviathanCard("HML Trafford", "D-Class", 1, "british", -1, ["2012 Ship Cards"]),
    leviathanCard("HML Monitor", "G-Class", 1, "british", 170, ["G-Class Destroyer Pack"]),
    leviathanCard("HML Surveyor", "G-Class", 1, "british", 160, ["G-Class Destroyer Pack"]),
    leviathanCard("Augusto", "Cesare", 4, "italian", 430, ["Cesare Battleship Pack"]),
    leviathanCard("Giulio", "Cesare", 4, "italian", 440, ["Cesare Battleship Pack"]),
    leviathanCard("Pompeii", "Vulcano", 4, "italian", 410, ["Italian Fleet Box"]),
    leviathanCard("Vesuvius", "Vulcano", 4, "italian", 450, ["Italian Fleet Box"]),
    leviathanCard("Etna", "Vulcano", 4, "italian", 420, ["Vulcano Battleship Pack"]),
    leviathanCard("Stromboli", "Vulcano", 4, "italian", 430, ["Vulcano Battleship Pack"]),
    leviathanCard("Sabatini", "Vulcano", 4, "italian", 480, ["Kickstarter Ship Cards"]),
    leviathanCard("Sardegna", "Mare Nostrum", 3, "italian", 300, ["Mare Nostrum Battlecruiser Pack"]),
    leviathanCard("Sicilia", "Mare Nostrum", 3, "italian", 280, ["Mare Nostrum Battlecruiser Pack"]),
    leviathanCard("Marco Polo", "Avventuriero", 2, "italian", 220, ["Italian Fleet Box"]),
    leviathanCard("Giovanno Caboto", "Avventuriero", 2, "italian", 220, ["Italian Fleet Box"]),
    leviathanCard("Cristoforo Colombo", "Avventuriero", 2, "italian", 200, ["Avventuriero Cruiser Pack"]),
    leviathanCard("Amerigo Vespucci", "Avventuriero", 2, "italian", 230, ["Avventuriero Cruiser Pack"]),
    leviathanCard("Irredentismo", "Avventuriero", 2, "italian", 240, ["Castillo Cruiser Pack"]),
    leviathanCard("Augustus", "Gloria", 2, "italian", 220, ["Gloria Cruiser Pack"]),
    leviathanCard("Julius", "Gloria", 2, "italian", 230, ["Gloria Cruiser Pack"]),
    leviathanCard("Andromeda", "Constellazione", 1, "italian", 180, ["Italian Fleet Box"]),
    leviathanCard("Aquarius", "Constellazione", 1, "italian", 160, ["Italian Fleet Box"]),
    leviathanCard("Sagittario", "Constellazione", 1, "italian", 170, ["Italian Fleet Box"]),
    leviathanCard("Cassiopeia", "Constellazione", 1, "italian", 210, ["Italian Fleet Box"]),
    leviathanCard("Aries", "Constellazione", 1, "italian", 180, ["Constellazione Destroyer Pack"]),
    leviathanCard("Scorpio", "Constellazione", 1, "italian", 130, ["Constellazione Destroyer Pack"]),
    leviathanCard("Rubicon", "Fiume", 1, "italian", 150, ["Fiume Destroyer Pack"]),
    leviathanCard("Tevere", "Fiume", 1, "italian", 170, ["Fiume Destroyer Pack"]),
    leviathanCard("SML Preußen", "Prussia", 4, "german", 460, ["Prussia Battleship Pack"]),
    leviathanCard("SML Pommern", "Prussia", 4, "german", 470, ["Prussia Battleship Pack"]),
    leviathanCard("SML Kaiser", "Kaiser", 4, "german", 420, ["German Fleet Box"]),
    leviathanCard("SML Kaiserin", "Kaiser", 4, "german", 420, ["German Fleet Box"]),
    leviathanCard("SML Friedrich der Große", "Kaiser", 4, "german", 410, ["Kaiser Battleship Pack"]),
    leviathanCard("SML Wilhelm", "Kaiser", 4, "german", 430, ["Kaiser Battleship Pack"]),
    leviathanCard("SML Sachsen", "Saxony", 3, "german", 290, ["Saxony Battlecruiser Pack"]),
    leviathanCard("SML Frankfurt", "Saxony", 3, "german", 280, ["Saxony Battlecruiser Pack"]),
    leviathanCard("SML Von Zieten", "Saxony", 3, "german", 290, ["Kickstarter Ship Cards"]),
    leviathanCard("SML Greif", "Greif", 2, "german", 250, ["Red Baron Cruiser Pack"]),
    leviathanCard("SML Brandenburg", "Greif", 2, "german", 200, ["Starter Box"], "elements/2.htm"),
    leviathanCard("SML Hannover", "Greif", 2, "german", 190, ["Starter Box"], "elements/1.htm"),
    leviathanCard("SML Bayern", "Greif", 2, "german", 220, ["German Fleet Box"]),
    leviathanCard("SML Lübeck", "Greif", 2, "german", 210, ["German Fleet Box"]),
    leviathanCard("SML Hamburg", "Greif", 2, "german", 240, ["Greif Cruiser Pack"]),
    leviathanCard("SML Danzig", "Greif", 2, "german", 220, ["Greif Cruiser Pack"]),
    leviathanCard("SML Rheinland", "Koenigsburg", 2, "german", 230, ["Koenigsberg Cruiser Pack"]),
    leviathanCard("SML Königsberg", "Koenigsburg", 2, "german", 200, ["Koenigsberg Cruiser Pack"]),
    leviathanCard("SML Löwe", "Falke", 1, "german", 180, ["Starter Box"], "elements/7.htm"),
    leviathanCard("SML Seelöwe", "Falke", 1, "german", 160, ["Starter Box"], "elements/8.htm"),
    leviathanCard("SML Dachs", "Falke", 1, "german", 190, ["German Fleet Box"]),
    leviathanCard("SML Vielfraß", "Falke", 1, "german", 180, ["German Fleet Box"]),
    leviathanCard("SML Geier", "Falke", 1, "german", 190, ["German Fleet Box"]),
    leviathanCard("SML Falke", "Falke", 1, "german", 180, ["German Fleet Box"]),
    leviathanCard("SML Hund", "Falke", 1, "german", 120, ["Falke Destroyer Pack"]),
    leviathanCard("SML Wolf", "Falke", 1, "german", 140, ["Falke Destroyer Pack"]),
    leviathanCard("SML Bremen", "Bremen", 1, "german", 140, ["Bremen Destroyer Pack"]),
    leviathanCard("SML Essen", "Bremen", 1, "german", 150, ["Bremen Destroyer Pack"]),
    leviathanCard("Paris", "Paris", 4, "french", 460, ["Paris Battleship Pack", "2012 Ship Cards"]),
    leviathanCard("Jean Bart", "Paris", 4, "french", 400, ["Paris Battleship Pack", "2012 Ship Cards"]),
    leviathanCard("Dunkerque", "Bastille", 4, "french", 420, ["French Fleet Box"]),
    leviathanCard("Louvois", "Bastille", 4, "french", 430, ["French Fleet Box"]),
    leviathanCard("Calais", "Bastille", 4, "french", 420, ["Bastille Battleship Pack"]),
    leviathanCard("Bellegarde", "Bastille", 4, "french", 410, ["Bastille Battleship Pack"]),
    leviathanCard("Béarn", "Conquent", 3, "french", 320, ["Conquent Battlecruiser Pack", "2012 Ship Cards"]),
    leviathanCard("Ardent", "Conquent", 3, "french", 300, ["Conquent Battlecruiser Pack", "2012 Ship Cards"]),
    leviathanCard("La Fantasque", "Conquent", 3, "french", -1, ["2012 Ship Cards"]),
    leviathanCard("Legion d'Honneur", "Faucon", 2, "french", 230, ["Rene Fonck Cruiser Pack"]),
    leviathanCard("Jeanne d'Arc", "Faucon", 2, "french", 200, ["Starter Box"], "elements/5.htm"),
    leviathanCard("Bretagne", "Faucon", 2, "french", 220, ["Starter Box"], "elements/3.htm"),
    leviathanCard("Borgnet", "Faucon", 2, "french", 210, ["Kickstarter Ship Cards"]),
    leviathanCard("Epervier", "Faucon", 2, "french", 250, ["French Fleet Box"]),
    leviathanCard("Chasseuse", "Faucon", 2, "french", 220, ["French Fleet Box"]),
    leviathanCard("Corse", "Faucon", 2, "french", 200, ["Faucon Cruiser Pack"]),
    leviathanCard("Geneve", "Faucon", 2, "french", 220, ["Faucon Cruiser Pack"]),
    leviathanCard("Lave", "Liberté", 2, "french", 200, ["Liberte Cruiser Pack", "2012 Ship Cards"]),
    leviathanCard("Pontbriand", "Liberté", 2, "french", 250, ["Liberte Cruiser Pack", "2012 Ship Cards"]),
    leviathanCard("Barracuda", "Poisson", 1, "french", 150, ["Poisson Destroyer Pack"]),
    leviathanCard("Faulx", "Poisson", 1, "french", 160, ["Poisson Destroyer Pack"]),
    leviathanCard("La Gloire", "Grenouille", 1, "french", 170, ["Starter Box", "2012 Ship Cards"], "elements/6.htm"),
    leviathanCard("Aquitaine", "Grenouille", 1, "french", 170, ["Starter Box", "2012 Ship Cards"], "elements/1.htm"),
    leviathanCard("Normandie", "Grenouille", 1, "french", 170, ["French Fleet Box", "2012 Ship Cards"]),
    leviathanCard("L'Honneur", "Grenouille", 1, "french", 180, ["French Fleet Box", "2012 Ship Cards"]),
    leviathanCard("Pelletier", "Grenouille", 1, "french", 170, ["French Fleet Box", "2012 Ship Cards"]),
    leviathanCard("Montcalm", "Grenouille", 1, "french", 160, ["French Fleet Box", "2012 Ship Cards"]),
    leviathanCard("Montpellier", "Grenouille", 1, "french", 180, ["Grenouille Destroyer Pack", "2012 Ship Cards"]),
    leviathanCard("Grenadier", "Grenouille", 1, "french", 160, ["Grenouille Destroyer Pack", "2012 Ship Cards"]),
    leviathanCard("HSwML Ragnar", "Viking", 2, "scandinavian", 210, ["Operation Ragnar"]),
    leviathanCard("HSwML Ulfbert", "Viking", 2, "scandinavian", 220, ["Operation Ragnar"]),
    leviathanCard("HSwML Åland", "Baltiska", 1, "scandinavian", 180, ["Operation Ragnar"]),
    leviathanCard("HSwML Gotland", "Baltiska", 1, "scandinavian", 160, ["Operation Ragnar"]),
    leviathanCard("Speer", "Koenigsburg", 2, "swiss", 220, ["Operation Hannibal"]),
    leviathanCard("Morgenstern", "Koenigsburg", 2, "swiss", 230, ["Operation Hannibal"]),
    leviathanCard("Schwert", "Falke", 1, "swiss", 180, ["Operation Hannibal"]),
    leviathanCard("Lanze", "Falke", 1, "swiss", 200, ["Operation Hannibal"]),
    leviathanCard("Troop Transport", "Hansa", 8, "any", -1, ["Operation Ragnar"])
]);

const planeData = sortByPointsAndName([
    planeCard("Fighter, Green", 20, ["Starter Box", "Plane Token Pack"]),
    planeCard("Fighter, Veteran", 30, ["Starter Box", "Plane Token Pack"]),
    planeCard("Bomber, Green", 20, ["Starter Box", "Plane Token Pack"]),
    planeCard("Bomber, Veteran", 40, ["Starter Box", "Plane Token Pack"]),
    planeCard("Spotter, Green", 30, ["Plane Token Pack"]),
    planeCard("Spotter, Veteran", 40, ["Plane Token Pack"]),
    planeCard("Heavy Bomber, Green", 40, ["Plane Token Pack"]),
    planeCard("Heavy Bomber, Veteran", 60, ["Plane Token Pack"]),
    planeCard("Turret Fighter, Green", 20, ["Plane Token Pack"]),
    planeCard("Turret Fighter, Veteran", 30, ["Plane Token Pack"]),
    planeCard("Interceptor, Green", 20, ["Plane Token Pack"]),
    planeCard("Interceptor, Veteran", 30, ["Plane Token Pack"]),
    planeCard("Torpedo Bomber, Green", 30, ["Plane Token Pack"]),
    planeCard("Torpedo Bomber, Veteran", 40, ["Plane Token Pack"])
]);

const captainData = sortByPointsAndName([
    captainCard("Anastasia Romanova", 10, "russian", "Kiev", ["Anastasia Cruiser Pack"]),
    captainCard("Amil Dhar", 20, "british", "Destrier", ["Amil Dhar Cruiser Pack"]),
    captainCard("Rene Fonck", 20, "french", "Faucon", ["Rene Fonck Cruiser Pack"]),
    captainCard("Manfred von Richthofen", 30, "german", "Greif", ["Red Baron Cruiser Pack"]),
    captainCard("Castillo Romano", 20, "italian", "Avventuriero", ["Castillo Romano Cruiser Pack"])
]);

const admiralData = sortByPointsAndName([
    admiralCard("Airman", 10, "any", ["Kickstarter Admiral Cards"]),
    admiralCard("Lieutenant", 20, "any", ["Kickstarter Admiral Cards"]),
    admiralCard("Commander", 30, "any", ["Kickstarter Admiral Cards"]),
    admiralCard("Rear Admiral", 40, "any", ["Kickstarter Admiral Cards"]),
    admiralCard("Sky Admiral", 50, "any", ["Kickstarter Admiral Cards"]),
    admiralCard("Improved Keel", 10, "any", ["Starter Box"]),
    admiralCard("Breaking the Keel", 20, "any", ["Starter Box"]),
    admiralCard("Type Reduction", 30, "any", ["Starter Box"]),
    admiralCard("Tesla Support", 40, "any", ["Starter Box"]),
    admiralCard("Repair Bonus", 50, "any", ["Starter Box"]),
    admiralCard("Reinforced Keel", 10, "italian", ["Italian Fleet Box"]),
    admiralCard("Positioning Expert", 20, "italian", ["Italian Fleet Box"]),
    admiralCard("Maneuvering Expert", 30, "italian", ["Italian Fleet Box"]),
    admiralCard("Torpedo Monitor", 40, "italian", ["Italian Fleet Box"]),
    admiralCard("Master of Torpedoes", 50, "italian", ["Italian Fleet Box"]),
    admiralCard("Extra Airmen", 10, "british", ["British Fleet Box"]),
    admiralCard("Tight Spin Evasions", 20, "british", ["British Fleet Box"]),
    admiralCard("Keel Cracking", 30, "british", ["British Fleet Box"]),
    admiralCard("Artillery Expert", 40, "british", ["British Fleet Box"]),
    admiralCard("Master of Weapons", 50, "british", ["British Fleet Box"]),
    admiralCard("Rapid Repair", 10, "russian", ["Russian Fleet Box"]),
    admiralCard("Precision Shots", 20, "russian", ["Russian Fleet Box"]),
    admiralCard("Quick Crew Deployment", 30, "russian", ["Russian Fleet Box"]),
    admiralCard("Double Shifts", 40, "russian", ["Russian Fleet Box"]),
    admiralCard("Master of Repair", 50, "russian", ["Russian Fleet Box"]),
    admiralCard("Makeshift Engine", 10, "french", ["French Fleet Box"]),
    admiralCard("High Impact Torpedos", 20, "french", ["French Fleet Box"]),
    admiralCard("Torpedo Crews", 30, "french", ["French Fleet Box"]),
    admiralCard("Torpedo Sights", 40, "french", ["French Fleet Box"]),
    admiralCard("Engineering Expert", 50, "french", ["French Fleet Box"]),
    admiralCard("Focused Gunners", 10, "german", ["German Fleet Box"]),
    admiralCard("Hard Burn", 20, "german", ["German Fleet Box"]),
    admiralCard("Armored Hulls", 30, "german", ["German Fleet Box"]),
    admiralCard("Chaff Experts", 40, "german", ["German Fleet Box"]),
    admiralCard("Balanced Vessels", 50, "german", ["German Fleet Box"])
]);

const alGunData = sortByPointsAndName([
    alGunCard("Semi-Mobile Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"]),
    alGunCard("Mobile Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"]),
    alGunCard("High-Mobility Anti-Leviathan Gun", 20, ["Operation Hannibal", "Operation Ragnar"])
]);
