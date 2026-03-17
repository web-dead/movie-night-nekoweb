// DEPENDENCIES:
const fs = require('fs');
// Read JSON file:
const jsonFilePath = "https://web-dead.nekoweb.org/SCRIPTS/movie-night-order.json";
const fileData = fs.readFileSync(jsonFilePath, 'utf8');
const jsonData = JSON.parse(fileData);
// ----------------------------------------


function changeNamePointer() {
    console.log("changeNamePointer function started")
    // If turnNumber is less than amount of names in the list, add 1 to turnNumber (which changes it to the next name)
    if (jsonData.turnNumber < jsonData.nameList.length) {
        jsonData.turnNumber += 1;
        console.log("turnNumber less than nameList array length. Added 1 to turnNumber.");
    } else if (jsonData.turnNumber >= jsonData.nameList.length) {
        jsonData.turnNumber = 0;
        console.log("turnNumber equal to or more than than nameList array length. Reset turnNumber to 0.");
    };

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    console.log(`JSON Updated. Turn Number: ${jsonData.turnNumber} . Name: ${jsonData.nameList[jsonData.turnNumber]} .`);
};

changeNamePointer();
