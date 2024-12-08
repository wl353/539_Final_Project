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
        authorDescription: "Hi☺ My name is Jiayi, and I'm a first-year student at UMSI. I'm designing this site for my favorite Korean singer Wonyoung with a retro theme using pixelized font, icons, and gradient backgrounds. I hope you enjoy it!",
        guestNamePlaceholder: "... or a food you like",
        guestMessagePlaceholder: "Share your thoughts, or spread some love <3",
        guestNameLabel: "Name",
        guestMessageLabel: "Message",
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
        bioDescription: '张元英(장원영)是韩国歌手、舞者和模特。她是<a href="https://en.wikipedia.org/wiki/Starship_Entertainment">Starship Entertainment</a>旗下<a href="https://en.wikipedia.org/wiki/Ive_(group)">IVE</a>组合的成员。',
        authorDescription: "你好^_^ 我叫佳奕，是UMSI的一年级学生。这个网站是为我喜欢的韩国歌手元英设计的，主题是复古风格，使用了像素化的字体、icon和渐变背景。希望你会喜欢！",
        guestNamePlaceholder: "……或者你喜欢的食物",
        guestMessagePlaceholder: "分享你的想法，或者传播爱 <3",
        guestNameLabel: "名字",
        guestMessageLabel: "留言",
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
        bioDescription: 'ウォニョン(원영)は韓国の歌手、ダンサー、モデルです。<a href="https://en.wikipedia.org/wiki/Starship_Entertainment">Starship Entertainment</a>の<a href="https://en.wikipedia.org/wiki/Ive_(group)">IVE</a>グループのメンバーです。',
        authorDescription: "こんにちは^_^ UMSIの1年生のジャイです。好きな韓国人歌手ウォニョンのために、ピクセル化されたフォントとアイコンを使ってレトロなテーマのサイトをデザインしています。楽しんでいただけたら嬉しいです。",
        guestNamePlaceholder: "…または好きな食べ物",
        guestMessagePlaceholder: "考えとか、愛をシェアしてください <3", 
        guestNameLabel: "名前",
        guestMessageLabel: "メッセージ",
        submit: "送信",
        audioNotSupported: "お使いのブラウザはオーディオ要素をサポートしていません。",
        videoNotSupported: "お使いのブラウザはビデオタグをサポートしていません。",
    }
};


// time logic
function updateTime() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds} ${month}/${day}/${year}`;
}
setInterval(updateTime, 1000); // update time every second
updateTime();


// open & close window
function showWindow(button, window) {
    button.addEventListener("click", function() {
        window.style.display = "block";
        positionWindow(window);
    });
}

function closeWindow(closeButton, window) {
    closeButton.addEventListener("click", function() {
        window.style.display = "none";
    });
}

// dynamically position windows
let windowOffsetX = 15;
let windowOffsetY = 2;
const windowOffsetStep = 2;

function positionWindow(window) {
    window.style.top = `${windowOffsetY}vh`;
    window.style.left = `${windowOffsetX}vw`;

    windowOffsetX += windowOffsetStep;
    windowOffsetY += windowOffsetStep;
    
    if (windowOffsetX > 20) windowOffsetX = 10;
    if (windowOffsetY > 20) windowOffsetY = 5;
}

windowOffsetX = 15; // reset on page load
windowOffsetY = 2;




// draggable windows
// https://stackoverflow.com/questions/71372709/can-you-help-me-to-do-movable-window-in-js
function makeDraggable(header, window) {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    function startDragging(e) {
        isDragging = true;

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






// Gallery
// https://stackoverflow.com/questions/25151339/how-to-display-images-from-a-javascript-array-object-starting-with-the-first-im
const galleryWindow = document.getElementById("gallery-window");

const photos = [
    "img/photos/photo1.jpg",
    "img/photos/photo2.jpg",
    "img/photos/photo3.jpg",
    "img/photos/photo4.jpg",
    "img/photos/photo5.jpg"
];

let currentPhotoIndex = 0;

// next photo
document.getElementById("next-photo").addEventListener("click", function() {
    // currentPhotoIndex++;
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    document.getElementById("gallery-image").src = photos[currentPhotoIndex];
});

// prev photo
document.getElementById("prev-photo").addEventListener("click", function() {
    // currentPhotoIndex--;
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    document.getElementById("gallery-image").src = photos[currentPhotoIndex];
});

showWindow(document.getElementById("gallery"), galleryWindow);
closeWindow(document.getElementById("close-gallery"), galleryWindow);
makeDraggable(document.getElementById("gallery-header"), galleryWindow);

document.getElementById("gallery-image").src = photos[currentPhotoIndex];



// Bio
const bioWindow = document.getElementById("bio-window");
showWindow(document.getElementById("bio"), bioWindow);
closeWindow(document.getElementById("close-bio"), bioWindow);
makeDraggable(document.getElementById("bio-header"), bioWindow);





// Playlist
const playlistWindow = document.getElementById("playlist-window");
const songs = [
    "audio/song1.mp3", 
    "audio/song2.mp3", 
    "audio/song3.mp3"
];
const songTitles = [
    "Off The Record", 
    "OTT", 
    "Payback"];
let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");

function updatePlaylist() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    document.getElementById("song-title").textContent = songTitles[currentSongIndex];
}
document.getElementById("song-title").textContent = songTitles[currentSongIndex];

document.getElementById("prev-song").addEventListener("click", function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlaylist();
});

document.getElementById("next-song").addEventListener("click", function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlaylist();
});

showWindow(document.getElementById("playlist"), playlistWindow);

document.getElementById("close-playlist").addEventListener("click", function() {
    playlistWindow.style.display = "none";
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

makeDraggable(document.getElementById("playlist-header"), playlistWindow);



// Video
const videoWindow = document.getElementById("video-window");
const video = videoWindow.querySelector("video");

showWindow(document.getElementById("video"), videoWindow);

document.getElementById("close-video").addEventListener("click", function() {
    videoWindow.style.display = "none";
    video.pause();
    video.currentTime = 0;
});

makeDraggable(document.getElementById("video-header"), videoWindow);




// Instagram
document.getElementById("instagram").addEventListener("click", function() {
    window.open("https://www.instagram.com/for_everyoung10/?hl=en", "_blank");
});







// Guestbook
// https://www.w3schools.com/jsreF/prop_win_localstorage.asp
// https://blog.logrocket.com/localstorage-javascript-complete-guide/
const guestbookWindow = document.getElementById("guestbook-window");
const guestbookMessages = document.getElementById("guestbook-messages");

let messages = JSON.parse(localStorage.getItem("guestbookMessages")) || [];

function renderMessages(v) {
    guestbookMessages.innerHTML = "";
    // add a delete button
    messages.forEach(function(message, index) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("guest-message");
        messageElement.innerHTML = `
            <span><strong>${message.name}</strong> (${message.date})</span>
            <p>${message.message}</p>
            <div class="delete-button" data-index="${index}" tabindex="0"><img class="icon" src="img/icons/delete.svg" alt="Delete Icon"></div>
        `;
        guestbookMessages.appendChild(messageElement);
    });

    // delete
    document.querySelectorAll(".delete-button").forEach(function(button) {
        button.addEventListener("click", function(e) {
            const index = parseInt(e.currentTarget.getAttribute("data-index"), 10); 
            messages.splice(index, 1);
            localStorage.setItem("guestbookMessages", JSON.stringify(messages));
            renderMessages();
        });
    });
}

// submit - add a new message
const submitGuestbookButton = document.getElementById("submit-guestbook");

submitGuestbookButton.addEventListener("click", function(e) {
    const name = document.getElementById("guest-name").value.trim();
    const message = document.getElementById("guest-message").value.trim();

    if (name && message) {
        const now = new Date();
        const formattedDate = now.toLocaleString();
        messages.push({ name, message, date: formattedDate });
        localStorage.setItem("guestbookMessages", JSON.stringify(messages));
        renderMessages();

        document.getElementById("guest-name").value = "";
        document.getElementById("guest-message").value = "";
    }
});



showWindow(document.getElementById("guestbook"), guestbookWindow);
closeWindow(document.getElementById("close-guestbook"), guestbookWindow);
makeDraggable(document.getElementById("guestbook-header"), guestbookWindow);

renderMessages();






// Author
const authorWindow = document.getElementById("author-window");
showWindow(document.getElementById("author"), authorWindow); 
closeWindow(document.getElementById("close-author"), authorWindow);
makeDraggable(document.getElementById("author-header"), authorWindow);





// Send likes
const likeCount = document.getElementById("like-count");

let count = parseInt(localStorage.getItem("like-count")) || 0;
likeCount.textContent = count;

document.getElementById("likes").addEventListener("click", function() {
    count++;
    likeCount.textContent = count;
    localStorage.setItem("like-count", count);

    // heart animation
    const heart = document.createElement("span");
    heart.classList.add("heart-animation");
    heart.textContent = "♡";
    this.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 500);
});








// Home button - close all windows when Home button is clicked
document.getElementById("home").addEventListener("click", function() {
    document.querySelectorAll(".window").forEach(function(window) {
        window.style.display = "none";
    });
});





// Language
// https://stackoverflow.com/questions/32008125/using-javascript-to-change-website-language
let currentLanguage = localStorage.getItem("language") || "en";

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    
    // translate each key
    document.querySelectorAll("[data-translate-key]").forEach(function(e) {
        const key = e.getAttribute("data-translate-key");
        if (translations[lang][key]) {
            e.innerHTML = translations[lang][key];
        }
    });
    // placeholder
    document.querySelectorAll("[data-translate-placeholder]").forEach(function(e) {
        const key = e.getAttribute("data-translate-placeholder");
        if (translations[lang][key]) {
            e.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // change button
    document.getElementById("language-button").textContent = translations[lang]["language"] || "Language";

    
    document.getElementById("language-options").classList.add("hidden");
}


document.getElementById("language-button").addEventListener("click", function() {
    document.getElementById("language-options").classList.toggle("hidden");
});

document.querySelectorAll(".language-option").forEach(function(button) {
    button.addEventListener("click", function(event) {
        const selectedLanguage = event.target.getAttribute("data-lang");
        switchLanguage(selectedLanguage);
    });
});

switchLanguage(currentLanguage);



// click sound
const clickSound = document.getElementById("click-sound");
document.addEventListener("click", function() {
    clickSound.currentTime = 0;
    clickSound.play();
});
