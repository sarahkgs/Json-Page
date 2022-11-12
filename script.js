let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title": "Walk This Way",
  "picture": 'wayfinding.jpg',
  "author" : "Jim Harding",
  "description": "99% Invisible producer Sam Greenspan meets wayfinding expert Jim Harding to discuss his approach on designing airport wayfinding.",
  "tags" : ["Infrastructure", "Environmental Design"]
};

var randomIndex = Math.floor(Math.random() * myJSON["tags"].length);


let jsonDatabase = [
{
    "title": "The Secret Lives of Color",
    "picture": 'secretlivesofcolor.jpg',
    "author" : "Kassia St. Clair",
    "description": "Host Roman Mars speaks with Kassia St. Clair, author of The Secret Lives of Color. She discusses different colors, the way they’ve been made through history, and the lengths to which people will go to get the brightest splash of color.",
    "tags" : ["Visual Arts", "Design Foundation"]
},
{
    "title": "Design Research with Sarah Fathallah",
    "picture": 'designresearch.jpg',
    "author" : "Sarah Fathallah",
    "description": "Sarah Fathallah, a Moroccan social designer and researcher, talks about her work at the intersection of human-centered design, community-centered design and participatory design.",
    "tags" : ["Design Research", "Social Impact"]
  }
];

createElementProper(myJSON);


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}


function createElementProper(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

    let newImage=document.createElement("IMG");
    newImage.classList.add("headerImage");
    newImage.src = incomingJSON['picture'];
    newContentElement.appendChild(newImage);

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentAuthor = document.createElement("H4");
  newContentAuthor.innerText = incomingJSON['author'];
  newContentElement.appendChild(newContentAuthor);

  let newContentDesc = document.createElement("H5");
  newContentDesc.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDesc);

  let newContentSubhead = document.createElement("H6");
  newContentSubhead.innerText = "Categories:";
  newContentElement.appendChild(newContentSubhead);

  let newContentTagList = document.createElement("H5");
  newContentElement.appendChild(newContentTagList);

  for (var i = 0; i < incomingJSON['tags'].length; i++){
    var currentTagString = incomingJSON['tags'][i];
    var newTagItem = document.createElement("LI");
    newTagItem.innerText = currentTagString;
    newContentTagList.appendChild(newTagItem);
  }


  contentGridElement.appendChild(newContentElement);
}
