"use strict"

class AddressBook{
	
	constructor(){
		
		this.Contacts = [];
		
	}
	
	deleteAt(idx){
		
		this.Contacts.splice(idx, 1);
		
	}
	
	add(info){
		
		this.Contacts.push(info);
		
	}
	
	deleteByName(name){
		
		for(let i = 0; i < this.Contacts.length; i++){
			
			if( this.Contacts[i].name == name ){
				
				this.deleteAt(i);
				
			}
			
		}
		
	}
	
	print(){
		
		for(let i = 0; i < this.Contacts.length; i++){
			
			console.log(this.Contacts[i].name + "	" +this.Contacts[i].phone + "	" +this.Contacts[i].relation + "	" +this.Contacts[i].email);
			
		}
		
	}
	
}

class Contact{
	
	constructor(name, email, phone, relation){
		
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.relation = relation;
		
	}
	
}

let book = new AddressBook();

while(true){
	
	let choice = prompt("Yould you like to add, print, delete, deleteByName or quit");
	
	let name;
	let email;
	let phone;
	let relation;
	
	if(choice == "add"){
		
		name = prompt("What is the contacts name?");
		email = prompt("What is their email?");
		phone = prompt("What is their phone number?");
		relation = prompt("How do you know them?");
		
		book.add(new Contact(name, email, phone, relation));
		
	}else if(choice.toLowerCase() == "print"){
		
		book.print();
		
	}else if(choice.toLowerCase() == "delete"){
		
		book.deleteAt(prompt("which contact would you like to delete (index) ??"));
		
	}else if(choice.toLowerCase() == "deletebyname"){
		
		book.deleteByName(prompt("what is the name of the contact you would you like to delete??"));
		
	}else if(choice.toLowerCase() == "quit"){
		
		break;
		
	}else{
		
		alert("You must have mispealt something. Try again");
		
	}

}






