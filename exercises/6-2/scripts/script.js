window.onload = function() {
  var picker = new Pikaday({ field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
        onSelect: function(Date) {
            console.log(Date);
        }
 });

 new window.JustValidate('.curriculum-form', {
  rules: {
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    email: {
      required: 'O campo email é obrigatório',
      email: 'O email digitado não é válido'
    },
  },

  submitHandler: function (form, values) {
    console.log(form, values)    
  },
});

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

const selectedState = document.getElementById('estado');
const value = selectedState.options[selectedState.selectedIndex].value
const text = selectedState.options[selectedState.selectedIndex].text
console.log(value)
console.log(text)
