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
        currentLanguage: "",
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
                            + this.state.topics[i];
            
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
        // Clear cards array
        // set currentLanguage to newLanguage
        // iterate through topics and call addCards for each one
        let newCards = [];
        let newWork = [];
        let newTravel = [];
        let newCulture = [];

        for(let i = 0; i < this.state.topics.length; i++) {
            let tempPath = "http://localhost:9000/masterList/" + this.state.username + "/" + newLanguage 
                            + this.state.topics[i];
            axios.get(tempPath)
                .then(response => {
                    console.log(response);
                    newCards.concat(response.data);
                    if(this.state.topics[i] === "Work") {
                        newWork = response.data;
                    }
                    if(this.state.topics[i] === "Culture") {
                        newCulture = response.data;
                    }
                    if(this.state.topics[i] === "Travel") {
                        newTravel = response.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

        this.setState(() => {
            return {
                currentLanguage: newLanguage,
                cards: newCards,
                workCards: newWork,
                travelCards: newTravel,
                cultureCards: newCulture
            };
        });


    }

    switchTopics = (newTopics) => {
        let newCards = [];
        let newWork = [];
        let newTravel = [];
        let newCulture = [];

        for(let i = 0; i < this.state.topics.length; i++) {
            let tempPath = "http://localhost:9000/masterList/" + this.state.username + "/" + this.state.language 
                            + this.state.topics[i];
            axios.get(tempPath)
                .then(response => {
                    console.log(response);
                    newCards.concat(response.data);
                    if(this.state.topics[i] === "Work") {
                        newWork = response.data;
                    }
                    if(this.state.topics[i] === "Culture") {
                        newCulture = response.data;
                    }
                    if(this.state.topics[i] === "Travel") {
                        newTravel = response.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

        this.setState(() => {
            return {
                topics: newTopics,
                cards: newCards,
                workCards: newWork,
                travelCards: newTravel,
                cultureCards: newCulture
            }
        })
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
                
                clearCart: this.clearCart,
                cards: this.cards,
                workCards: this.workCards,
                travelCards: this.travelCards,
                cultureCards: this.cultureCards,
                currentLanguage: this.currentLanguage,
                username : this.username,
                pwd: this.pwd
            }}>
                {this.props.children}
            </CardContext.Provider>
        )
    }
}

const CardConsumer = CardContext.Consumer;

export {CardProvider, CardConsumer};