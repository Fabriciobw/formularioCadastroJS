




function btn_add() {


  tabelinha = document.getElementById("tabela")
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var dado = document.getElementById("dado");
  var telefone = document.getElementById("telefone");
  var cep = document.getElementById("cep");
  var logradouro = document.getElementById("logradouro");
  var numero = document.getElementById("numero");
  var complemento = document.getElementById("complemento");
  var bairro = document.getElementById("bairro");
  var uf = document.getElementById("uf");


  var novaLinha = tabelinha.insertRow(-1);
  var novaCelula;
 
 //if(nome.value != '' && email.value != '' && dado.value != '' && telefone.value != '' && cep.value != '' && logradouro.value != '' && numero.value != '' && complemento.value != '' && bairro.value != ''){

  
  novaCelula = novaLinha.insertCell(0);
  novaCelula.innerHTML = nome.value;
  novaCelula = novaLinha.insertCell(1);
  novaCelula.innerHTML = email.value;
  novaCelula = novaLinha.insertCell(2);
  novaCelula.innerHTML = dado.value;
  novaCelula = novaLinha.insertCell(3);
  novaCelula.innerHTML = telefone.value;
  novaCelula = novaLinha.insertCell(4);
  novaCelula.innerHTML = cep.value;
  
  novaCelula = novaLinha.insertCell(5);
  novaCelula.innerHTML = logradouro.value;
  novaCelula = novaLinha.insertCell(6);
  novaCelula.innerHTML = numero.value;
  novaCelula.classList.add("numero-mod");
  novaCelula = novaLinha.insertCell(7);
  novaCelula.innerHTML = complemento.value;
  novaCelula = novaLinha.insertCell(8);
  novaCelula.innerHTML = bairro.value;
  novaCelula = novaLinha.insertCell(9);
  novaCelula.innerHTML = $( "#uf :selected" ).text();

  novaCelula = novaLinha.insertCell(10);
  novaCelula.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteRow(this)" >Deletar</button>';
 
//}else{
  // alert('Preencha todos os campos!')
//}
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


// peguei essa API na internet


$("#cep").focusout(function(){
  //Início do Comando AJAX
  $.ajax({
    //O campo URL diz o caminho de onde virá os dados
    //É importante concatenar o valor digitado no CEP
    url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
    //Aqui você deve preencher o tipo de dados que será lido,
    //no caso, estamos lendo JSON.
    dataType: 'json',
    //SUCESS é referente a função que será executada caso
    //ele consiga ler a fonte de dados com sucesso.
    //O parâmetro dentro da função se refere ao nome da variável
    //que você vai dar para ler esse objeto.
    success: function(resposta){
      //Agora basta definir os valores que você deseja preencher
      //automaticamente nos campos acima.
      $("#logradouro").val(resposta.logradouro);
      $("#complemento").val(resposta.complemento);
      $("#bairro").val(resposta.bairro);
      $("#cidade").val(resposta.localidade);
      $("#uf").val(resposta.uf);
      //Vamos incluir para que o Número seja focado automaticamente
      //melhorando a experiência do usuário
      $("#numero").focus();
    }
  });
});