
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
    },

    editJournal: (entry) => {
        return `
    <form>
        <h2 id="date">${entry.date}</h2>
        <section id="concept">${entry.concept}</section>
        <section id="entry">${entry.entry}</section>
        <aside id="mood">${entry.mood}</aside>
        <button id="saveEntry">Save Entry</button>
    </form>
    `
    }
}

export default webComp 