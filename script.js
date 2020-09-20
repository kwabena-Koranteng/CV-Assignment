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
	const FirstValue = Fname.value.trim();
	const emailValue = email.value.trim();
	const middlevalue = Mname.value.trim();
	const lastvalue = Lname.value.trim();
	const AddValue = Add.value;
	const Phonevalue = Phone.value.trim();
	const GenValue= Gender.value.trim();
	const letters = /^[A-Za-z]+$/;
	const numbers= /^[0-9]+$/;
	const mixed = /^[0-9a-zA-Z]+$/;
	
    if (FirstValue.match(letters) && middlevalue.match(letters) && lastvalue.match(letters) && !IsEmail(emailValue) && Phonevalue.match(numbers) && Gender.selectedIndex!== 0 && AddValue!== ''){
        setSuccess(First);
        setSuccess(Mname);
        setSuccess(Lname);
        setSuccess(email);
        setSuccess(Add);
        setSuccess(Phone);
        setSuccess(Gender);
        
        }
        
        else{
        Errorset(Fname,'First Name cannot be blank');
        Errorset(Mname,'Please insert a valid middle name');
        Errorset(Lname,'Please insert a valid last name');
        Errorset(email,'Email cannot be blank');
        Errorset(Add,'Address cannot be blank');
        Errorset(Phone,'Please insert a valid phone number');
        Errorset(Gender,'Please select a gender');
        return false;
        
        }
}



function Errorset(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
	small.innerText= message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

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
	
	sessionStorage.setItem('NAME',n);
	sessionStorage.setItem('Mail' , emailValue);
	sessionStorage.setItem('Address' , AddValue);
	sessionStorage.setItem('Number' , Phonevalue);
	sessionStorage.setItem('G',GenValue);
	
}


