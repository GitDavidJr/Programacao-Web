const handleMaiMin = () => {
    const text = document.getElementById("text").value;

    document.getElementById("mai").value = text.toUpperCase();
    document.getElementById("min").value = text.toLowerCase();
}