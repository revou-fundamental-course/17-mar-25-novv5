function hitungLuasPersegi() {
    const sisi = document.getElementById('sisiLuas').value;
    const luas = sisi * sisi;
    const hasil = `Luas Persegi = Sisi x Sisi\nLuas Persegi = ${sisi} cm x ${sisi} cm\nLuas Persegi = ${luas} cm²`;
    document.getElementById('hasilLuasPersegi').innerText = hasil;
}

function resetFormLuas() {
    document.getElementById('sisiLuas').value = '';
    document.getElementById('hasilLuasPersegi').innerText = '';
}