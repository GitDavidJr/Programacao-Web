const applyColor = () => {
    const corSelect = document.getElementById("corSelect").value;

    const corCustom = document.getElementById("rgbInput").value;

    if (corSelect === "other") {
        document.getElementById("hino").style.color = corCustom;
    } else {
        document.getElementById("hino").style.color = corSelect;
    }
}

const handleOnChangeSelect = () => {
    const corSelect = document.getElementById("corSelect").value;

    if (corSelect === "other") {
        document.getElementById("customColor").style.display = "flex";
    } else {
        document.getElementById("customColor").style.display = "none";
    }
}