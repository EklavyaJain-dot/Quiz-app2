const video = document.getElementById("video");

function StartVideo(){
    navigator.getUserMedia(
        { video :{} },
        stream => video.srcobject = stream,
        err => console.error(err)
    )
}

StartVideo()