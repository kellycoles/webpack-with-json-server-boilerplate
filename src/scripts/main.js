import API from "./data.js";
import  contactEntry from "./dom.js"

const name = document.querySelector("#name")
const phoneNumber = document.querySelector("#phoneNumber")
const streetAddress = document.querySelector("#address")
const city = document.querySelector("#city")
const state = document.querySelector("#state")
const zip = document.querySelector("#zip")

const container = document.querySelector("#container")
const submit = document.querySelector("#submit")
const getAndRender = () => {
    container.innerHTML = ""
    API.getContactData().then((parsedEntries) => { contactEntry.sendToFactory(parsedEntries) })

}
getAndRender()


// Create an object with a new journal entry
const createEntryObject = ( name,phoneNumber,streetAddress,city,state,zip) => {
    return {
        name: name,
        phoneNumber:phoneNumber,
        streetAddress:streetAddress,
        city:city,
        state:state,
        zip:zip 
    }

}

submit.addEventListener("click", (event) => {

    // call createEntryObject and send it the form data. It will make a new object with the current form data. 
    const newContactEntry = createEntryObject(name.value, phoneNumber.value, streetAddress.value, city.value, state.value, zip.value)
    console.log(' newContactEntry: ',  newContactEntry);
    //call the API method saveJournalEntries from data.js and pass it the new entry.
    API.saveContact(newContactEntry).then(getAndRender)
    // Reset all the fields to an empty string. Set date to current date
    
    name.value = ""
    phoneNumber.value = ""
    streetAddress.value = ""
    city.value = ""
    state.value = ""
    zip.value =""

})

