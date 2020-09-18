const form = document.getElementById('form');
const Fname = document.getElementById('First');
const Mname = document.getElementById('Middle');
const Lname = document.getElementById('Last');
const email = document.getElementById('Email');
const Add = document.getElementById('Add');
const Phone = document.getElementById('phone');
const Gen = document.getElementById('gen');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
	const FirstValue = Fname.value.trim();
	const emailValue = email.value.trim();
	const middlevalue = Mname.value.trim();
	const lastvalue = Lname.value.trim();
	const AddValue = Add.value.trim();
	const Phonevalue = Phone.value.trim();
    if (FirstValue ==='' ){
		Errorset(Fname,'First Name cannot be blank')
    }
    else{
        setSuccess(First);

    }
	if (middlevalue ===''){
		Errorset(Mname,'Middle Name cannot be blank')
		
    }
    else{
        setSuccess(Mname);

    }
	if (lastvalue ==='' ){
		Errorset(Lname,'Last Name cannot be blank')
		
    }
    else{
        setSuccess(Lname);

    }
	if (emailValue ===''){
		Errorset(email,'Email cannot be blank')
		
    }
    else if(!IsEmail(emailValue)){
        Errorset(email,'Email is invalid')
    } 
    else{
        setSuccess(email);

    }
	if (AddValue ===''){
		Errorset(Add,'Address cannot be blank')
		
    }
    else{
        setSuccess(Add);

    }	
	if (Phonevalue===''){
		Errorset(Phone,'Phone Number cannot be blank')
		
    }
    else{
        setSuccess(Phone);

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
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ .test(Email);
}