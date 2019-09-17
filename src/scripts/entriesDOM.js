//Move the code that is responsible for modifying the DOM into this file.


import webComp from "./entryComponent.js";

const DOM = {

renderJournalEntries2: (entries) =>{
    for (let i = 0; i < entries.length; i++) {
        document.querySelector(".entriesList").innerHTML += webComp.makeJournalEntryComponent(entries[i])
    }
},


filterMood: (entries, moody) =>{
    entries.forEach(entry => {
        if (entry.moodOfTheDay === moody) {
            document.querySelector(".entriesList").innerHTML += webComp.makeJournalEntryComponent(entry)
    }
        });
},
};


 export default DOM