

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
    if (event.target.id.startsWith("deleteEntry--")) {  
        //console.log(event.target.id.split("--")[1]);
        document.querySelector(".entriesList").innerHTML = "";
        API.deleteEntry(event.target.id.split("--")[1]) 
            .then(() => {
                API.getJournalEntries().then(data => DOM.renderJournalEntries2(data));
            })
    } else if (event.target.id.startsWith("editEntry")) {  
        let editId = event.target.id.split("--")[1]; 
      console.log(editId);
      API.getSingleEntry(editId).then(data => {
          document.querySelector("#eJournalMood").value = data.moodOfTheDay 
          document.querySelector("#eJournalEntry").value = data.journalEntry 
          document.querySelector("#eConcepts").value = data.conceptsCovered
          document.querySelector("#eJournalDate").value = data.dateOfEntry
          document.querySelector("#editId").value = data.id
      })
    }

})

document.querySelector("#newForm").addEventListener("click", (event) => {
    let journalDate = document.querySelector("#eJournalDate").value;
    let journalConcepts = document.querySelector("#eConcepts").value;
    let journalEntry = document.querySelector("#eJournalEntry").value;
    let journalMood = document.querySelector("#eJournalMood").value;
    let editId = document.querySelector("#editId").value;
    const entryObject = {
        dateOfEntry: journalDate,
        conceptsCovered: journalConcepts,
        journalEntry: journalEntry,
        moodOfTheDay: journalMood,
    }
        API.editForm(editId, entryObject).then(() => {
        API.getJournalEntries().then(data => {
            document.querySelector(".entriesList").innerHTML = " ";
            DOM.renderJournalEntries2(data);
        })
    })

})

