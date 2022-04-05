// let onload = document.querySelector(".eachtime2");
// window.onload(onload)
let clicked = "";
let clicks = "";
let links = document.querySelector(".time");
let duration = document.querySelectorAll(".duration");
links.addEventListener("click",(e)=>{

    clicked = e.target.textContent;
    clicks = e.target;
    if(clicked.length < 8){
        if(document.querySelector(".active")){
            document.querySelector(".active").classList.remove("active");
        }else{}
    }else{}
    
    clicks.classList.add("active");
    fetch("data.json")
.then(function(response) {
    return response.json();
})
.then(function (data){
        let workLength = document.querySelector(".work-length");
        let playLength = document.querySelector(".play-length")
        let studyLength = document.querySelector(".study-length")
        let exerciseLength = document.querySelector(".exercise-length")
        let socialLength = document.querySelector(".social-length")
        let selfLength = document.querySelector(".self-care-length")

        let workDelay = document.querySelector(".work-delay-time")
        let playDelay = document.querySelector(".play-delay-time")
        let studyDelay = document.querySelector(".study-delay-time")
        let exerciseDelay = document.querySelector(".exercise-delay-time")
        let socialDelay = document.querySelector(".social-delay-time")
        let selfDelay = document.querySelector(".self-care-delay-time")


    if(clicked == "Weekly"){
        duration.forEach((e)=>{
            e.textContent = "Last Week";
        })
        //current
        workLength.textContent = `${data[0]["timeframes"]["weekly"].current}hrs`;
        playLength.textContent = `${data[1]["timeframes"]["weekly"].current}hrs` ;
        studyLength.textContent = `${data[2]["timeframes"]["weekly"].current}hrs`;
        exerciseLength.textContent = `${data[3]["timeframes"]["weekly"].current}hrs`;
        socialLength.textContent = `${data[4]["timeframes"]["weekly"].current}hrs`;
        selfLength.textContent = `${data[5]["timeframes"]["weekly"].current}hrs`;

        //previous
        workDelay.textContent = `${data[0]["timeframes"]["weekly"].previous}hrs`;
        playDelay.textContent = `${data[1]["timeframes"]["weekly"].previous}hrs`;
        studyDelay.textContent = `${data[2]["timeframes"]["weekly"].previous}hrs`;
        exerciseDelay.textContent = `${data[3]["timeframes"]["weekly"].previous}hrs`;
        socialDelay.textContent = `${data[4]["timeframes"]["weekly"].previous}hrs`;
        selfDelay.textContent = `${data[5]["timeframes"]["weekly"].previous}hrs`;
    }else if(clicked == "Daily"){
        duration.forEach((e)=>{
            e.textContent = "Yesterday";
        })
      //current
        workLength.textContent = `${data[0]["timeframes"]["daily"].current}hrs`;
        playLength.textContent = `${data[1]["timeframes"]["daily"].current}hrs` ;
        studyLength.textContent = `${data[2]["timeframes"]["daily"].current}hrs`;
        exerciseLength.textContent = `${data[3]["timeframes"]["daily"].current}hrs`;
        socialLength.textContent = `${data[4]["timeframes"]["daily"].current}hrs`;
        selfLength.textContent = `${data[5]["timeframes"]["daily"].current}hrs`;

        //previous
        workDelay.textContent = `${data[0]["timeframes"]["daily"].previous}hrs`;
        playDelay.textContent = `${data[1]["timeframes"]["daily"].previous}hrs`;
        studyDelay.textContent = `${data[2]["timeframes"]["daily"].previous}hrs`;
        exerciseDelay.textContent = `${data[3]["timeframes"]["daily"].previous}hrs`;
        socialDelay.textContent = `${data[4]["timeframes"]["daily"].previous}hrs`;
        selfDelay.textContent = `${data[5]["timeframes"]["daily"].previous}hrs`;
    }else if(clicked == "Monthly"){
        duration.forEach((e)=>{
            e.textContent = "Last Month";
        })
        //current
        workLength.textContent = `${data[0]["timeframes"]["monthly"].current}hrs`;
        playLength.textContent = `${data[1]["timeframes"]["monthly"].current}hrs` ;
        studyLength.textContent = `${data[2]["timeframes"]["monthly"].current}hrs`;
        exerciseLength.textContent = `${data[3]["timeframes"]["monthly"].current}hrs`;
        socialLength.textContent = `${data[4]["timeframes"]["monthly"].current}hrs`;
        selfLength.textContent = `${data[5]["timeframes"]["monthly"].current}hrs`;

        //previous
        workDelay.textContent = `${data[0]["timeframes"]["monthly"].previous}hrs`;
        playDelay.textContent = `${data[1]["timeframes"]["monthly"].previous}hrs`;
        studyDelay.textContent = `${data[2]["timeframes"]["monthly"].previous}hrs`;
        exerciseDelay.textContent = `${data[3]["timeframes"]["monthly"].previous}hrs`;
        socialDelay.textContent = `${data[4]["timeframes"]["monthly"].previous}hrs`;
        selfDelay.textContent = `${data[5]["timeframes"]["monthly"].previous}hrs`;
        }
    })

})
