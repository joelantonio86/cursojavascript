var idade = 66
console.log(`Você possui ${idade} anos de vida`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Seu Voto é opcional')
} else {
    console.log('Seu Voto é obrigatório')
}