document.addEventListener('DOMContentLoaded', function() {
    const persegiLink = document.getElementById('persegiLink');
    const persegiPanjangLink = document.getElementById('persegiPanjangLink');
    const persegiSection = document.getElementById('persegiSection');
    const persegiPanjangSection = document.getElementById('persegiPanjangSection');

    persegiLink.addEventListener('mouseover', function() {
        persegiSection.classList.add('active');
        persegiPanjangSection.classList.remove('active');
    });

    persegiPanjangLink.addEventListener('mouseover', function() {
        persegiPanjangSection.classList.add('active');
        persegiSection.classList.remove('active');
    });
});