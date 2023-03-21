
   let ContPrincipal = document.querySelector("#container")
   let ContRetorno = document.querySelector("#container-retorno")
   let botaoRateAgain = document.querySelector("#rate-again")
   let BotaoSubmit = document.querySelector("btn-submit")
   let botao = document.querySelector("#btn")
   let rating = document.querySelector("#rating")
   let res = ""

   function submeter(){

    clicar()
    if(res === ""){
      alert("Selecione uma nota!")
      return
    }
    ContPrincipal.style.display = "none"
    ContRetorno.style.display = "flex"
   }

   function clicar(){
    for (const n of arguments){
      res = n
      rating.innerHTML = n
      console.log(res)
    }
   }

