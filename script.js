
function press_number(num) {
    document.getElementById('screen').value=document.getElementById('screen').value + num;
}

function delete_value() {
    let str = document.getElementById("screen").value;
	document.getElementById("screen").value = str.substring(0, str.length-1);
}

let card_status = false;
const card_image = document.getElementById('card-img')

function card_insert() {
    card_status = true;
    card_image.classList.add('active')
    document.getElementById("screen").value = 'Введите пин-код';
    setTimeout(function() { document.getElementById("screen").value = "";}, 1000);
}

let pin_status = false;
function enter_pin() {
    if(card_status === true) {
        if (pin_status === false) {
            if(document.getElementById("screen").value === "1111"){
                pin_status = true;
                document.getElementById("screen").value = 'Введите сумму'
                setTimeout(function() { document.getElementById("screen").value = "";}, 1000);
            }
            else {
                document.getElementById("screen").value = 'Неверный пин'
                setTimeout(function() { document.getElementById("screen").value = "";}, 1000);
                card_image.classList.remove('active')
                card_status = false;
            }
        }
        else {
            document.getElementById("money").value = ' ';
            cash_types = [5000, 2000, 1000, 500, 200, 100, 50, 20];
            for (let i=0;i<8;i++){
                while (document.getElementById("screen").value >= cash_types[i]) {
                    document.getElementById("screen").value = document.getElementById("screen").value - cash_types[i];
                    document.getElementById("money").value = document.getElementById("money").value + " "+ cash_types[i];
                }
            }
        }
    }
    else {
        document.getElementById("screen").value = 'Вставьте карту'
        setTimeout(function() { document.getElementById("screen").value = "";}, 1000);
        
    }
}
