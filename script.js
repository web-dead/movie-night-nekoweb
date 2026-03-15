const fs = require("fs");
const 
const jsonFile = require('/public/movie-night-order.json');
const jsonData = JSON.parse(jsonFile);


if (jsonData.turnPointer < jsonData.nameList.length) {
  jsonData.turnPointer += 1;
} else if (jsonData.turnPointer >= jsonData.nameList.length) {
  jsonData.turnPointer = 0;
};

fs.writeFile(jsonFile, JSON.stringify(jsonData.turnPointer, null, 2));


