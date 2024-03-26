// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade


// const taxaNatalidade= prompt(`Digite qual taxa você quer consultar:
// [N]- Natalidade [M]-Mortalidade`).toUpperCase()
// const numeroHabitantes= Number(prompt('Digite o número de habitantes: '))
 
// switch (taxaNatalidade) {
//     case 'N':
//         const criancaNascidas=Number(prompt('Digite o número de nascimentos: '))
//         const natalidade= (criancaNascidas * 1000)/ numeroHabitantes
//         alert(`A taxa de natalidade é = ${natalidade.toFixed(2)}`)
        
//         break;

//     case 'M':
//         const numeroObito=Number(prompt('Digite o número de óbitos: '))
//         const mortalidade= (numeroObito * 1000) / numeroHabitantes
//         alert(`A taxa de mortalidade é =${mortalidade.toFixed(2)}`)
//         break;
// }

  function calculoNatalidadeMortalidade() {
    let numeroHabitantes

    do {
        numeroHabitantes= Number(window.prompt('Digite o número de habitantes: '))
        if(isNaN(numeroHabitantes)){
         window.alert('Você precisa digitar um número')
    }
    }while (isNaN(numeroHabitantes)); 
    
    let taxaNatalidade;

    do{
     taxaNatalidade= window.prompt(`Digite qual taxa você quer consultar:
[N]- Natalidade [M]-Mortalidade`).toUpperCase()

    if (taxaNatalidade !== 'N' && taxaNatalidade !== 'M'){
        window.alert('ERRO: Digite uma opção válida!')
    }else{
        break;
    }
   }while(true);

switch (taxaNatalidade) {
    case 'N':
        let criancaNascidas
        do{
            criancaNascidas =Number(prompt('Digite o número de nascimentos: '))
         if(isNaN(criancaNascidas)){
            window.alert('Digite um número válido')
         }else{
            break;
         }
        }while(true)
        let natalidade= (criancaNascidas * 1000)/ numeroHabitantes
        window.alert(`A taxa de natalidade é = ${natalidade.toFixed(2)}`)
        
        break;

    case 'M':
        let numeroObito=Number(prompt('Digite o número de óbitos: '))
        let mortalidade= (numeroObito * 1000) / numeroHabitantes
        window.alert(`A taxa de mortalidade é =${mortalidade.toFixed(2)}`)
        break;
    }
}
