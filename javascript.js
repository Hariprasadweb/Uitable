var data = [
    { name: "Hari", department: "IT Software engineering", city: "Hyderabad" },
    { name: "Lisa", department: "Rapper", city: "Thailand" },
    { name: "Jisoo", department: "Singer", city: "Korea" }
];

function populate() {
    var tableBody = document.getElementById("table-body");

    for (var i = 0; i < data.length; i++) {
        var row = tableBody.insertRow(i);

        var nameCell = row.insertCell(0);
        var departmentCell = row.insertCell(1);
        var cityCell = row.insertCell(2);

        nameCell.innerHTML = data[i].name;
        departmentCell.innerHTML = data[i].department;
        cityCell.innerHTML = data[i].city;
    }
}

window.onload = function() {
    populate();
};
