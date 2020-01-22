/*
    This script handles the content assignment of project data
*/

const ProjectNames = 
[
    "mirage",
    "exalted"
]

let ProjectText = [];
let prevBtnIndex = -1;
let lockButton = false;

/* Adds the included text data into the array of text. */
for(let i = 0; i < ProjectNames.length; ++i)
{
    ProjectText.push("");
    fetch("./Data/pages/projects/" + ProjectNames[i] + ".html")
    .then( r => r.text() )
    .then( t => ProjectText[i] = t )

}