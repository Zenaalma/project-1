<!-- md mark down -->

<!-- heading part -->

# project tic tac toe game
it's a game with two players 
the winner who can 
<!-- # = h1
## = h2 -->
## My Project Deployment

 https://zenaalma.github.io/project-1/


## Technologies used in the project
<!-- unorderlist -->
* js
* jquery
* html
* CSS
* sweet alert
```
Swal.fire({
            title: "WELCOME TO TIC TAC TOE",
            text: "Write The Player X Name (:",
            input: 'text'
```
* animated.css
```
<h1 class="animated infinite pulse">Tic Tac Toe</h1>
```

* stealing the background color from another tic tac toe game (sorry)


## Planning and Development Process
<!-- order list -->
1. day one : i design the web page and the winning process
2. day two : the process of counting the winner scores (the if statments and so on...)
3. day three : add the animation and design the alert window 
4. work on the html and css


<!-- add links -->
<!-- [google](http://google.com) -->

<!-- add images -->
<!-- ![wireframe](url or path) -->


<!-- horizontal line -->

---

## Challenges
the most challenging part was counting how many times the players win
```
 if (players[0] === players[1] && players[1] === players[2] && players[2] != "") {
                    // alert("you win") 
                    if (players[0] === "X") {
                        player1 = player1 + 1
                    } else {
                        player2 = player2 + 1
                    }
                    // console.log(`player1 : ${player1}, player2: ${player2}`)
                    $("#player1").text(player1)
                    $("#player2").text(player2)

                    setTimeout(function () {
                        Swal.fire(
                            'Good job!',
                            'Player ' + players[0] + ' is the winner',
                            'success',

                        )
                        console.log(coun)
                        rest()

                    }, 500)

```
 ---

# Unsolved problems which would be fixed in future iterations

the next virsion will be an online game so two people in different places can play with
each other