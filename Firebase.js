var myDataRef = new Firebase('https://jjguesttracker.firebaseio.com/');
var contactList;

$('#submit').click(function () {
	let name = $('#name').val();
	let organization = $('#organization').val();
	let contact = $('#contact').val();

	myDataRef.push({name:name, organization:organization, contact:contact});
	$('#name').val('');
	$('#organization').val('');
	$('#contact').val('');
});


myDataRef.on('value', function(snapshot) {
	let contactList = snapshot.val();
	$(".collection-item").remove();
	for(let contacts in contactList){
		let name = contactList[contacts].name;
		let organization = contactList[contacts].organization;
		let contact = contactList[contacts].contact;
		$("#contactList").append("<li class='collection-item'>"+name+" "+organization+" "+contact+"</li>");	
	}
});