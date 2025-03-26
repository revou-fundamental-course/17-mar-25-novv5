function hitungKelilingPersegi() {
    const sisi = document.getElementById('sisiKeliling').value;
    const keliling = 4 * sisi;
    const hasil = `Keliling Persegi = 4 x Sisi\nKeliling Persegi = 4 x ${sisi} cm\nKeliling Persegi = ${keliling} cm`;
    document.getElementById('hasilKelilingPersegi').innerText = hasil;
}

function resetFormKeliling() {
    document.getElementById('sisiKeliling').value = '';
    document.getElementById('hasilKelilingPersegi').innerText = '';
}