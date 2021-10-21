function loadXML(){
    let xmlHttp = new XMLHttpRequest(); // creates a XMLHttpRequest object
    xmlHttp.onreadystatechange= function(){
        if(this.readyState == 4 && this.status == 200){ // Typical action performed when the document is ready in this case the xml file
            // readyState is set to 4//
            // readyState has 5 values 0 - 4//
            // 0 - Uninitialised //
            // 1 - loading //
            // 2 - loaded //
            // 3 - interactive //
            // 4 - complete //
            // when the readyState is at the specified number the function below fires //
            // status is set to 200 which is an "ok" response
            empDetails(this);
        }
    };
    xmlHttp.open("GET", "file.xml", true); // open a file using a GET request
    xmlHttp.send(); // sends request to server //
}

function empDetails(xml) {
    let i;
    let xmlDoc = xml.responseXML; // returns the document containing the XML file
    let table = // this contains the template by which the document will fill
    `<tr><th>ReferenceNum</th>
    <th>CountryCode</th><th>FullName</th>
    <th>AddressType</th><th>AddressLine1</th>
    <th>AddressLine2</th>

    <th>CustomerCode</th><th>FirstName</th>
    <th>LastName</th><th>Phone</th><th>Email</th>
    
    <th>ItemNum</th><th>ItemDescription</th>
    </tr>`;

    let tagName = xmlDoc.getElementsByTagName("Order"); // targets the Main section in  the xml file where all the info is stored

    for (i = 0; i < tagName.length; i++) { // for loop that reiterates until all document information is displayed//
        table += "<tr><td>" +
            tagName[i].getElementsByTagName("ReferenceNum")[0] // getElementsByTagName returns a collection of all elements in a doc with the specified tag name
            .childNodes[0].nodeValue + "</td><td>" + // childNodes return a collection of a nodes child nodes and nodevalue returns a node value of a specific node
            tagName[i].getElementsByTagName("CountryCode")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("FullName")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("AddressType")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("AddressLine1")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("AddressLine2")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("CustomerCode")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("FirstName")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("LastName")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("Phone")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("Email")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("ItemNum")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            tagName[i].getElementsByTagName("ItemDescription")[0]
            .childNodes[0].nodeValue + "</td></tr>";
}
    document.getElementById("table").innerHTML=table; // targets the id of "table" and populates the table div with the above data //
    // innerHTML sets and modifies the contents of an element usually the <p></p> element
}


//Note: in order to get this to work i had to enter the following command in terminal://
// open -a "Google Chrome" --args --allow-file-access-from-files //
