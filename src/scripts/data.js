

const API = {

    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },

    deleteEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
    }).then(response => response.json())
    },

    getSingleEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`)
            .then(response => response.json())
    },

    editForm: (id, updatedEntry) => {
        console.log(id, updatedEntry);
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntry)
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
    }
}




//use fetch to create journal entry



export default API;