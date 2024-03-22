// Um posto está vendendo combustíveis com a seguinte tabela de descontos:




// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.
//switch ( litros <= 20 && litros == 'Álcool') {
   
        
        //alert(`Possuí desconto de 5% por litro. Total de desconto: ${litros * 0.05}. O valor a ser pago é ${precoAlcool - (litros * 0.05)}`)//
        
        //|| (litros >=20 && litros == 'Gasolina')
        //alert(`Possuí um desconto de 6% por litro. Total de desconto: ${litros * 0.06}. O valor a
        
        //processamento de dados
        // = switch case para gasolina ou alcool
        // Álcool:
        // . até 20 litros, desconto de 3% por litro Álcool
        // . acima de 20 litros, desconto de 5% por litro
        
        // Gasolina:
        // . até 20 litros, desconto de 4% por litro Gasolina
        // . acima de 20 litros, desconto de 6% por litro
        
        // Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
        // da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
        // sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.
        //entrada de dados
        // = selecionar se deseja abastecer com alcool ou com gasolina;
        // = selecionar a quantidade de litros que o usuário deseja;
        //LITERAL TEMPLATES//
        const tipoCombustivel=(prompt(`
        Qual o tipo de combustível você deseja:
        A-Álcool G-Gasolina `))
        const precoAlcool= 4.90 
        const precoGasolina= 5.30
        let  litros;
       

        switch (tipoCombustivel.toUpperCase()) {
         case 'A':
         
         litros= Number(prompt('Quantos litros?'))

            if(litros <=20){
             const totalSemDesconto= litros * precoAlcool
            //  const calculoDesconto= totalSemDesconto - totalSemDesconto * 0.03
            
            alert(
            `Possuí 3% de desconto por litro Álcool. O valor sem desconto:${totalSemDesconto.toFixed(2)} reais. Total a ser pago com o desconto: ${(totalSemDesconto - (totalSemDesconto * 0.03)).toFixed(2)} 
            `) 
            } else {
                const totalSemDesconto= litros * precoAlcool
                // 
                const calculoDesconto= totalSemDesconto - totalSemDesconto * 0.05
            alert(
            `Possuí 5% de desconto por litro de Álcool. O valor sem desconto: ${totalSemDesconto.toFixed(2)} reais. Total a ser pago com o desconto: ${(totalSemDesconto -(totalSemDesconto * 0.05)).toFixed(2)}`
            )
           }
        case 'G':
            
        litros= Number(prompt('Quantos litros?'))

        
        if( litros <= 20){
          const totalSemDesconto= litros * precoGasolina
        //   const calculoDesconto= totalSemDesconto - totalSemDesconto * 0.04
         
        alert(
        `Possuí 4% de desconto por litro de Gasolina. O valor sem desconto é ${totalSemDesconto.toFixed(2)} reais. Total a ser pago com o desconto: ${(totalSemDesconto- (totalSemDesconto * 0.04)).toFixed(2)}`
        )
         } else{
            const totalSemDesconto= litros * precoAlcool
            // const calculoDesconto= totalSemDesconto - totalSemDesconto * 0.06
            alert(
            `Possuí 6% de desconto por litro de Gasolina. O valor sem desconto é ${totalSemDesconto.toFixed(2)} reais. Total a ser pago com o desconto: ${(totalSemDesconto - (totalSemDesconto * 0.06)).toFixed}
            `)
         }
         break;
           default:
                alert(`Nenhuma opção válida`)
                break;
        }

