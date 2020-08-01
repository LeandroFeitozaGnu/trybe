function checkEmail() {
  if(document.forms[0].email.value == '' 
    || document.forms[0].email.value.indexOf('@') == -1
     || document.forms[0].email.value.indexOf('.') == -1)
      {
        alert( 'Por favor digite um email válido: email@dominio.com');
        return false;
      }
}

function validaCPF() {
  const cpf = document.querySelector('#cpf')
    if (cpf.value.length != 11) {
      alert('Digite um CPF válido!')
    }                              
}

function onlyNumber(event) {
  let charCode = event.charCode ? event.charCode : event.KeyCode;
  if (charCode != 8 && charCode != 9) {
    if (charCode < 48 || charCode > 57) {
        return false;
    }
  }  
}

let arrayEstados = ['Acre',
'Alagoas',
'Amapá',
'Amazonas',
'Bahia',
'Ceará',
'Distrito Federal',
'Espírito Santo',
'Goiás',
'Maranhão',
'Mato Grosso',
'Mato Grosso do Sul',
'Minas Gerais',
'Pará',
'Paraíba',
'Paraná',
'Pernambuco',
'Piauí',
'Rio de Janeiro',
'Rio Grande do Norte',
'Rio Grande do Sul',
'Rondônia',
'Roraima',
'Santa Catarina',
'São Paulo',
'Sergipe',
'Tocantins']
let arraySiglas = ['AC',
'AL',
'AP',
'AM',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MT',
'MS',
'MG',
'PA',
'PB',
'PR',
'PE',
'PI',
'RJ',
'RN',
'RS',
'RO',
'RR',
'SC',
'SP',
'SE',
'TO']

for (i = 0; i<= arraySiglas.length -1; i += 1) {
  let pegaSelect = document.querySelector('#estado')
  let criaOption = document.createElement('option')
  pegaSelect.appendChild(criaOption).value = arraySiglas[i]
}

for(i = 0; i <= arrayEstados.length - 1; i += 1) {
 document.querySelectorAll('option')[i].innerHTML = arrayEstados[i]
}
