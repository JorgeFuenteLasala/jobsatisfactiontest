/* TRIGGERS */


document.getElementById("button1").addEventListener("click",button1data);
document.getElementById("button1").addEventListener("click",updateprofile);
document.getElementById("button2").addEventListener("click",button2data);
document.getElementById("button2").addEventListener("click",updateprofile);
document.getElementById("scale1").addEventListener("click",scale1data);
document.getElementById("scale1").addEventListener("click",updatetest);
document.getElementById("scale2").addEventListener("click",scale2data);
document.getElementById("scale2").addEventListener("click",updatetest);
document.getElementById("scale3").addEventListener("click",scale3data);
document.getElementById("scale3").addEventListener("click",updatetest);
document.getElementById("scale4").addEventListener("click",scale4data);
document.getElementById("scale4").addEventListener("click",updatetest);
document.getElementById("scale5").addEventListener("click",scale5data);
document.getElementById("scale5").addEventListener("click",updatetest);

/* MAIN COMPONENTS */

var intro = document.getElementById("intro");
var mainframe = document.getElementById("mainframe");
var result = document.getElementById("result");
var resultcontainer = document.getElementById("resultcontainer");
var resultsubtitle = document.getElementById("resultsubtitle");
var progressbar = document.getElementById("progressbar");
var whatscore = document.getElementById("whatscore");
var whoscore = document.getElementById("whoscore");
var howscore = document.getElementById("howscore");
var muchscore = document.getElementById("muchscore");
var longscore = document.getElementById("longscore");

var resetbutton = document.getElementById("resetbutton");
var caption = document.getElementById("caption");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

var testtext = document.getElementById("testtext");
var scale1 = document.getElementById("scale1");
var scale2 = document.getElementById("scale2");
var scale3 = document.getElementById("scale3");
var scale4 = document.getElementById("scale4");
var scale5 = document.getElementById("scale5");

/* BASIC DATA FOR CALCULATIONS */
var profilewhatdata = 1;
var profilewhodata = 1;
var profilehowdata = 1;
var profilemuchdata = 1;
var profilelongdata = 1;

var testwhatdata = 1;
var testwhodata = 1;
var testhowdata = 1;
var testmuchdata = 1;
var testlongdata = 1;

var colorwhat = "#AD820C";
var colorwho = "#FCBA03";
var colorhow = "#F2D37E";
var colormuch = "#8A826D";
var colorlong = "#B5B4B0";

/* COMPONENT VALUE WHEN TRIGGERING: what, who, how, much, long */
var button1value = 'null';
var button2value = 'null';
var scalevalue = 'null';

var buttonactive = 0;
var scaleactive = 0;

var resultwhat = 0;
var resultwho = 0;
var resulthow = 0;
var resultmuch = 0;
var resultlong = 0;
var resulttotal = 0;


/* STATUS CONTROLLER: intro, profile, test, result */

var status = 'intro';

function updatestatus() {

    if (status == 'intro') {
        status = 'profile';
        intro.classList.add("left");
        mainframe.classList.add("in");
    }
    else if (status == 'profile') {
        status = 'test';
        mainframe.classList.remove("status1");
        mainframe.classList.add("status2");
    }
    else if (status == 'test') {
        status = 'result';
        mainframe.classList.remove("status2");
        mainframe.classList.add("status3");
    }
}

/* UPDATE PROFILE: Check and refresh the questions */
const profilewhat = ["Added value to society","Type of product/service","Your professional role","A disruptive business idea"];
const profilewho = ["Inspiring leadership","Mentorship and pairing","Fellowship with colleagues","Learning opportunities"];
const profilehow = ["Flat hierarchies","Cultural fit","Technology and methodologies","Best practices"];
const profilemuch = ["Net salary","Non monetary benefits","Work-life balance","Perks and equity"];
const profilelong = ["Company funding","Chances of internal promotion","Future career projection","Permanent contract"];

var stepprofile = 0;

function updateprofile() {
    stepprofile++;

    if (buttonactive == 1) {
        button1.classList.add("button__out","active");
        button2.classList.add("button__out");

    }
    else if (buttonactive == 2) {
        button1.classList.add("button__out");
        button2.classList.add("button__out","active");
    }

    if (stepprofile == 1) {
        button1.innerHTML = profilewhat[0];
        button2.innerHTML = profilewho[0];
        button1value = 'what';
        button2value = 'who';
        progressbar.style.transform = 'scaleX(.1)';
    }

    setTimeout(function(){ 
        buttonactive = 0;
        button1.classList.remove("button__out","active"); 
        button2.classList.remove("button__out","active");
        
        
        if (stepprofile == 2) {
            button1.innerHTML = profilewhat[1];
            button2.innerHTML = profilehow[0];
            button1value = 'what';
            button2value = 'how';
            progressbar.style.transform = 'scaleX(.2)';
            resetbutton.classList.remove("hidden"); 
            caption.classList.add("hidden"); 
        }
        else if (stepprofile == 3) {
            button1.innerHTML = profilewhat[2];
            button2.innerHTML = profilemuch[0];
            button1value = 'what';
            button2value = 'much';
            progressbar.style.transform = 'scaleX(.3)';
        }
        else if (stepprofile == 4) {
            button1.innerHTML = profilewhat[3];
            button2.innerHTML = profilelong[0];
            button1value = 'what';
            button2value = 'long';
            progressbar.style.transform = 'scaleX(.4)';
        }
        else if (stepprofile == 5) {
            button1.innerHTML = profilewho[1];
            button2.innerHTML = profilehow[1];
            button1value = 'who';
            button2value = 'how';
            progressbar.style.transform = 'scaleX(.5)';
        }
        else if (stepprofile == 6) {
            button1.innerHTML = profilewho[2];
            button2.innerHTML = profilemuch[1];
            button1value = 'who';
            button2value = 'much';
            progressbar.style.transform = 'scaleX(.6)';
        }
        else if (stepprofile == 7) {
            button1.innerHTML = profilewho[3];
            button2.innerHTML = profilelong[1];
            button1value = 'who';
            button2value = 'long';
            progressbar.style.transform = 'scaleX(.7)';
        }
        else if (stepprofile == 8) {
            button1.innerHTML = profilehow[2];
            button2.innerHTML = profilemuch[2];
            button1value = 'how';
            button2value = 'much';
            progressbar.style.transform = 'scaleX(.8)';
        }
        else if (stepprofile == 9) {
            button1.innerHTML = profilehow[3];
            button2.innerHTML = profilelong[2];
            button1value = 'how';
            button2value = 'long';
            progressbar.style.transform = 'scaleX(.9)';
        }
        else if (stepprofile == 10) {
            button1.innerHTML = profilemuch[3];
            button2.innerHTML = profilelong[3];
            button1value = 'much';
            button2value = 'long';
            progressbar.style.transform = 'scaleX(1)';
        }
        else if (stepprofile == 11) {
            updatestatus();
            updatetest();
        }
    }, 400);
}



/* UPDATE PROFILE DATA: Load values for estimation and refresh graph and buttons */
    function button1data() {
        buttonactive = 1;
        if (button1value == 'what') {profilewhatdata++;}
        else if (button1value == 'who') {profilewhodata++;}
        else if (button1value == 'how') {profilehowdata++;}
        else if (button1value == 'much') {profilemuchdata++;}
        else if (button1value == 'long') {profilelongdata++;}

        if (stepprofile == 1) {profilewhatdata--; profilewhodata--; profilehowdata--; profilemuchdata--; profilelongdata--;}

        updateprofiledata();
    }

    function button2data() {
        buttonactive = 2;
        if (button2value == 'what') {profilewhatdata++;}
        else if (button2value == 'who') {profilewhodata++;}
        else if (button2value == 'how') {profilehowdata++;}
        else if (button2value == 'much') {profilemuchdata++;}
        else if (button2value == 'long') {profilelongdata++;}

        if (stepprofile == 1) {profilewhatdata--; profilewhodata--; profilehowdata--; profilemuchdata--; profilelongdata--;}

        updateprofiledata();
    }

    function updateprofiledata() {
        profilegraph.data.datasets[0].data = [profilewhatdata, profilewhodata, profilehowdata, profilemuchdata, profilelongdata];
        profilegraph.update();
    }

/* UPDATE TEST: Check and refresh the questions */
const testwhat = ["The project has a positive social impact","I feel satisfied with my role in the team"];
const testwho = ["There is an inspiring leadership","I can learn a lot from other colleagues"];
const testhow = ["I like the internal culture of the company","The team is using a suitable technology and/or methodologies"];
const testmuch = ["Retribution fits my expectations","I can have a good work-life balance"];
const testlong = ["This position offers good stability","Through this position I could get professional promotions"];

var steptest = 0;

function updatetest() {
    steptest++;

    if (scaleactive == 1) {
        scale1.classList.add("active");
        testtext.classList.add("out");
    }
    else if (scaleactive == 2) {
        scale2.classList.add("active");
        testtext.classList.add("out");
    }
    else if (scaleactive == 3) {
        scale3.classList.add("active");
        testtext.classList.add("out");
    }
    else if (scaleactive == 4) {
        scale4.classList.add("active");
        testtext.classList.add("out");
    }
    else if (scaleactive == 5) {
        scale5.classList.add("active");
        testtext.classList.add("out");
    }  


    if (steptest == 1) {
        scalevalue = 'what';
        testtext.innerHTML = testwhat[0];
        progressbar.style.transform = 'scaleX(.1)';
    }

    setTimeout(function(){ 
        stepactive = 0;
        scale1.classList.remove("active"); 
        scale2.classList.remove("active"); 
        scale3.classList.remove("active"); 
        scale4.classList.remove("active"); 
        scale5.classList.remove("active"); 
        testtext.classList.remove("out");

        
    
        if (steptest == 2) {
            scalevalue = 'what';
            testtext.innerHTML = testwhat[1];
            progressbar.style.transform = 'scaleX(.2)';
        }
        else if (steptest == 3) {
            scalevalue = 'who';
            testtext.innerHTML = testwho[0];
            progressbar.style.transform = 'scaleX(.3)';
        }
        else if (steptest == 4) {
            scalevalue = 'who';
            testtext.innerHTML = testwho[1];
            progressbar.style.transform = 'scaleX(.4)';
        }
        else if (steptest == 5) {
            scalevalue = 'how';
            testtext.innerHTML = testhow[0];
            progressbar.style.transform = 'scaleX(.5)';
        }
        else if (steptest == 6) {
            scalevalue = 'how';
            testtext.innerHTML = testhow[1];
            progressbar.style.transform = 'scaleX(.6)';
        }
        else if (steptest == 7) {
            scalevalue = 'much';
            testtext.innerHTML = testmuch[0];
            progressbar.style.transform = 'scaleX(.7)';
        }
        else if (steptest == 8) {
            scalevalue = 'much';
            testtext.innerHTML = testmuch[1];
            progressbar.style.transform = 'scaleX(.8)';
        }
        else if (steptest == 9) {
            scalevalue = 'long';
            testtext.innerHTML = testlong[0];
            progressbar.style.transform = 'scaleX(.9)';
        }
        else if (steptest == 10) {
            scalevalue = 'long';
            testtext.innerHTML = testlong[1];
            progressbar.style.transform = 'scaleX(1)';
        }
        else if (steptest == 11) {
            displayresult();
            updatestatus();
        }
    }, 400);
}

/* UPDATE TEST DATA: Load values for estimation and refresh graph and buttons */
function scale1data() {
    scaleactive = 1;
    if (scalevalue == 'what') {testwhatdata++;}
    else if (scalevalue == 'who') {testwhodata++;}
    else if (scalevalue == 'how') {testhowdata++;}
    else if (scalevalue == 'much') {testmuchdata++;}
    else if (scalevalue == 'long') {testlongdata++;}

    if (steptest == 1) {testwhatdata--;testwhodata--;testhowdata--;testmuchdata--;testlongdata--;}

    updatetestdata();
}

function scale2data() {
    scaleactive = 2;
    if (scalevalue == 'what') {testwhatdata += 2;}
    else if (scalevalue == 'who') {testwhodata += 2;}
    else if (scalevalue == 'how') {testhowdata += 2;}
    else if (scalevalue == 'much') {testmuchdata += 2;}
    else if (scalevalue == 'long') {testlongdata += 2;}

    if (steptest == 1) {testwhatdata--;testwhodata--;testhowdata--;testmuchdata--;testlongdata--;}

    updatetestdata();
}

function scale3data() {
    scaleactive = 3;
    if (scalevalue == 'what') {testwhatdata += 3;}
    else if (scalevalue == 'who') {testwhodata += 3;}
    else if (scalevalue == 'how') {testhowdata += 3;}
    else if (scalevalue == 'much') {testmuchdata += 3;}
    else if (scalevalue == 'long') {testlongdata += 3;}

    if (steptest == 1) {testwhatdata--;testwhodata--;testhowdata--;testmuchdata--;testlongdata--;}

    updatetestdata();
}

function scale4data() {
    scaleactive = 4;
    if (scalevalue == 'what') {testwhatdata += 4;}
    else if (scalevalue == 'who') {testwhodata += 4;}
    else if (scalevalue == 'how') {testhowdata += 4;}
    else if (scalevalue == 'much') {testmuchdata += 4;}
    else if (scalevalue == 'long') {testlongdata += 4;}

    if (steptest == 1) {testwhatdata--;testwhodata--;testhowdata--;testmuchdata--;testlongdata--;}

    updatetestdata();
}

function scale5data() {
    scaleactive = 5;
    if (scalevalue == 'what') {testwhatdata += 5;}
    else if (scalevalue == 'who') {testwhodata += 5;}
    else if (scalevalue == 'how') {testhowdata += 5;}
    else if (scalevalue == 'much') {testmuchdata += 5;}
    else if (scalevalue == 'long') {testlongdata += 5;}

    if (steptest == 1) {testwhatdata--;testwhodata--;testhowdata--;testmuchdata--;testlongdata--;}

    updatetestdata();
}


function updatetestdata() {
    questionarygraph.data.datasets[0].data = [testwhatdata, testwhodata, testhowdata, testmuchdata, testlongdata];
    questionarygraph.update();
}

/* DISPLAY RESULT: Final calculation and display of results in card and legend */

function displayresult() {

    var localwhat = testwhatdata * profilewhatdata;
    var localwho = testwhodata * profilewhodata;
    var localhow = testhowdata * profilehowdata;
    var localmuch = testmuchdata * profilemuchdata;
    var locallong = testlongdata * profilelongdata;

    resulttotal = localwhat + localwho + localhow + localmuch + locallong;

    result.innerHTML = resulttotal + '%';
    whatscore.innerHTML = localwhat + '%';
    whoscore.innerHTML = localwho + '%';
    howscore.innerHTML = localhow + '%';
    muchscore.innerHTML = localmuch + '%';
    longscore.innerHTML = locallong + '%';

    if (resulttotal >= 70) {
        resultcontainer.classList.add("result__right");
        resultsubtitle.innerHTML = 'Very satisfactory';
    }

    else if (resulttotal >= 50) {
        resultcontainer.classList.add("result__neutral");
        resultsubtitle.innerHTML = 'Quite satisfactory';
    }

    else {
        resultcontainer.classList.add("result__wrong");
        resultsubtitle.innerHTML = 'Not satisfactory';
    }
}

/* GRAPHS */


var ctx = document.getElementById('profilegraph').getContext('2d');
var profilegraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [profilewhatdata, profilewhodata, profilehowdata, profilemuchdata, profilelongdata],
            backgroundColor: [
                colorwhat,
                colorwho,
                colorhow,
                colormuch,
                colorlong
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false
           }
        }
    }
});

var ctx2 = document.getElementById('questionarygraph').getContext('2d');
var questionarygraph = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            data: [testwhatdata, testwhodata, testhowdata, testmuchdata, testlongdata],
            backgroundColor: [
                colorwhat,
                colorwho,
                colorhow,
                colormuch,
                colorlong
            ],
            borderWidth: 0
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
           }
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        },
        responsive: true,
        
    }
});

window.onload = updatestatus();
window.onload = updateprofile();