class contactData{

    /**getters and setters for setting and getting values */
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(firstName))
        this._firstName=firstName;
        else throw ('Name is Incorect!');
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        let phoneRegex=RegExp('^[+9]{1}[6-9]{1}[0-9]{6,}$');
        if(phoneRegex.test(phoneNumber))
        this._phoneNumber=phoneNumber;
        else throw ('phone number is Incorect!');
    }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes=notes;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city=city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        this._state=state;
    }
    get pinCode(){
        return this._pinCode;
    }
    set pinCode(pinCode){
        this._pinCode=pinCode;
    }
/**toString() method to display details */ 
    toString(){
        return "Name: "+this.firstName+" Phone Number: "+this.phoneNumber+"Notes: "+this.notes+" City"+this.city+" State: "+this._state+" PinCode : "+this._pinCode;
    }

}