const tipoCombustivel=(prompt(`
        Qual o tipo de combustível você deseja:
        A- Álcool G-Gasolina `))


const precoAlcool= 4.90 * litros
const precoGasolina= 5.30 * litros


  switch (litros <= 20 && tipoCombustivel == A) {
    case A:
        alert(`Possuí 3% de desconto por litro Álcool. O valor sem desconto:${precoAlcool} reais. Total a ser pago com o desconto: ${precoAlcool * 0.3} `)
        
        (litros <= 20 && tipoCombustivel == A)
        
        alert(`Possui 4% de desconto`)
       
        break; 

    default:
        alert(`Possuí 5% de desconto por litro Álcool. O valor sem desconto:${precoAlcool} reais. Total a ser pago com o desconto: ${precoAlcool * 0.5} `)
        
        break;
  }