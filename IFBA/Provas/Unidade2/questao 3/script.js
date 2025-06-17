const inputValidos = ["0", "1"]

const jogadores = [
    { number: 1, name: "Afrodite," },
    { number: 2, name: "Apolo," },
    { number: 3, name: "Dionísio," },
    { number: 4, name: "Hera" },
    { number: 5, name: "Hermes" },

]

const game = () => {

    const jogadoresValue = jogadores.map((j) => {
        return document.getElementById(`j${j.number}`).value
    })

    if (!(jogadoresValue.length === 5)) {
        alert("Insira 5 valores")
        return
    }

    jogadoresValue.forEach((j) => {
        if (!inputValidos.includes(j)) {
            alert("Insira valores validos")
            return
        }
    })

    let count0 = 0
    let count1 = 0

    jogadoresValue.forEach((j) => {
        if (j === "0") {
            count0++
        } else {
            count1++
        }
    })

    if (count0 === 1) {
        jogadoresValue.forEach((j, index) => {
            if (j === "0") {

                document.getElementById("ganhadorName").textContent = jogadores[index].name
                document.getElementById("ganhadorImg").src = `imagens/${jogadores[index].name.toLowerCase()}.png`
                document.getElementById("ganhador").style.display = "block"
                return
            }
        })
    } if (count1 === 1) {
        jogadoresValue.forEach((j, index) => {
            if (j === "1") {
                document.getElementById("ganhadorName").value = jogadores[index].name
                document.getElementById("ganhadorImg").src = `imagens/${jogadores[index].name.toLowerCase()}.png`
                document.getElementById("ganhador").style.display = "block"
                return
            }
        })
    } if(!(count0 === 1) && !(count1 === 1)) {
        alert("Não ouve nenhum ganhador")
    }

}


