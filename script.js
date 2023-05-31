
        var masterFolder;

        function showCaptcha() {
            var overlay = document.getElementById("captchaOverlay");
            overlay.style.visibility = "visible";

            // Generate the captcha grid
            var captchaGrid = document.getElementById("captchaGrid");
            captchaGrid.innerHTML = "";

            var rowCount = 3;
            var columnCount = 3;
            var folderCount = 8;
            var imageCounts = [662, 355, 503, 304, 733, 819, 375, 317];

            var correctCount = 0;
            var correctThreshold = 1;

            var masterFolderIndex = Math.floor(Math.random() * folderCount);
            // document.getElementById("masterFolder").textContent = masterFolderIndex;

            var masterFolderName = "";

            switch (masterFolderIndex) {
                case 0:
                    masterFolderName = "Boat";
                    break;
                case 1:
                    masterFolderName = "Seaplane";
                    break;
                case 2:
                    masterFolderName = "Airplane";
                    break;
                case 3:
                    masterFolderName = "Train";
                    break;
                case 4:
                    masterFolderName = "Motorcycle";
                    break;
                case 5:
                    masterFolderName = "Truck";
                    break;
                case 6:
                    masterFolderName = "Bicycle";
                    break;
                case 7:
                    masterFolderName = "Motorbus";
                    break;
            }

            document.getElementById("masterFolder").textContent = masterFolderIndex;
            document.getElementById("masterFolderName").textContent = masterFolderName;




            for (var row = 0; row < rowCount; row++) {
                for (var col = 0; col < columnCount; col++) {
                    var folderIndex = Math.floor(Math.random() * folderCount);
                    var imageIndex = Math.floor(Math.random() * imageCounts[folderIndex]);
                    var imageName = `${folderIndex}_${imageIndex}.jpg`;
                    var imageSrc = `dataset_copy/${folderIndex}/${imageName}`;
                    var imageElement = document.createElement("img");

                    // Assign class "captcha-image" to all images
                    imageElement.className = "captcha-image";

                    // Set the image source
                    imageElement.src = imageSrc;

                    // Assign class based on image content
                    if (folderIndex === 0) {
                        imageElement.classList.add("0");
                    } else if (folderIndex === 1) {
                        imageElement.classList.add("1");
                    } else if (folderIndex === 2) {
                        imageElement.classList.add("2");
                    } else if (folderIndex === 3) {
                        imageElement.classList.add("3");
                    } else if (folderIndex === 4) {
                        imageElement.classList.add("4");
                    } else if (folderIndex === 5) {
                        imageElement.classList.add("5");
                    } else if (folderIndex === 6) {
                        imageElement.classList.add("6");
                    } else if (folderIndex === 7) {
                        imageElement.classList.add("7");
                    }

                    // Add event listener to toggle image selection
                    imageElement.addEventListener("click", function () {
                        if (this.classList.contains("selected")) {
                            this.classList.remove("selected");
                        } else {
                            this.classList.add("selected");
                        }
                    });

                    captchaGrid.appendChild(imageElement);
                }
            }
        }

        function verifyCaptcha() {
        var selectedImages = document.getElementsByClassName("selected");
        var selectedCount = selectedImages.length;

        if (selectedCount > 0) {
        // Get the master folder index
        var masterFolder = document.getElementById("masterFolder").textContent;

        // Check if all selected images have the same folder index as the master folder index
        var isCorrectSelection = true;

        for (var i = 0; i < selectedCount; i++) {
            var selectedImage = selectedImages[i];
            var folderIndex = Number(selectedImage.classList[1]);

            if (folderIndex !== Number(masterFolder)) {
                isCorrectSelection = false;
                break;
            }
        }

        if (isCorrectSelection) {
            // Captcha verified successfully
            displayResult("Captcha verified!", "success");
            clearCaptcha();
        } else {
            // Incorrect selection
            displayResult("Incorrect captcha selection. Please try again.", "error");
            clearCaptcha();
        }
        } else {
        // No image selected
        displayResult("Please select an image.", "error");
    }
}



        function displayResult(message, resultClass) {
            var captchaResult = document.getElementById("captchaResult");
            captchaResult.textContent = message;
            captchaResult.className = "captcha-result " + resultClass;
        }

        function clearCaptcha() {
            var overlay = document.getElementById("captchaOverlay");
            overlay.style.visibility = "hidden";

            var selectedImages = document.getElementsByClassName("selected");
            while (selectedImages.length > 0) {
                selectedImages[0].classList.remove("selected");
            }
        }

        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username && password) {
                showCaptcha();
            } else {
                alert("Please enter both username and password.");
            }
        }

        function getExpectedClassName(folderIndex) {
    if (folderIndex === masterFolder) {
        return "captcha-boat-image";
    } else if (folderIndex === 1) {
        return "captcha-seaplane-image";
    } else if (folderIndex === 2) {
        return "captcha-airplane-image";
    } else if (folderIndex === 3) {
        return "captcha-train-image";
    } else if (folderIndex === 4) {
        return "captcha-motorcycle-image";
    } else if (folderIndex === 5) {
        return "captcha-truck-image";
    } else if (folderIndex === 6) {
        return "captcha-bicycle-image";
    } else if (folderIndex === 7) {
        return "captcha-bus-image";
    }
}
    