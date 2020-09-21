const form = document.getElementById('newform');
const Fname = document.getElementById('First');
const Mname = document.getElementById('Middle');
const Lname = document.getElementById('Last');
const email = document.getElementById('Email');
const Add = document.getElementById('Add');
const Phone = document.getElementById('phone');
const Gender = document.getElementById('gen');


window.addEventListener('load',()=>{
	document.getElementById('result-name').innerHTML=sessionStorage.getItem('NAME');
    document.getElementById('post-add').innerHTML=sessionStorage.getItem('Address');
    document.getElementById('Gend-res').innerHTML=sessionStorage.getItem('G');
    document.getElementById('phone').innerHTML=sessionStorage.getItem('Number');
    document.getElementById('mail-res').innerHTML=sessionStorage.getItem('Mail');
});

function checkInputs(){
	const FirstValue = Fname.value;
	const emailValue = email.value;
	const middlevalue = Mname.value;
	const lastvalue = Lname.value;
	const AddValue = Add.value;
	const Phonevalue = Phone.value;
	const GenValue= Gender.value;
	const letters = /^[A-Za-z ]+$/;
	const numbers= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	const mixed = /^[0-9a-zA-Z]+$/;
	
	
var missing = false;
var Fields ="";

if (!FirstValue.match(letters)){
		missing =true;
		Fields+="Please enter a valid First name\n"
			
    }
	if (!middlevalue.match(letters)){
		missing = true;
		Fields+="Please enter a valid Middle Name\n"
		
	}
	  
	if (!lastvalue.match(letters) ){
		missing = true;
		Fields+="Please enter a valid Last Name\n"
		
	}

	
	
	if (Gender.selectedIndex== 0 ){
		missing=true;
		Fields+="Please select a Gender\n"
	}
	
	if (AddValue=== ''){
		missing =true;
		Fields+="Please enter a valid Address\n"
		
			
    }
		
	if (!Phonevalue.match(numbers)){
		missing=true;
		Fields+="Please enter a valid phone number\n"		
		
	}

	if (emailValue ==='' ||(!IsEmail(emailValue)) ){
		missing=true;
		Fields+="Please enter an email\n"
		
    }

	if(missing){
		alert("Please correct the following error(s) before continuing:\n" + Fields
		);
		return false;
	}
	return true;

}


function IsEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ .test(email);
}
function handleSubmit(){
	const FirstValue = Fname.value.trim();
	const emailValue = email.value.trim();
	const middlevalue = Mname.value.trim();
	const lastvalue = Lname.value.trim();
	const AddValue = Add.value.trim();
	const Phonevalue = Phone.value.trim();
	const GenValue= Gender.value;
	
	const n= FirstValue + " " + middlevalue + " " + lastvalue;
	const names = n.toUpperCase();
	
	sessionStorage.setItem('NAME',names);
	sessionStorage.setItem('Mail' , emailValue);
	sessionStorage.setItem('Address' , AddValue);
	sessionStorage.setItem('Number' , Phonevalue);
	sessionStorage.setItem('G',GenValue);
	
}


