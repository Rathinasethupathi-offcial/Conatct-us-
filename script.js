function handleSubmit(event) {
    event.preventDefault(); 


    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Email = document.getElementById("Email").value;
    let QuerySelector = document.querySelector('input[name="QuerySelector"]:checked').value;
    let Message = document.getElementById("Message").value;

    
    console.log("First Name:", FirstName);
    console.log("Last Name:", LastName);
    console.log("Email:", Email);
    console.log("Query Selector:", QuerySelector);
    console.log("Message:", Message);

   
    alert("Form submitted successfully!");
}
