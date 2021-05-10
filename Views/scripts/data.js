// users = [
//     [
//         "firstName": "Ole",
//         "lastName": "Henriksen",
//         "Køn": "Mand",
//         "Alder": 54,
//         "img": "ole-h.jpeg"
//     ],
//     [
//         "firstName": "Søren",
//         "lastName": "Espersen",
//         "Køn": "Mand",
//         "Alder": 54,
//         "img": "ole-h.jpeg"
//     ]
// ]


// users.forEach(function(user) {
//     str += '<li>'+ user + '</li>';
//   }); 
  
//   str += '</ul>';
//   document.getElementById("slideContainer").innerHTML = str;


// All Users array
var users = [
    ["Ole", "Henriksen", "mand", 57, "ole-h.jpeg"],
    ["Søren", "Espersen", "mand", 61, "soren-e.jpeg"], 
    ["Astrid", "Lindgren", "Kvinde", 72, "astrid-l.jpeg"],
    ["Lilje", "Vanilje", "Kvinde", 21, "vanilje.jpeg"],
    ["Torben", "Tyrring", "Mand", 50, "torben-t.jpeg"],
    ["John", "Dillermand", "Mand", 30, "john-d.jpeg"],
    ["Mads", "Mikkelsen", "Mand", 47, "mads-m.jpeg"],
    ["Paprika", "Steen", "Kvinde", 38, "paprika-s.jpeg"],
    ["Tessa", "T.", "Kvinde", 21, "tessa.jpeg"],
    ["Morten", "Münster", "Mand", 21, "morten-m.jpeg"]
];

var displayUser = [];

document.addEventListener("DOMContentLoaded", function(){

    if(document.getElementById("allUsers")) {
    
        // Get all Users
        users.forEach(user => {
            var content  = "<tr>";
            content  += '<td><a href="profile.html">' + user[0] + '</a></td>';
            content  += '<td><a href="profile.html">' + user[1] + '</a></td>';
            content  += '<td>' + user[2] + '</a></td>';
            content  += '<td>' + user[3] + '</a></td>';
            content  += '<td><div class="imgContainer"><a href="profile.html"><img src="img/' + user[4] + '" alt="" class="img-responsive"></div></a></td>';
            content  += '<td class="likeIcon"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> / <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>';
            content  += "</tr>";

            displayUser.push(content);      
        });
        document.getElementById("allUsers").innerHTML = displayUser.join("");

    } else if(document.getElementById("myMatches")!='undefined') {

        // Array with matched Users
        var matchedUser = [
            users[2],
            users[3],
            users[7],
            users[8]
        ];

        // Get macthed Users
        matchedUser.forEach(user => {
            var content  = "<tr>";
            content  += '<td><a href="profile.html">' + user[0] + '</a></td>';
            content  += '<td><a href="profile.html">' + user[1] + '</a></td>';
            content  += '<td>' + user[2] + '</a></td>';
            content  += '<td>' + user[3] + '</a></td>';
            content  += '<td><div class="imgContainer"><a href="profile.html"><img src="img/' + user[4] + '" alt="" class="img-responsive"></div></a></td>';
            content  += '<td class="likeIcon"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></td>';
            content  += "</tr>";

            displayUser.push(content);      
        });
        document.getElementById("myMatches").innerHTML = displayUser.join("");
        console.log(matchedUser);    }
})

function alertDeleteUser() {
    confirm("Er du sikker på, at du vil slette din profil?");
}