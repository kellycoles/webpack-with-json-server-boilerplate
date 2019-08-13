import htmlRep from "./htmlRep.js"

const container = document.querySelector("#container")

const contactEntry = {
    sendToFactory(parsedEntries) {
        for (const contact of parsedEntries) {
            const contactHTML = htmlRep.createJournalHTML(contact)
            container.innerHTML += contactHTML
        }
    }
}
export default contactEntry