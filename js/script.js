const translations = {
    en: {
        gallery: "Gallery",
        bio: "Bio",
        playlist: "Playlist",
        photoGallery: "Photo Gallery",
        sendLikes: "Send Likes ♡",
        language: "Language",
        video: "Video",
        instagram: "Instagram",
        guestbook: "Guestbook",
        author: "Author",
        bioDescription: 'Wonyoung Jang (장원영) is a South Korean singer, dancer, and model. She is a member of the group <a href="https://en.wikipedia.org/wiki/Ive_(group)">IVE</a> under <a href="https://en.wikipedia.org/wiki/Starship_Entertainment">Starship Entertainment</a>.',
        authorDescription: "Hi☺ My name is Jiayi, and I'm a first-year student at UMSI. I'm designing this site for my favorite Korean singer Wonyoung with a retro theme using pixelized font and icons. I hope you enjoy it!",
        "guest-name": "... or a food you like",
        "guest-message": "Share your thoughts, or spread some love <3",
        
        submit: "Submit",
        audioNotSupported: "Your browser does not support the audio element.",
        videoNotSupported: "Your browser does not support the video tag.",
    },
    zh: {
        gallery: "画廊",
        bio: "简介",
        playlist: "播放列表",
        photoGallery: "照片库",
        sendLikes: "发送喜欢 ♡",
        language: "语言",
        video: "视频",
        instagram: "Instagram",
        guestbook: "留言簿",
        author: "作者",
        bioDescription: "张元英(장원영)是韩国歌手、舞者和模特。她是Starship Entertainment旗下IVE组合的成员。",
        authorDescription: "你好^_^ 我叫佳奕，是UMSI的一年级学生。这个网站是为我喜欢的韩国歌手小圆设计的，主题是复古风格，使用了像素化的字体和icon。希望你会喜欢！",
        "guest-name": "你的名字",
        "guest-message": "你的留言",
        "guest-name-label": "名字",
        "guest-message-label": "留言",
        submit: "提交",
        audioNotSupported: "您的浏览器不支持音频元素。",
        videoNotSupported: "您的浏览器不支持视频标签。",
    },
    ja: {
        gallery: "ギャラリー",
        bio: "バイオ",
        playlist: "プレイリスト",
        photoGallery: "フォトギャラリー",
        sendLikes: "♡を送る",
        language: "言語",
        video: "ビデオ",
        instagram: "Instagram",
        guestbook: "ゲストブック",
        author: "作者",
        bioDescription: "ウォニョン(장원영)は韓国の歌手、ダンサー、モデルです。彼女はStarship EntertainmentのIVEグループのメンバーです。",
        authorDescription: "こんにちは^_^ UMSIの1年生のジャイです。好きな韓国人歌手ウォニョンのために、ピクセル化されたフォントとアイコンを使ってレトロなテーマのサイトをデザインしています。楽しんでいただけたら嬉しいです。",
        "guest-name": "あなたの名前",
        "guest-message": "あなたのメッセージ", 
        "guest-name-label": "名前",
        "guest-message-label": "メッセージ",
        submit: "送信",
        audioNotSupported: "お使いのブラウザはオーディオ要素をサポートしていません。",
        videoNotSupported: "お使いのブラウザはビデオタグをサポートしていません。",
    }
};


// real time logic
function updateTime() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${month}/${day}/${year}`;
}

setInterval(updateTime, 1000); // update time every second
updateTime();


// open & close window logic
function showWindow(button, window) {
    button.addEventListener("click", () => {
        window.style.display = "block";
        positionWindow(window);
    });
}

function closeWindow(closeButton, window) {
    closeButton.addEventListener("click", () => {
        window.style.display = "none";
    });
}

// dynamically position windows
let windowOffsetX = 15;
let windowOffsetY = 5;
const windowOffsetStep = 2;

function positionWindow(window) {
    window.style.top = `${windowOffsetY}vh`;
    window.style.left = `${windowOffsetX}vw`;

    windowOffsetX += windowOffsetStep;
    windowOffsetY += windowOffsetStep;
    
    if (windowOffsetX > 20) windowOffsetX = 10;
    if (windowOffsetY > 20) windowOffsetY = 5;
}

windowOffsetX = 15;
windowOffsetY = 5;



// draggable window logic
function makeDraggable(header, window) {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    function startDragging(e) {
        isDragging = true;

        // For touch events, use `touches[0]` to get touch coordinates
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        offsetX = clientX - window.offsetLeft;
        offsetY = clientY - window.offsetTop;
        
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDragging);
        document.addEventListener("touchmove", drag);
        document.addEventListener("touchend", stopDragging);
    }

    function drag(e) {
        if (isDragging) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            window.style.left = `${clientX - offsetX}px`;
            window.style.top = `${clientY - offsetY}px`;
        }
    }
    
    function stopDragging() {
        isDragging = false;
        
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDragging);
        document.removeEventListener("touchmove", drag);
        document.removeEventListener("touchend", stopDragging);
    }
    
    header.addEventListener("mousedown", startDragging);
    header.addEventListener("touchstart", startDragging);
}






// Gallery logic
const galleryWindow = document.getElementById("gallery-window");
const photos = [
    "img/photos/photo1.jpg",
    "img/photos/photo2.jpg",
    "img/photos/photo3.jpg",
    "img/photos/photo4.jpg",
    "img/photos/photo5.jpg"
];
let currentPhotoIndex = 0;

function updateGalleryImage() {
    document.getElementById("gallery-image").src = photos[currentPhotoIndex];
}
// next photo
document.getElementById("next-photo").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateGalleryImage();
});
// prev photo
document.getElementById("prev-photo").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateGalleryImage();
});

showWindow(document.getElementById("gallery"), galleryWindow);
closeWindow(document.getElementById("close-gallery"), galleryWindow);
makeDraggable(document.getElementById("gallery-header"), galleryWindow);

updateGalleryImage(); // initialize Gallery



// Bio Logic
const bioWindow = document.getElementById("bio-window");
showWindow(document.getElementById("bio"), bioWindow);
closeWindow(document.getElementById("close-bio"), bioWindow);
makeDraggable(document.getElementById("bio-header"), bioWindow);





// Playlist Logic
const playlistWindow = document.getElementById("playlist-window");
const songs = ["audio/song1.mp3", "audio/song2.mp3", "audio/song3.mp3"];
const songTitles = ["Off The Record", "OTT", "Payback"];
let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");

function updatePlaylist() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    document.getElementById("song-title").textContent = songTitles[currentSongIndex];
}
document.getElementById("song-title").textContent = songTitles[currentSongIndex];

document.getElementById("prev-song").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlaylist();
});

document.getElementById("next-song").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlaylist();
});


showWindow(document.getElementById("playlist"), playlistWindow);

document.getElementById("close-playlist").addEventListener("click", () => {
    playlistWindow.style.display = "none";
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

makeDraggable(document.getElementById("playlist-header"), playlistWindow);



// Video Logic
const videoWindow = document.getElementById("video-window");
const video = videoWindow.querySelector("video");

// Show and Close Video Window
showWindow(document.getElementById("video"), videoWindow);

document.getElementById("close-video").addEventListener("click", () => {
    videoWindow.style.display = "none"; // Hide the window
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the beginning (optional)
});

makeDraggable(document.getElementById("video-header"), videoWindow); // Use the existing `makeDraggable` function to allow dragging




// Instagram Logic
const instagramButton = document.getElementById("instagram");

instagramButton.addEventListener("click", () => {
    window.open("https://www.instagram.com/for_everyoung10/?hl=en", "_blank");
});







// Guestbook logic
const guestbookWindow = document.getElementById("guestbook-window"); // The guestbook window
const guestbookMessages = document.getElementById("guestbook-messages");

// Load guestbook messages from localStorage
let messages = JSON.parse(localStorage.getItem("guestbookMessages")) || [];

// Render all messages
function renderMessages(v) {
    guestbookMessages.innerHTML = "";
    messages.forEach((message, index) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("guest-message");
        messageElement.innerHTML = `
            <span><strong>${message.name}</strong> (${message.date})</span>
            <p>${message.message}</p>
            <div class="delete-button" data-index="${index}"><img class="icon" src="img/icons/delete.svg" alt="Delete Icon"></div>
        `;
        guestbookMessages.appendChild(messageElement);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-button").forEach((button) => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index"); // Get the message index
            deleteMessage(index);
        });
    });
}

// Add a new message
function addMessage(name, message) {
    const now = new Date();
    const formattedDate = now.toLocaleString(); // Get formatted date and time
    messages.push({ name, message, date: formattedDate });
    localStorage.setItem("guestbookMessages", JSON.stringify(messages)); // Save to localStorage
    renderMessages();
}

// Delete a message
function deleteMessage(index) {
    messages.splice(index, 1); // Remove the message from the array
    localStorage.setItem("guestbookMessages", JSON.stringify(messages)); // Update localStorage
    renderMessages(); // Re-render the messages
}

// Handle form submission
const submitGuestbookButton = document.getElementById("submit-guestbook");

submitGuestbookButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("guest-name").value.trim();
    const message = document.getElementById("guest-message").value.trim();

    if (name && message) {
        addMessage(name, message);
        document.getElementById("guest-name").value = "";
        document.getElementById("guest-message").value = "";
    }
});

// Apply guestbook window logic
showWindow(document.getElementById("guestbook"), guestbookWindow);
closeWindow(document.getElementById("close-guestbook"), guestbookWindow);
makeDraggable(document.getElementById("guestbook-header"), guestbookWindow);

// Render messages on page load
renderMessages();






// Author logic
const authorWindow = document.getElementById("author-window");
showWindow(document.getElementById("author"), authorWindow); 
closeWindow(document.getElementById("close-author"), authorWindow);
makeDraggable(document.getElementById("author-header"), authorWindow);





// Send Likes
const likeCount = document.getElementById("like-count");

let count = parseInt(localStorage.getItem("like-count")) || 0;
likeCount.textContent = count;

document.getElementById("likes").addEventListener("click", function () {
    count++;
    likeCount.textContent = count;
    localStorage.setItem("like-count", count);

    // Create the heart animation
    const heart = document.createElement("span");
    heart.classList.add("heart-animation");
    heart.textContent = "♡";
    this.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 500);
});








// Home button - close all windows when Home button is clicked
document.getElementById("home").addEventListener("click", () => {
    document.querySelectorAll(".window").forEach((window) => {
        window.style.display = "none";
    });
});





// Language
const languageButton = document.getElementById("language-button");
const languageOptions = document.getElementById("language-options");

let currentLanguage = localStorage.getItem("language") || "en"; // Default to English

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    
    const translatableElements = document.querySelectorAll("[data-translate-key]");
    translatableElements.forEach((element) => {
        const key = element.getAttribute("data-translate-key");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update translatable placeholders
    const placeholderElements = document.querySelectorAll("[data-translate-placeholder]");
    placeholderElements.forEach((element) => {
        const key = element.getAttribute("data-translate-placeholder");
        if (translations[lang][key]) {
            element.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // Update the button text
    languageButton.textContent = translations[lang]["language"] || "Language";

    // Hide the dropdown
    languageOptions.classList.add("hidden");
}

// Toggle dropdown visibility
languageButton.addEventListener("click", () => {
    languageOptions.classList.toggle("hidden");
});

// Handle language selection
document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", (event) => {
        const selectedLanguage = event.target.getAttribute("data-lang");
        switchLanguage(selectedLanguage);
    });
});

// Initialize content on page load
switchLanguage(currentLanguage);



// click sound
const clickSound = document.getElementById("click-sound");
document.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
});
