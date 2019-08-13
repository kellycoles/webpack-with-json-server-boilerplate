const API = {
    getContactData() {
        return fetch("http://localhost:3000/contacts") // Fetch from the API
            .then(response => response.json())        // Parse as JSON

    },

    saveContact(entryObject) {
        return fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
    }
}
export default API;