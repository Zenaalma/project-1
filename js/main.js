
    $(function () {

        let coun = 0;
        let players = ['', '', '',
            '', '', '',
            '', '', ''
        ]
        // player one is X, player two is O
        let player1 = 0; //player one
        let player2 = 0; //player two
        let name1 = '';
        let name2 = '';



        // const { value: email } = await Swal.fire({
        //     title: 'Input email address',
        //     input: 'email',
        //     inputPlaceholder: 'Enter your email address'
        //   })

        //   if (email) {
        //     Swal.fire(`Entered email: ${email}`)
        //   }

        //get the names of players
        // name1 = prompt("Enter the name of First Player :")
        // name2 = prompt("Enter the name of Second Player :")

        Swal.fire({
            title: "WELCOME TO TIC TAC TOE",
            text: "Write The Player X Name:",
            input: 'text'
        }).then(function (result) {
            if (result.value) {
                // console.log(result)
                name1 = result.value
                console.log("Result: " + result.value);
                $("#name-one").text(name1)

                Swal.fire({
                    title: "WELCOME TO TIC TAC TOE",
                    text: "Write The Player O Name :",
                    input: 'text'
                }).then(function (result) {
                    if (result.value) {

                        // console.log(result)
                        name2 = result.value
                        console.log("Result: " + result.value);
                        $("#name-two").text(name2)

                    }


                });

            }
        });






        $(function () {
            function game(e) {
                //TODO: get the value and id=>index then assign it to array 
                // const index = $(e.target).attr('id')
                if (coun % 2 == 0) {
                    $(e.target).text("X") //set value & set the content
                    const value = $(e.target).text() //get value & get the content
                    const index = $(e.target).attr("id")
                    players[index] = value

                    $(e.target).off(" ")
                   


                    console.log("count")
                } else {
                    $(e.target).text("O") //set value & set the content
                    const value = $(e.target).text() //get the value & get the content
                    const index = $(e.target).attr("id")
                    players[index] = value

                    $(e.target).off(" ")


                    console.log("count")
                }
                console.log(players)
                coun += 1;

                // i put the if statment up it didnt work becuase everytime the user will click the program will check first 

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


                    // alert("play again")
                } else if (players[0] === players[3] && players[3] === players[6] && players[0] != "") {
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
                            'success'
                        )
                        rest()

                    }, 500)

                } else if (players[0] === players[4] && players[4] === players[8] && players[0] != "") {
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
                            'success'
                        )
                        rest()



                    }, 500)

                } else if (players[1] === players[4] && players[4] === players[7] && players[1] != "") {
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
                            'Player ' + players[1] + ' is the winner',
                            'success'
                        )
                        rest()
                    }, 500)

                } else if (players[2] === players[5] && players[5] === players[8] && players[2] != "") {
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
                            'Player ' + players[2] + ' is the winner',
                            'success'
                        )
                        rest()

                    }, 500)


                } else if (players[2] === players[4] && players[4] === players[6] && players[2] != "") {
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
                            'Player ' + players[2] + ' is the winner',
                            'success'
                        )
                        rest()
                    }, 500)


                } else if (players[3] === players[4] && players[4] === players[5] && players[3] != "") {
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
                            'Player ' + players[3] + ' is the winner',
                            'success'
                        )
                        rest()
                    }, 500)

                } else if (players[6] === players[7] && players[7] === players[8] && players[6] != "") {
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
                            'Player ' + players[6] + ' is the winner',
                            'success'
                        )
                        rest()
                    }, 500)

                } else if (coun === 9) {
                    setTimeout(function () {
                        Swal.fire(
                            'Game Over!',
                            'you such losers!',
                            'Play again'
                        )
                        rest()



                    }, 500)

                }
            }


            $(".click").click(game)

            function rest() {


                //reassign the var
                coun = 0;
                // player1 =0;
                // player2 =0;
                players = ['', '', '',
                    '', '', '',
                    '', '', ''
                ];

                $(".click").html("")
                $(".click").off() //off the event for all boxes
                $(".click").click(game) //on 
            }

        })
        //  function score (){
        //      (e.target)



        //  }



    })