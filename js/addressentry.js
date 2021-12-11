/*Creating Event Handler to Show Error when there is no element in name*/ 
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{                                                                //Try catch block to catch error thrown when name entered is according to regex.
            (new contactData()).firstName=name.value;;
            textError.textContent="";
        }
        catch(e){
            textError.textContent=e;
        }
    });

    const text = document.querySelector('#phone');
    //const textError = document.querySelector('.text-error');
    text.addEventListener('input',function (){
        if(text.value.length == 0){
            textError.textContent="";
            return;
        }
        try{                                                                //Try catch block to catch error thrown when name entered is according to regex.
            (new contactData()).phoneNumber=text.value;;
            textError.textContent="";
        }
        catch(e){
            textError.textContent=e;
        }
    });
});


const save = () =>{                                                 //save function to save the details
    try{
        let contact=createContactData();
        createAndUpdateStorage(contact);
    }
    catch (e){
        return;
    }
}

function createAndUpdateStorage(contact){
        
    let contactList = JSON.parse(localStorage.getItem("ContactList"));

    if(contactList != undefined){
    contactList.push(contact);
    }
    else{
        contactList = [contact]
    }
    alert("Details Entered");
    localStorage.setItem("ContactList",JSON.stringify(contactList))
}


const createContactData= () =>{                                         //inserting try catch block to catch error trown when name is entered wrong
    let contact = new contactData();
    try{
        contact.firstName = getInputValueById('#name');
    }
    catch (e){
        setTextValue('.text-error',e);
        throw e;
    }
    contact.phoneNumber=getInputValueById('#phone');                                                                                        //taking all user input values and setting latest values for name,gender.
    contact.notes=getInputValueById('#notes');
    contact.city=getInputValueById('#city');
    contact.state=getInputValueById('#state');
    contact.pinCode=getInputValueById('#pincode');

    alert(contact.toString());
    return contact;
}

/**getInputValueById() method to verify values. and modify date in require format]
 * 
 */
 const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}