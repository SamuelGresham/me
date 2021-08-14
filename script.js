function el(id) {
    return document.getElementById(id);
}

function hoverOver (option) {
    if (option == 0) {
        el('opt0').innerHTML = "> goto about-me";
        el('opt1').innerHTML = "$ goto resume";
        el('opt2').innerHTML = "$ goto music";
        el('opt3').innerHTML = "$ goto projects";

    } else if (option == 1) {
        el('opt0').innerHTML = "$ goto about-me";
        el('opt1').innerHTML = "> goto resume";
        el('opt2').innerHTML = "$ goto music";
        el('opt3').innerHTML = "$ goto projects";

    } else if (option == 2) {
        el('opt0').innerHTML = "$ goto about-me";
        el('opt1').innerHTML = "$ goto resume";
        el('opt2').innerHTML = "> goto music";
        el('opt3').innerHTML = "$ goto projects";

    } else if (option == 3) {
        el('opt0').innerHTML = "$ goto about-me";
        el('opt1').innerHTML = "$ goto resume";
        el('opt2').innerHTML = "$ goto music";
        el('opt3').innerHTML = "> goto projects";

    }
}

function openPage (page) {
    jQuery('#intro').fadeOut("fast",function () {
        jQuery('#resume').fadeOut("fast",function () {
            jQuery('#about-me').fadeOut("fast", function () {
                jQuery('#music').fadeOut("fast" ,function () {
                    jQuery('#projects').fadeOut("fast", function () {
                        if(page == 'about-me') {
                            $('#about-me').fadeIn("fast");
                        } else if (page == 'intro') {
                            $("#intro").fadeIn("fast");
                        }  else if (page == 'resume') {
                            $("#resume").fadeIn("fast");
                        }  else if (page == 'music') {
                            $("#music").fadeIn("fast");
                        }  else if (page == 'projects') {
                            $("#projects").fadeIn("fast");
                        }
                    });
                });
            });
        });
    });
}

const songs = [{
    artist: "Ball Park Music",
    song: "Surrender"
}, {
    artist: "Spacey Jane",
    song: "Trucks"
}, {
    artist: "Car Seat Headrest",
    song: "Deadlines (Hostile)"
}, {
    artist: "Radiohead",
    song: "Let Down"
}, {
    artist: "Spacey Jane",
    song: "Neoprene"
}, {
    artist: "Spacey Jane",
    song: "Thrills"
}, {
    artist: "The Strokes",
    song: "Last Nite"
}, {
    artist: "Depression Cherry",
    song: "Space Song"
}, {
    artist: "Ball Park Music",
    song: "Bad Taste Blue (Part III)"
}
]

var playing = [];

// Play a song
function play (song_index) {
    silence ();
    playing = [];
    var audio = new Audio('./assets/' + song_index + '.wav');
    audio.play();
    playing.push(audio);
    displayNotification("Now playing: " + songs[song_index].song + " by " + songs[song_index].artist);
}

function displayNotification (text) {
    document.getElementById("ntext").innerHTML = text;
    $(".notification-box").fadeIn("slow");
    setTimeout(() => {
        $(".notification-box").fadeOut("slow");
    }, 6000);
}

// Stop all currently playing songs 
function silence () {
    for (i = 0; i < playing.length; i++) {
        playing[i].pause();
    }
}

function s() {
    silence();
}
