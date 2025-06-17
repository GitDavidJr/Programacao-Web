const inputValidos = ["0", "1"]

const jogadoresQnt = [1,2,3,4,5]

const game = () => {

    const jogadores = jogadoresQnt.map((j) => {
        return document.getElementById(`j${j}`).value
    })

    if (!(jogadores.length === 5)) {
        alert("Insira 5 valores")
        return
    }

    jogadores.forEach((j) => {
        if (!inputValidos.includes(j)) {
            alert("Insira valores validos")
            return
        }
    })

    let count0 = 0
    let count1 = 0

    jogadores.forEach((j) => {
        if (j === "0") {
            count0++
        } else {
            count1++
        }
    })

    if (count0 === 1) {
        jogadores.forEach((j, index) => {
            if (j === "0") {
                alert(`Vencedor é o ${index + 1}° jogador!`)
                return
            }
        })
    } if (count1 === 1) {
        jogadores.forEach((j, index) => {
            if (j === "1") {
                alert(`Vencedor é o ${index + 1}° jogador!`)
                return
            }
        })
    } else {
        alert("Não ouve nenhum ganhador")
    } 

}


