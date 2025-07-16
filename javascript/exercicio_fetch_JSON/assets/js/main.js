// fetch('pessoas.json')
//   .then((resposta) => {
//     return resposta.json();
//   })
//   .then((json) => {
//     carregaElementosNaPagina(json);
//   });

  axios('pessoas.json')
  .then((json) => {
    carregaElementosNaPagina(json.data);
  });



  function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
      // const tr = document.createElement('tr');

      // let td = document.createElement('td');
      // td.innerHTML = pessoa.nome;
      // tr.appendChild(td);

      // td = document.createElement('td');
      // td.innerHTML = pessoa.salario;
      // tr.appendChild(td);

      // td = document.createElement('td');
      // td.innerHTML = pessoa.idade;
      // tr.appendChild(td);

      // table.appendChild(tr);

      const resultado = document.querySelector('.resultado');
      //resultado.appendChild(table);

      resultado.innerHTML += `
      <p>
        <strong>Nome:</strong> ${pessoa.nome} <br/>
        <strong>CPF:</strong> ${pessoa.cpf} <br/>
        <strong>Email:</strong> ${pessoa.email} <br/>
        <strong>Empresa:</strong> ${pessoa.empresa} <br/>
        <strong>Estado:</strong> ${pessoa.estado} <br/>
        <strong>Idade:</strong> ${pessoa.idade} <br/>
        <strong>Salario:</strong> ${pessoa.salario} <br/>
        <strong>Sexo:</strong> ${pessoa.sexo === '' ? 'não definido' : pessoa.sexo}
      <p/>

      <hr/>`;
    }
  }