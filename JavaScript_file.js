var el= document.getElementById("button");
el.onclick= function () {
    var xhr= new XMLHttpRequest ();
    xhr.open("GET", "college.json", true);
    xhr.send();
    if (xhr.status === 200 && xhr.readyState === 4) {
        object =JSON.parse(xhr.responseText);
        var pageContent = "";
        for (var i=0; i < object.degrees.length; i++) {
            pageContent += "<tr>";
            pageContent += "<th>College</th>";
            pageContent += "<td>";
            pageContent += "object.College_Degrees[i].College";
            pageContent += "</td>";
            pageContent += "</tr>";
        }
        document.getElementById("Table").innerHTML = pageContent;
    }
};