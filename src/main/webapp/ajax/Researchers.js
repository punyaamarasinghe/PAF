function getRow() {
	var table = document.getElementById('table');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("researchers_id").value = this.cells[1].textContent;
			document.getElementById("name").value = this.cells[2].textContent;
			document.getElementById("qualifications").value = this.cells[3].textContent;
			document.getElementById("country").value = this.cells[4].textContent;
			document.getElementById("email").value = this.cells[5].textContent;
			document.getElementById("contact_number").value = this.cells[6].textContent;
			document.getElementById("interested_research_areas").value = this.cells[7].textContent;
		};
	}
}

function getRowSearch() {
	var table = document.getElementById('idTable');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("researchers_id").value = this.cells[1].textContent;
			document.getElementById("name").value = this.cells[2].textContent;
			document.getElementById("qualifications").value = this.cells[3].textContent;
			document.getElementById("country").value = this.cells[4].textContent;
			document.getElementById("email").value = this.cells[5].textContent;
			document.getElementById("contact_number").value = this.cells[6].textContent;
			document.getElementById("interested_research_areas").value = this.cells[7].textContent;
		};
	}
}

function getID() {
	var table = document.getElementById('table');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("researchers_id").value = this.cells[1].textContent;
		};
	}
}

function getIDserch() {
	var table = document.getElementById('idTable');
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function() {
			document.getElementById("researchers_id").value = this.cells[1].textContent;
		};
	}
}

function resetForm() {
	document.getElementById("researchers_id").value = "0";
	document.getElementById("name").value = "";
	document.getElementById("qualifications").value = "";
	document.getElementById("country").value = "";
	document.getElementById("email").value = "";
	document.getElementById("contact_number").value = "";
	document.getElementById("interested_research_areas").value = "";
}

function save() {
	var researchers_id = $('#researchers_id').val();
	researchers_id = parseInt(researchers_id);
	if (researchers_id === 0) {
		if(ValidInput()){
			$.ajax({
				url : 'http://localhost:8080/researchers/webresources/ResearchersResources/Researchers',
				method : 'POST',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					$("#idTable").find("tr:gt(0)").remove();
					$("#table").find("tr:gt(0)").remove();
					load();
					resetForm();
					alert(data);
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}else{
			alert("Fill form");
		}
	}else{
		if(ValidInput()){
			$.ajax({
				url : 'http://localhost:8080/researchers/webresources/ResearchersResources/Researchers',
				method : 'PUT',
				headers : {
					"Content-Type" : "application/json"
				},
				data : getJSON(),
				success : function(data) {
					$("#idTable").find("tr:gt(0)").remove();
					$("#table").find("tr:gt(0)").remove();
					load();
					resetForm();
					alert(data);
				},
				error : function(jqXHR, exception) {
					alert("error");
				}
			});
		}else{
			alert("Fill form");
		}
	}
}

function delet(){
	getID();
	swal({
		title: "Are you sure?",
		text: "Do you realy want to Delete this?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					url : 'http://localhost:8080/researchers/webresources/ResearchersResources/Researchers/' + $('#researchers_id').val(),
					method: 'DELETE',
					success: function (resultText) {
						$("#table").find("tr:gt(0)").remove();
						$("#idTable").find("tr:gt(0)").remove();
						load();
						swal("Deleted!", {
							icon: "success",
							});
						},
						error: function (jqXHR, exception) {
							swal("fail");
						}
					});
				} else {
					swal("Safe!");
				}
			});
}

function deletSearch(){
	getIDserch();
	swal({
		title: "Are you sure?",
		text: "Do you realy want to Delete this?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				$.ajax({
					url : 'http://localhost:8080/researchers/webresources/ResearchersResources/Researchers/' + $('#researchers_id').val(),
					method: 'DELETE',
					success: function (resultText) {
						$("#table").find("tr:gt(0)").remove();
						$("#idTable").find("tr:gt(0)").remove();
						load();
						swal("Deleted!", {
							icon: "success",
							});
						},
						error: function (jqXHR, exception) {
							swal("fail");
						}
					});
				} else {
					swal("Safe!");
				}
			});
}

function load() {
	$.ajax({
		url : 'http://localhost:8080/researchers/webresources/ResearchersResources/Researcherss',
		method : 'GET',
		headers : {
			Accept : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(data, textStatus, errorThrown) {
			var items = [];
			$.each(data.researchers,function(key, val) {
				var index = key + 1;
				items.push("<tr>");
				items.push("<td>" + index + "</td>");
				items.push("<td>" + val.researchers_id + "</td>");
				items.push("<td>" + val.name + "</td>");
				items.push("<td>" + val.qualifications + "</td>");
				items.push("<td>" + val.country + "</td>");
				items.push("<td>" + val.email + "</td>");
				items.push("<td>" + val.contact_number + "</td>");
				items.push("<td>" + val.interested_research_areas + "</td>");
				items.push("<td><button onclick='getRow()' type='button' class='btn btn-info btn-fill'>Edit</button></td>");
				items.push("<td><button onclick='delet()' type='button' class='btn btn-danger btn-fill'>Delete</button></td>");
				items.push("</tr>");
			});
		$("<tbody/>", {
			html : items.join("")
		}).appendTo("#table");
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Ajax request fail");
		},
		timeout : 120000,
	});
}

function getJSON() {
	return JSON.stringify({
		"researchers_id" : $('#researchers_id').val(),
		"name" : $('#name').val(),
		"qualifications" : $('#qualifications').val(),
		"country" : $('#country').val(),
		"email" : $('#email').val(),
		"contact_number" : $('#contact_number').val(),
		"interested_research_areas" : $('#interested_research_areas').val(),
	});
}

function ValidInput(){
	var researchers_id = $('#researchers_id').val();
	var name = $('#name').val();
	var qualifications = $('#qualifications').val();
	var country = $('#country').val();
	var email = $('#email').val();
	var contact_number = $('#contact_number').val();
	var interested_research_areas = $('#interested_research_areas').val();
	var researchers_id = $('#researchers_id').val();
	var name = $('#name').val();
	var qualifications = $('#qualifications').val();
	var country = $('#country').val();
	var email = $('#email').val();
	var contact_number = $('#contact_number').val();
	var interested_research_areas = $('#interested_research_areas').val();
	if(researchers_id === "" || name === "" || qualifications === "" || country === "" || email === "" || contact_number === "" || interested_research_areas === ""){
		return false;
	}else{
		return true;
	}
	return true;
}

function search(){
$("#idTable").find("tr:gt(0)").remove();
	var searchID = $('#searchID').val();
	if(searchID === ""){
		alert("Please Enter ID")
	}else{
	$.ajax({
		url : 'http://localhost:8080/researchers/webresources/ResearchersResources/Researchers/' + searchID,
		method : 'GET',
		headers : {
			Accept : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(data, textStatus, errorThrown) {
			var items = [];
			$.each(data,function(key, val) {
				var index = key + 1;
				items.push("<tr>");
				items.push("<td>" + index + "</td>");
				items.push("<td>" + val.researchers_id + "</td>");
				items.push("<td>" + val.name + "</td>");
				items.push("<td>" + val.qualifications + "</td>");
				items.push("<td>" + val.country + "</td>");
				items.push("<td>" + val.email + "</td>");
				items.push("<td>" + val.contact_number + "</td>");
				items.push("<td>" + val.interested_research_areas + "</td>");
				items.push("<td><button onclick='getRow()' type='button' class='btn btn-info btn-fill'>Edit</button></td>");
				items.push("<td><button onclick='delet()' type='button' class='btn btn-danger btn-fill'>Delete</button></td>");
				items.push("</tr>");
			});
		$("<tbody/>", {
			html : items.join("")
		}).appendTo("#idTable");
	},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Ajax request fail");
		},
		timeout : 120000,
		});
	}
}