
// Move the code that is responsible for creating the journal entry HTML component into this file.


const webComp = { 

     makeJournalEntryComponent: (entry) =>{
        return `
        <div>
            <h2>${entry.dateOfEntry}</h2>
            <p>${entry.conceptsCovered}</p>
            <p>${entry.journalEntry}</p>
            <p>${entry.moodOfTheDay}</p>
            <button class="button2" type="button" id="deleteEntry--${entry.id}">Delete</button>
            <button class="button2" type="button" id="editEntry--${entry.id}">Edit</button>
        </div>
        `
    }
}

export default webComp 