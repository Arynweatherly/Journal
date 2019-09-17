

import DOM from "./entriesDOM.js"
import API from "./data.js"

const entryLog = document.querySelector(".entryLog");




//Make event Listener 
//document.querySelector("#button").addEventListener("click", () => {



//collected form fields
const journalDate = document.querySelector("#journalDate").value;
const journalConcepts = document.querySelector("#concepts").value;
const journalEntry = document.querySelector("#journalEntry").value;
const journalMood = document.querySelector("#journalMood").value;

    





document.querySelector("#saveButton").addEventListener("click", (event) => {
let journalDate = document.querySelector("#journalDate").value;
let journalConcepts = document.querySelector("#concepts").value;
let journalEntry = document.querySelector("#journalEntry").value;
let journalMood = document.querySelector("#journalMood").value;
    const entryObject = {
        dateOfEntry: journalDate,
        conceptsCovered: journalConcepts,
        journalEntry: journalEntry,
        moodOfTheDay: journalMood,
        
    }

    console.log(entryObject)

    API.saveJournalEntry(entryObject).then(data => {
        API.getJournalEntries().then(data => {
            document.querySelector(".entriesList").innerHTML = " ";
            DOM.renderJournalEntries2(data);
        })
    
    })
})






document.querySelector("#showEntries").addEventListener("click", event => {
    API.getJournalEntries().then(data => {
        document.querySelector(".entriesList").innerHTML = " ";
        DOM.renderJournalEntries2(data);
    })

})


document.querySelector("#moodFilter").addEventListener("input", event => {
    let moody = event.target.value;
    console.log(moody);
    API.getJournalEntries().then(data => {
        document.querySelector(".entriesList").innerHTML = " ";
        DOM.filterMood(data, moody);
})
})


// get container that is holding my delete and edit button 
document.querySelector(".entriesList").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {  // if the id starts with deleteButton--
        // clear donut-container before adding new donut
        console.log(event.target.id.split("--")[1]);
        document.querySelector(".entriesList").innerHTML = "";
        // Extract delete button id from button's id attribute
        API.deleteEntry(event.target.id.split("--")[1]) // refers to the deleteEntry from data.js 
            .then(() => {
                //  get all the donuts again
                API.getJournalEntries().then(data => DOM.renderJournalEntries2(data));
                //entries.forEach(entry => {  // might NOT need this foreach
                //  needs to send donut to DOM
            })
    } else if (event.target.id.startsWith("editEntry")) {  //Editing a single Donut 
        editForm(event.target.id.split("--")[1])  // Invoke the editForm function from editForm.js, slpitting the content between -- and passing only the second [1] "element" 
    }
});
