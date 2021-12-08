let organization ={ 
    Name:"Amazon" ,
    adress : {
        city:"Darbhanga",
        state:"Bihar",
        pincode:70001
        
    }
    
};
let {adress:{pincode: pincode}} = organization;
console.log("pincode : pincode" );