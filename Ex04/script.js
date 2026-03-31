let ValorCompra = Number(prompt("Insira o valor da compra"));

if (ValorCompra > 100) {
    let Desconto = (ValorCompra*0.1);
    let ValorDesconto = ValorCompra - Desconto;
    
    alert ("Você ganhou 10% de desconto por comprar acima de 100R$!");
    alert ("O valor do desconto foi R$" + Desconto);
    alert ("O valor total a pagar com desconto é:"+ ValorDesconto);
}
else {
    alert ("Total a pagar R$"+ValorCompra);
}
