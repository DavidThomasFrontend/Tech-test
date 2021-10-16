function loadXML(){
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange= function(){
        if(this.readyState == 4 && this.status == 200){
            empDetails(this);
        }
    };
    xmlHttp.open("GET", "file.xml", true);
    xmlHttp.send();
}

function empDetails(xml) {
    let i;
    let xmlDoc = xml.responseXML;
    let table = 
    `<tr><th>ReferenceNum</th>
    <th>CountryCode</th><th>FullName</th>
    <th>AddressType</th><th>AddressLine1</th>
    <th>AddressLine2</th>

    <th>CustomerCode</th><th>FirstName</th>
    <th>LastName</th><th>Phone</th><th>Email</th>
    
    <th>ItemNum</th><th>ItemDescription</th>
    </tr>`;

    let tagName = xmlDoc.getElementsByTagName("Order");

    for (i = 0; i < tagName.length; i++) {
        table += "<tr><td>" +
            tagName[i].getElementsByTagName("ReferenceNum")[0]
            .childNodes[0].nodeValue + "</td><td>" +
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
    document.getElementById("table").innerHTML=table;
}


//Note: in order to get this to work i had to enter the following command in terminal://
// open -a "Google Chrome" --args --allow-file-access-from-files //
