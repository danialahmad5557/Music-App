let mysound = document.getElementById("mysound");
        let icon = document.getElementById("icon");

        // Creating a function that will change 
        // pause to play and vice-versa
        icon.onclick = function () {
            if (mysound.paused) {

                // If paused then play the 
                // music and change the image
                mysound.play();
                icon.src =
"pause.png";
            } else {

                // If playing then pause the
                // music and change the image
                mysound.pause();
                icon.src =
                "play.png";
            }
        }
