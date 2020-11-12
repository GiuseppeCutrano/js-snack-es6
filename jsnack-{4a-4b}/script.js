const squadre = [
    {
      nome: "juve",
      punti: 0,
      falliSubiti: 0
    },

    {
      nome: "palermo",
      punti: 0,
      falliSubiti: 0
    },

    {
      nome: "inter",
      punti: 0,
      falliSubiti: 0
    },

    {
      nome: "roma",
      punti: 0,
      falliSubiti: 0
    }
  ];


  console.log(`${squadre}`);

  for(var i = 0; i < squadre.length; i++){

    squadre[i].punti = random()
    squadre[i].falliSubiti = random()


  }


  function random(){
    var random = Math.floor(Math.random()* 10)

    return random;
  }
