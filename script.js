const avanca = document.querySelectorAll('.btn-choice');

    avanca.forEach(button => {
        button.addEventListener('click', function(){
        const atual = document.querySelector('.active');
        const nextstep = 'choice-' + this.getAttribute('data-proximo');

        atual.classList.remove('active');
        document.getElementById(nextstep).classList.add('active');
    })
}) //eu entendi o códigoo, ebaaaaaaa! 