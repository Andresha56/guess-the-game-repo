                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

let count = 0;
let ShowCounter = document.getElementById("counter");
let Userinput = document.getElementById("user_input");
let subBtn = document.getElementById("sub-btn");
let user_msg = document.getElementById("show-msg");
let ply_btn = document.getElementById("ply-agin-btn");
let gmOverMsg = document.getElementById("gm-over-msg");

let user_score = 0;
let loose_score = 0;

// Random number
let number = (Math.floor(Math.random() * 10))

subBtn.addEventListener("click", () => {
    if (count < 5) {
        count += 1;
        ShowCounter.innerHTML = count;

        if (count == 5) {
            user_msg.innerHTML = "Chance over 😶";
            Userinput.style.display = "none";
            subBtn.style.display = "none";
            ply_btn.style.display = "block";
            // user--score----
            if (user_score > loose_score) {
                gmOverMsg.innerHTML = "Congrates you won the game ! 🥳🥳";
                Userinput.value = "";
            }
            else {
                gmOverMsg.innerHTML = "Opps! you lose the game! 😭😭";
                Userinput.value = "";
            }


        }
        else if (Userinput.value == '') {
            user_msg.innerHTML = "Please enter a number 0 - 10";
        }
        else {
            user_msg.innerHTML = ""

            if (Userinput.value == number) {
                user_msg.innerHTML = "Your guess is correct 🥳"
                Userinput.value = ""
                setTimeout(() => {
                    Userinput.value = "";
                }, 1000);
            }
            else if (Userinput.value != number) {

                user_msg.innerHTML = `OPPS! Wrong 😭 correct number is ${number} <br> try again 🤗`
                setTimeout(() => {
                    Userinput.value = "";
                }, 1000);
                loose_score += 1;
                number = (Math.floor(Math.random() * 10));

            }
        }

    }
    else {


    }
})

// -----------playagain----------
    ply_btn.addEventListener("click", () => {
        Userinput.style.display = "block";
        subBtn.style.display = "block";
        ply_btn.style.display = "none";
        gmOverMsg.innerHTML = "";
        count = 0;
        ShowCounter.innerHTML = count;
        user_msg.innerHTML = "";
    });











