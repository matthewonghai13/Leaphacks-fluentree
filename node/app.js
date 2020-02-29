const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs');
const PORT = 9000;

app.get("/", (req, res) => {
    res.send("Hello world 2!");
});

app.use(bodyParser.json())

app.get("/masterList/:userID/:language", (req, res) => {
    const {userID, language} = req.params;
    let rawDataMeta = fs.readFileSync('./templates/MetaInfo.json');
    let jsonDataMeta = JSON.parse(rawDataMeta);
    let userList = jsonDataMeta.users;
    let fileNameToGet = "";
    let result;
    let tempRawData;

    // Check if user and language exists, if so then return respective JSON file
    for(let i = 0; i < userList.length; i++) {
        let tempUserID = userList[i].userID;
        if(userID === tempUserID && userList[i].languages.includes(language)) {
            fileNameToGet = "./templates/userinfo/" + tempUserID + language + ".json";
            tempRawData = fs.readFileSync(fileNameToGet);
            result = JSON.parse(tempRawData);
            res.send(result);
            return;
        }
    }

    // Check if user already exists, if so just add language
    for(let i = 0; i < userList.length; i++) {
        let tempUserID = userList[i].userID;
        if(userID === tempUserID) { // Found user in database
            userList[i].languages.push(language);
            fileNameToGet = "./templates/" + language + ".json";
            tempRawData = fs.readFileSync(fileNameToGet);
            result = JSON.parse(tempRawData); // Template
            fs.writeFileSync("./templates/MetaInfo.json", JSON.stringify(jsonDataMeta,null,4));
            let fileNameToWrite = "./templates/userinfo/" + tempUserID + language + ".json";
            fs.appendFileSync(fileNameToWrite, JSON.stringify(result,null,4));
            res.send("User existed, but didn't have language. Language added");
            return;
        }
    }

    // No user exists, need to register user
    let newUserData = {
        userID: userID,
        languages: [language],
        pwd: "12345"
    }
    userList.push(newUserData);
    fileNameToGet = "./templates/" + language + ".json";
    tempRawData = fs.readFileSync(fileNameToGet);
    result = JSON.parse(tempRawData); // Template
    fs.writeFileSync("./templates/MetaInfo.json", JSON.stringify(jsonDataMeta,null,4));
    let fileNameToWrite = "./templates/userinfo/" + userID + language + ".json";
    fs.appendFileSync(fileNameToWrite, JSON.stringify(result,null,4));

    res.send("User not found, add to database");
});

app.post("/masterList/:userID/:language", (req, res) => {
    const {userID, language} = req.params;
    let path = "./templates/userinfo/" + userID + language + ".json";
    updateDates(req.body);
    if(!fs.existsSync(path)) {
        res.send("File doesn't exist dumbass");
    } else {
        console.log(req.body);
        fs.writeFileSync(path, JSON.stringify(req.body,null,4));
        res.send("File updated");
    }
});

function updateDates(wordList) {
    for(let i = 0; i < wordList.length; i++){
        let responseQuality = 0;
        if(wordList[i].easyCount === 1){
            responseQuality = responseQuality + 5;
            wordList[i].easyCount = 0;
        }
        else if(wordList[i].mediumCount === 1){
            responseQuality = responseQuality + 3;
            wordList[i].mediumCount = 0;
        }
        else if(wordList[i].hardCount === 1){
            responseQuality = responseQuality + 1;
            wordList[i].timesReviewed = 0;
            wordList[i].hardCount = 0;
        }

        let easyFactor = wordList[i].EF+(0.1-(5-responseQuality)*(0.08+(5-responseQuality)*0.02));

        if(easyFactor < 1.3){
            easyFactor = 1.3;
        }
        wordList[i].EF = easyFactor;
        }

    for(let i = 0; i < wordList.length; i++){
        wordList[i].timesReviewed += 1;
        if(wordList[i].timesReviewed === 1){
            wordList[i].nextReviewDate = 1;
        }
        else if(wordList[i].timesReviewed === 2){
            wordList[i].nextReviewDate = 6;
        } else {wordList[i].nextReviewDate = Math.ceil((wordList[i].nextReviewDate - 1) * wordList[i].EF);
        }
    }
    return
    }





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

console.log("hello world");