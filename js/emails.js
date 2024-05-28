function sendMail() {
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value,
		message: document.getElementById("message").value,
	};

	const serviceID = "service_ba2w2ne";
	const templateID = "template_3s1ck5s";

	emailjs
	.send(serviceID, templateID, params)
	.then(res =>{
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("message").value = "";
	})
	.catch((err) => console.log(err));

}

