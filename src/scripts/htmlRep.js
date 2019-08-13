const htmlRep = {
    createJournalHTML(contact)  {
        return `
        
        <h3 class = "date">Name: ${contact.name}</h3>
        <p class = "concept">Phone Number: ${contact.phoneNumber}</p>
        <p class = "streetAddress">Street Address: ${contact.streetAddress}</p>
        <p class = "city"> ${contact.city}, ${contact.state}. ${contact.zip} </p>
         </section>
    `
    }
    
}
export default htmlRep
