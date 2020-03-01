import React, { Component } from 'react'
import axios from 'axios'

const CardContext = React.createContext();

export default class CardProvider extends Component {
    state = {
        cards: [],
        workCards: [],
        travelCards: [],
        cultureCards: [],
        topics: [],
        currentLanguage: "Spanish",
        username : "monghai",
        pwd: "12345"
    }

    updateUsername = (newUsername) => {
        this.setState(() => {
            return {
                userName: newUsername
            };
        });
    }

    updateCards = () => {
        for(let i = 0; i < this.state.topics.length; i++) {
            let tempPath = "http://localhost:9000/masterList/" + this.state.username + "/" + this.state.language 
                            + this.state.topics[i] + ".json";
            
            let toSend = [];
            if(this.state.topics[i] === "Work") {
                toSend = this.state.workCards;
            }
            if(this.state.topics[i] === "Culture") {
                toSend = this.state.cultureCards;
            }
            if(this.state.topics[i] === "Travel") {
                toSend = this.state.cultureCards;
            }
            axios.post(tempPath, toSend)
                .then(response => {
                    console.log(response);                    
                })
                .catch(error => {
                    console.log(error);
                });
        }

    }

    switchLanguage = (newLanguage) => {

        console.log("switch language called" + newLanguage);

        // Clear cards array
        // set currentLanguage to newLanguage
        // iterate through topics and call addCards for each one
        let newCards = [];
        let newWork = [];
        let newTravel = [];
        let newCulture = [];
        for(let i = 0; i < this.state.topics.length; i++) {
            let tempPath = "http://localhost:9000/masterList/" + this.state.username + "/" + newLanguage 
                            + this.state.topics[i] + ".json";
            axios.get(tempPath)
                .then(response => {
                    console.log(response);
                    newCards.concat(response.data);
                    if(this.state.topics[i] === "Work") {
                        newWork = [...response.data];
                    }
                    if(this.state.topics[i] === "Culture") {
                        newCulture = [...response.data];
                    }
                    if(this.state.topics[i] === "Travel") {
                        newTravel = [...response.data];
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }


        console.log(newLanguage);

        this.setState({
                currentLanguage: newLanguage,
                cards: [...newCards],
                workCards: [...newWork],
                travelCards: [...newTravel],
                cultureCards: [...newCulture]
        });

    }

    switchTopics = (newTopics) => {
        let newCards = [];
        let newWork = [];
        let newTravel = [];
        let newCulture = [];

        console.log("switch topics called");
        console.log(this.state.currentLanguage);
        console.log(newTopics);

        for(let i = 0; i < newTopics.length; i++) {
            let tempPath = "http://localhost:9000/masterList/" + this.state.username + "/" + this.state.currentLanguage 
                            + newTopics[i];
            console.log(tempPath);
            axios.get(tempPath)
                .then(response => {
                    console.log(response);
                    newCards.concat(response.data);
                    if(this.state.topics[i] === "Work") {
                        newWork = [...response.data];
                    }
                    if(this.state.topics[i] === "Culture") {
                        newCulture = [...response.data];
                    }
                    if(this.state.topics[i] === "Travel") {
                        newTravel = [...response.data];
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

        this.setState({
                topics: [...newTopics],
                cards: [...newCards],
                workCards: [...newWork],
                travelCards: [...newTravel],
                cultureCards: [...newCulture]
        });
    }

    getCard = (index) => {
        return this.state.cards[index];
    }

    updateCard = (newCard, index) => {
        let tempCards = this.state.cards;
        tempCards[index] = newCard;
        this.setState(() => {
            return {
                cards: tempCards
            }
        })
    }

    getCardsLength = () => {
        return this.state.cards.length;
    }

    incrementEasy = (index) => {
        let tempCards = this.state.cards;
        tempCards[index].easyCount = tempCards[index].easyCount + 1;
        this.setState(() => {
            return {
                cards: tempCards
            }
        })
    }

    incrementHard = (index) => {
        let tempCards = this.state.cards;
        tempCards[index].easyCount = tempCards[index].hardCount + 1;
        this.setState(() => {
            return {
                cards: tempCards
            }
        })
    }

    render() {
        return (
            <CardContext.Provider value={{
                ...this.state,
                updateUsername: this.updateUsername,
                updateCards: this.updateCards,
                getCard: this.getCard,
                getCardsLength: this.getCardsLength,
                updateCard: this.updateCard,
                incrementEasy: this.incrementEasy,
                incrementHard: this.incrementHard,
                switchLanguage: this.switchLanguage,
                switchTopics: this.switchTopics
            }}>
                {this.props.children}
            </CardContext.Provider>
        )
    }
}

const CardConsumer = CardContext.Consumer;

export {CardProvider, CardConsumer};