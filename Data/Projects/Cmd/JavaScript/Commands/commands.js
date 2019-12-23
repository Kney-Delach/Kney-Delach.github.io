var name;
var commandList = ["projects", "cv", "clear", "about", "help", "biography", "title", "progxp", "links"];
function about() {
    name = "about";
    outputAppLine(name, "The updated website design has been implemented by myself :D ");
    outputAppLine(name, "Original website implementation credit: <a href=\"http://szy.wtf/projects/cmd/\" target=\"_blank\">Szymon Jackiewicz</a>, I keep learning new things from you bro, thank you!");
    outputAppLine(name, "Original idea concept credit: <a href=\"https://baizel.dev/\" target=\"_blank\">Baizel Mathew</a>.");
}

function biography() {
    name = "biography";
    outputAppLine(name, "Occupation:       Postgraduate Student");
    outputAppLine(name, "University:       Newcastle University");
    outputAppLine(name, "Course:           MSc Computer Games Engeneering");
    outputAppLine(name, "Work Experience:  INSERT INFORMATION HERE");
    outputAppLine(name, " ");
    outputAppLine(name, "Spoken Languages: Hebrew (fluent), English (fluent), Russian (Intermediate)");
    outputAppLine(name, "Live in:          Newcastle-Upon-Tyne & Tel-Aviv");
    outputAppLine(name, "Hobbies:          INSERT INFORMATION HERE");
}

function clear() {
    document.getElementById("trace").innerHTML = "";
}

function help() {
    name = "help";
    var commandListString = "Commands: ";
    outputAppLine(name, "Welcome to my terminal!");
    for (var i = 0; i < commandList.length; i++) {
        commandListString = commandListString + "<span onclick=\"checkCommand(\'" + commandList[i] + "\')\" class=\"standout sugg\">" + commandList[i] + "</span>";
        if (i < commandList.length -1) {
            commandListString = commandListString + " | ";
        }
    }
    outputAppLine(name, commandListString);
}

function title() 
{
    name = "title";

    outputAppLine(name, "              ");
    outputAppLine(name, "       .---.  ");
    outputAppLine(name, "     .'_:___@. ");
    outputAppLine(name, "     |__ --==|");
    outputAppLine(name, "     [  ]  :[|");
    outputAppLine(name, "     |__| I=[|");
    outputAppLine(name, "     / / ____|");
    outputAppLine(name, "    |-/.____.'");
    outputAppLine(name, "   /___\\ /___\\");
}

function helloWorld() {
    name = "E";
    var reply = Math.random() * 4
    switch(Math.floor((Math.random() * 4) + 1)) {
         case 1:
             outputAppLine(name, "Hi! How are you doing?");
             break;
         case 2:
             outputAppLine(name, "Hello =)");
             break;
         case 3:
             outputAppLine(name, "Hey there!");
             break;
         default:
             outputAppLine(name, "Beep... Boop...");
             break;
    }
}

function getBarChartRow(header, size) {
    const BAR_CHAR = "&#9552;";
    const PADDING = 13;

    var spacesToAdd = PADDING - header.length;

    return " ".repeat(spacesToAdd) + header + "  &#9566;" + BAR_CHAR.repeat(size) + "|";

}

function programming() 
{
    name = "progXP";
    var spacing = 12;

    outputAppLine(name, "     Language  &#9474;        Beginner     Familiar    Proficient     Expert       Master");
    outputAppLine(name, "-".repeat(15) + "&#9535;" + "-".repeat(spacing) + "&#9531;" + "-".repeat(spacing) + "&#9531;" + "-".repeat(spacing) + "&#9531;" + "-".repeat(spacing) + "&#9531;" + "-".repeat(spacing) + "&#9499;");
    outputAppLine(name, getBarChartRow("C / C++", 57));
    outputAppLine(name, getBarChartRow("GLSL Shaders", 50));
    outputAppLine(name, getBarChartRow("Java", 40));
}

function technologies() {
    name = "techXP";
    outputAppLine(name, "INSERT INFO HERE");
}

function links() {
    name = "links";

    outputAppLine(name, "<a href = \"https://www.facebook.com/whiteoreos\" target=\"_blank\"><i class=\"fa  fa-facebook-square \"></i> Facebook</a>");
    outputAppLine(name, "<a href = \"https://github.com/Kney-Delach\" target=\"_blank\"><i class=\"fa  fa-github \"></i> Github</a>");
    outputAppLine(name, "<a href = \"https://uk.linkedin.com/in/ori-lazar-ba531491\" target=\"_blank\"><i class=\"fa  fa-linkedin-square \"></i> LinkedIn</a>");
    outputAppLine(name, "<a href = \"mailto:orilazar.csz@gmail.com\" target=\"_blank\"><i class=\"fa  fa-envelope \"></i> E-mail me</a>");
    outputAppLine(name, "<a href = \"../../CV/Ori_Lazar_2019.pdf\" target=\"_blank\"><i class=\"fa fa-briefcase \"></i> Download Full CV PDF</a>");
}

function workExperience() {
    name = "workXP";
    outputAppLine(name, "To be added, check back later!! =)");
}

function cv() {
    name = "CV";
    outputAppLine(name, "-------------------");
    outputAppLine(name, "---  <span class=\"standout\">Biography</span>  ---");
    outputAppLine(name, "-------------------");
    biography();

    name = "CV";
    outputAppLine(name, " ");
    outputAppLine(name, "--------------------------------");
    outputAppLine(name, "---  <span class=\"standout\">Programming Experience</span>  ---");
    outputAppLine(name, "--------------------------------");
    programming();

    name = "CV";
    outputAppLine(name, " ");
    outputAppLine(name, "-----------------");
    outputAppLine(name, "---  <span class=\"standout\">Contact</span>  ---");
    outputAppLine(name, "-----------------");
    links();
}

function website(url, website) {
    name = website;
    outputAppLine(name, "Opening...");
    window.open(url, '_blank').focus();
}

function projectList() {
    name = "Projects";
    outputAppLine(name, "University 3rd Year Dissertation[Networking in Games]: <a href = \"https://github.com/SzyJ/Game_Networking_Models/raw/master/Dissertation/main.pdf\" target=\"_blank\" class=\"thumbnail\">Dissertation PDF<span><img src=\"Thumbnails/Dissertation_Thumb.JPG\" /></span></a> <a href = \"https://github.com/SzyJ/GNAT_Core\" target=\"_blank\" class=\"thumbnail\">Project Link<span><img src=\"Thumbnails/GNAT_Thumb.jpg\" /></span></a>");
    outputAppLine(name, "Platforming shooter game[Unity Game Project]: <a href = \"http://szy.wtf/projects/flip/\" target=\"_blank\" class=\"thumbnail\">Flip<span><img src=\"Thumbnails/Flip_Preview.gif\" /></span></a>");
    outputAppLine(name, "Customisable bookmark launcher: <a href = \"http://szy.wtf/projects/homepage./\" target=\"_blank\" class=\"thumbnail\">homepage.<span><img src=\"Thumbnails/Homepage_Thumb.JPG\" /></span></a> <a href = \"https://github.com/SzyJ/homepage./blob/master/README.md\" target=\"_blank\">HOW-TO</a>");
    outputAppLine(name, "Web Design CSS tutorial website: <a href = \"http://szy.wtf/projects/CSS_Tool/Colours_and_Backgrounds.html\" target=\"_blank\" class=\"thumbnail\">CSS Tool<span><img src=\"Thumbnails/CSS_Thumb.JPG\" /></span></a>");
    outputAppLine(name, "My Github project repository: <a href = \"https://github.com/Kney-Delach?tab=repositories\" target=\"_blank\">Github/SzyJ</a>");
}
