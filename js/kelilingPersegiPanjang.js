function hitungKelilingPersegiPanjang() {
    const pj = document.getElementById('panjangKeliling').value;
    const lb = document.getElementById('lebarKeliling').value;
    const jumlah = parseInt(pj) + parseInt(lb);
    const keliling = 2 * ( pj + lb );
    const hasil = `Keliling Persegi Panjang = 2 x (Panjang + Lebar)\nKeliling Persegi Panjang = 2 x ( ${pj} cm + ${lb} cm)\nKeliling Persegi Panjang = 2 x ${jumlah} cm\nKeliling Persegi Panjang = ${keliling} cm`;
    document.getElementById('hasilKelilingPersegiPanjang').innerText = hasil;
}

function resetFormKelilingPersegiPanjang() {
    document.getElementById('panjangKeliling').value = '';
    document.getElementById('lebarKeliling').value = '';
    document.getElementById('hasilKelilingPersegiPanjang').innerText = '';
}