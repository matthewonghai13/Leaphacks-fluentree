const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world 2!");
});


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
            fs.writeFileSync("./templates/MetaInfo.json", JSON.stringify(jsonDataMeta));
            let fileNameToWrite = "./templates/userinfo/" + tempUserID + language + ".json";
            fs.appendFileSync(fileNameToWrite, JSON.stringify(result));
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
    fs.writeFileSync("./templates/MetaInfo.json", JSON.stringify(jsonDataMeta));
    let fileNameToWrite = "./templates/userinfo/" + userID + language + ".json";
    fs.appendFileSync(fileNameToWrite, JSON.stringify(result));

    res.send("User not found, add to database");
});

app.post("/masterList/:userID/:language", (req, res) => {
    const {userID, language} = req.params;
    let path = "./templates/userinfo/" + userID + language + ".json";
    if(!fs.existsSync(path)) {
        res.send("File doesn't exist dumbass");
    } else {
        let toWrite = JSON.parse(req.body);
        console.log(toWrite);
        fs.writeFileSync(path, JSON.stringify(toWrite));
        res.send("File updated");
    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

console.log("hello world");