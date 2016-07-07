
/* jshint undef: true, unused: true */
/* globals HTMLemail, HTMLheaderName, googleMap, $,
 HTMLheaderRole, HTMLmobile, HTMLgithub,  HTMLtwitter, HTMLlocation,
 HTMLbioPic, HTMLwelcomeMsg, HTMLskillsStart, HTMLskills, HTMLschoolName,
 HTMLschoolDegree, HTMLschoolLocation, HTMLschoolDates, HTMLschoolMajor,
 HTMLschoolStart, HTMLonlineClasses, HTMLonlineTitle, HTMLonlineSchool
 ,HTMLonlineDates, HTMLonlineURL, HTMLworkEmployer, HTMLworkTitle, HTMLworkLocation
 ,HTMLworkDates,HTMLworkDescription, HTMLworkStart */

$("#mapDiv").append(googleMap);
var bio = {
    name : "Uzma Syed",
    role : "Software Engineer",
    contacts : {mobile: "04262471988",
        email: "uzmasyed00@gmail.com",
        github: "uzmasyed00",
        twitter: "uzmasyed00",
        location: "Sydney, Australia"},
    welcomeMessage: "Welcome",
    skills: ["Front-end-Development","Back-end-Development","Databases"],
    biopic:"./images/fry.jpg",
    display: function (){
        var candidateName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(candidateName);


        var candidateRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(candidateRole);

        var candidateMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#header").append(candidateMobile);
        $("#footerContacts").append(candidateMobile);

        var candidateEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#header").append(candidateEmail);
        $("#footerContacts").append(candidateEmail);


        var candidateGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#header").append(candidateGithub);
        $("#footerContacts").append(candidateGithub);

        var candidateTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#header").append(candidateTwitter);
        $("#footerContacts").append(candidateTwitter);

        var candidateLocation = HTMLlocation.replace("%data%", bio.contacts.location + "<br>");
        $("#header").append(candidateLocation);
        $("#footerContacts").append(candidateLocation);

        var candidatePic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(candidatePic);

        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#header").append(HTMLskillsStart);

        var appendedSkills = bio.skills[0] + "<br>";
        for(var i=1; i<bio.skills.length; i++){
            appendedSkills+= bio.skills[i] + "<br>" ;
        }

        var candidateSkills =  HTMLskills.replace("%data%", appendedSkills);
        $("#header").append(candidateSkills);

    }
};

var education = {
    schools: [
        {
            name: "University of Waterloo",
            location: "Waterloo, Canada",
            degree : "BSc, Electrical and Computer Engineering",
            majors:["Management Sciences"],
            dates: "2007-2012",
            url:"https://uwaterloo.ca/"
        },
        {
            name: "TAFE",
            location: "Melbourne, Australia",
            degree : "Diploma of Software Development",
            majors: ["Web Development"],
            dates: "2014-2015",
            url:"http://www.tafecourses.com.au/?gclid=CLSvj77l280CFQGbvAod4VQK7Q"
        }
    ],

    onlineCourses : [
        {
            title:"Full Stack Developer Nanodegree",
            date:"Feb 2015 - Nov 2015",
            school:"Udacity",
            url:"https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"

        }
    ],

    display : function() {
        for( var i = 0; i<education.schools.length ; i++)
        {
            //var appendedEducation = $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location) + "<br>";
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchool + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedMajors);
            $(".education-entry:last").append(formattedLocation + "<br>");
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        //$("#education").append(HTMLonlineClasses);
        //$("#education").append(HTMLschoolStart);
        for( i = 0; i<education.onlineCourses.length; i++){

            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title)+
                HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));

            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
            //$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
        }
    }
};

var work = {
    jobs:[
        {
            employer: "SafetyCulture company",
            title: "Software Development Engineer in Test",
            location: "Surry Hills",
            dates : "2016-Present",
            description:"Currently responsible for automating all deployments",

        },

        {
            employer: "Covata",
            title: "Software Engineer in Test",
            location: "Sydney city",
            dates : "2014-2016",
            description:"Responsible for testing all mobile releases"
        }
    ],


    display: function(){
        for (var i = 0; i< work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDates +
                formattedWorkDescription);

        }
    }
};

var projects = {
    projects:[
        {
            title:"Class D Audio Amplifier",
            dates:"Mar 2012 - June 2012",
            description:"An efficient amplifier that amplifies audio signals",
            images: ["./images/amplifier.jpeg"]
        },

        {
            title:"Item Catalog",
            dates:"Mar 2015 - June 2015",
            description:"A web application",
            images: ["./images/itemCatalog.jpeg"]
        }
    ],

    display : function(){

        var HTMLprojectStart = '<div class="project-entry"></div>';
        var HTMLprojectTitle = '<a href="#">%data%</a>';
        var HTMLprojectDates = '<div class="date-text">%data%</div>';
        var HTMLprojectDescription = '<p><br>%data%</p>';
        var HTMLprojectImage = '<img src="%data%">';

        //var j=0;
        var firstProjectImage = HTMLprojectDescription.replace("%data%", projects.projects[0].images);
        for (var i = 0; i< projects.projects.length; i++) {
            var formattedProjectTile = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedProjectImage;
            var ImagesForEachProject;

                for (j = 0; j < projects.projects[i].images.length; j++) {
                    ImagesForEachProject = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                }

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectTile + formattedProjectDates + formattedProjectDescription + ImagesForEachProject
            );

        }

    }

};


