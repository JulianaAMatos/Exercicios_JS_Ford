// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

const novoNome= prompt('Digite um nome para procurar: ')
const listaNomes= ['Juliana',
 'Fabiana', 
 'João',
  'Letícia',
   'Rodrigo',
    'Lucas',
     'José',
      'Alessandra',
       'Fábio',
        'Mônica']

  if (listaNomes.includes(novoNome)){
    alert(`Achei, lista= ${listaNomes}`)
  }else{
    alert(`Não achei, lista= ${listaNomes}`)
  }
   ///2° FORMA DE FAZER: 
//   let nomes= []

//   for(let i=0; i < 10;i++){
//     nomes[i]= window.prompt('Digite um nome: ')

//   }
//   console.log(nomes);

//   const nomeBuscado= window.prompt('Digite o nome que deseja bucar')
//   if(nomes.includes(nomeBuscado)){
//     alert('ACHEI')
//   }else{
//     alert('NÃO ACHEI')
//   }
 

/// 3° FORMA DE FAZER

//   let nomes= []
//   for(let i=0; i < 10;i++){
    
//     nomes[i]= window.prompt('Digite um nome: ')

//   }
//   console.log(nomes);

//   const nomeBuscado= window.prompt('Digite o nome que deseja bucar')
//   if(nomes.indexOf(nomeBuscado) >= 0 ){
//     alert('ACHEI')
//   }else{
//     alert('NÃO ACHEI')
//   }
