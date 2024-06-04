function validacaosenha() {
    var senha = document.getElementById("senha").value;
    var confirmar = document.getElementById("confsenha").value;
    
    if (senha !== confirmar){
       event.preventDefault();
        alert ("as senhas estão diferentes! Tente novamente!");
    }
    
        

}