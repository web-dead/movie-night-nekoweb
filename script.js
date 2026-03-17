// DEPENDENCIES:
const fs = require('fs');
const core = require('@actions/core')
// Read JSON file:
const jsonFilePath = "public/movie-night-order.json";
const fileData = fs.readFileSync(jsonFilePath, 'utf8');
const jsonData = JSON.parse(fileData);
// ----------------------------------------

async function run() {
  try {
    console.log("changeNamePointer function started")
    // If turnPointer is less than amount of names in the list, add 1 to turnPointer (which changes it to the next name)
    if (jsonData.turnPointer < jsonData.nameList.length) {
        jsonData.turnPointer += 1;
        console.log("turnPointer less than nameList array length. Added 1 to turnPointer.");
    } else if (jsonData.turnPointer >= jsonData.nameList.length) {
        jsonData.turnPointer = 0;
        console.log("turnPointer equal to or more than than nameList array length. Reset turnPointer to 0.");
    };

    // fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    core.setOutput('pointerResult', `${jsonData.turnPointer}`);
    console.log(`JSON Updated. Turn Number: ${jsonData.turnPointer} . Name: ${jsonData.nameList[jsonData.turnPointer]} .`);
  } catch (error) {
    core.setFailed(error.message)
  }
}
function changeNamePointer() {
    
};
