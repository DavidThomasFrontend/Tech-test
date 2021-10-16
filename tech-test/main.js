let getXMLFile = function(path, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200){
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile("file.xml", function(xml){
    console.log(xml);
})

function loadDocument(){
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function() {
        getXML(this);
    }
    xmlHttp.open("GET", "file.xml");
    xmlHttp.send();
}


function getXML(xml) {
    const xmlDocument = xml.responseXML;
    const tagName = xmlDocument.getElementsByTagName("Orders");
    let table = "<tr><th>Address</th><th>Customer</th><th>OrderLines</th><th>Order</th></tr>";
    for (let i = 0; i <tagName.length; i++) {
        table += "<tr><td>" +
        tagName[i].getElementsByTagName("Order")[0].childNodes[0].nodeValue +
        "</td><td>" +
        tagName[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
        "</td><tr>" +
        tagName[i].getElementsByTagName("Customer")[0].childNodes[0].nodeValue +
        "</td><tr>";
    }
    document.getElementById("customer-data").innerHTML = table;
}
