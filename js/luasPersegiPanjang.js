function hitungLuasPersegiPanjang() {
    const pj = document.getElementById('panjangLuas').value;
    const lb = document.getElementById('lebarLuas').value;
    const luas = pj * lb;
    const hasil = `Luas Persegi Panjang = Panjang x Lebar\nLuas Persegi Panjang = ${pj} cm x ${lb} cm\nLuas Persegi Panjang = ${luas} cm²`;
    document.getElementById('hasilLuasPersegiPanjang').innerText = hasil;
}

function resetFormLuasPersegiPanjang() {
    document.getElementById('panjangLuas').value = '';
    document.getElementById('lebarLuas').value = '';
    document.getElementById('hasilLuasPersegiPanjang').innerText = '';
}