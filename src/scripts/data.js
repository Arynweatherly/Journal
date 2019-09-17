

const API = {

    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },

    SaveJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },

    deleteEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
    }).then(response => response.json())
    },

    saveJournalEntry: entry => {
		return fetch("http://localhost:3000/entries", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(entry)
		});
	},
    

}



//use fetch to create journal entry



export default API;