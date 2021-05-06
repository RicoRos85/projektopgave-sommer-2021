users = [
    [
        "firstName": "Ole",
        "lastName": "Henriksen",
        "Køn": "Mand",
        "Alder": 54,
        "img": "ole-h.jpeg"
    ],
    [
        "firstName": "Søren",
        "lastName": "Espersen",
        "Køn": "Mand",
        "Alder": 54,
        "img": "ole-h.jpeg"
    ]
]


users.forEach(function(user) {
    str += '<li>'+ user + '</li>';
  }); 
  
  str += '</ul>';
  document.getElementById("slideContainer").innerHTML = str;