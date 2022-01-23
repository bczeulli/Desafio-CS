
// botão editar habilita o form

function editar(n) {
    switch (n) {
        case 1:
            var input = document.getElementById('textArea1').readOnly = false;
            break;
        case 2:
            var input = document.getElementById('textArea2').readOnly = false;
            break;
        case 3:
            var input = document.getElementById('textArea3').readOnly = false;
            break;
        case 4:
            var input = document.getElementById('textArea4').readOnly = false;
            break;
        case 5:
            var input = document.getElementById('textArea5').readOnly = false;
            break;
        case 6:
            var input = document.getElementById('textArea6').readOnly = false;
            break;
        case 7:
            var input = document.getElementById('textArea7').readOnly = false;
            break;                     
    }
}

