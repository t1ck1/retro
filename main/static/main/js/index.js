document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

document.getElementById('close_pop').addEventListener("click", function() {
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    localStorage.removeItem('ID')
    document.getElementById('users').classList.remove("opas")
    location.reload()
})

document.getElementById('closes').addEventListener("click", function() {
    document.getElementById('users').classList.remove("opas")
})

document.getElementById('google').addEventListener("click", function() {
    document.getElementById('modal_9').classList.add("open")
})

document.getElementById('ping').addEventListener("click", function() {
    document.getElementById('modal_12').classList.add("open")
})

document.getElementById('googlee').addEventListener("click", function() {
    document.getElementById('modal_9').classList.add("open")
    document.getElementById('mod').classList.remove("o")
})

document.getElementById('pingg').addEventListener("click", function() {
    document.getElementById('modal_12').classList.add("open")
    document.getElementById('mod').classList.remove("o")
})

document.getElementById('close_my_modal').addEventListener("click", function() {
    document.getElementById('modal_9').classList.remove("open")
    document.getElementById('passwordBox1').classList.remove("error")
    document.getElementById('passwordBox').classList.remove("error")
})

document.getElementById('close_my_modal_2').addEventListener("click", function() {
    document.getElementById('modal_12').classList.remove("open")
    document.getElementById('bot1').classList.remove("error")
    document.getElementById('bot').classList.remove("error")
    document.getElementById('password').classList.remove("error")
})

function joj() {
    var mom = document.getElementById('passwordBox');
    var mam = document.getElementById('passwordBox1');

    var mom = document.getElementById('passwordBox');
    var momm = mom.value
    var mam = document.getElementById('passwordBox1');
    var mamm = mam.value

    if (momm == "") {
        if (mamm == "") {
            document.getElementById('passwordBox1').classList.add("error")
            document.getElementById('passwordBox').classList.add("error")
            alert('Спочатку введіть данні');
            return false;
        }
        document.getElementById('passwordBox').classList.add("error")
        alert('Спочатку введіть данні');
        return false;
    }

    if (mamm == "") {
        if (momm == "") {
            document.getElementById('passwordBox').classList.add("error")
            document.getElementById('passwordBox1').classList.add("error")
            alert('Спочатку введіть данні');
            return false;
        }
        document.getElementById('passwordBox1').classList.add("error")
        alert('Спочатку введіть данні');
        return false;
    }

    if (momm == mamm) {
        alert('Логін повинен відрізнятися від паролю')
        return false
    }
        
        
            
            
    if (momm != mamm) {     
        alert('Ви успішно зареєстровані')
        fetch("https://65d33ccc522627d501085f93.mockapi.io/api/v1/name_password", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: momm,
                password: mamm,
            })  
        })
            .then(res => res.json())   
            .then(data => alert(JSON.stringify(data)))
        mom.value = ''
        mam.value = ''
        document.getElementById('modal_9').classList.remove("open")
        document.getElementById('passwordBox').classList.remove("error")
        document.getElementById('passwordBox1').classList.remove("error")
        return true   
    }
}

async function doro() {
    let response = await fetch("https://65d33ccc522627d501085f93.mockapi.io/api/v1/name_password")
    let text1 = await response.text()
    let text2 = JSON.parse(text1)
    var mom_9 = document.getElementById('password');
    var non = document.getElementById('bot1');
    var nan = document.getElementById('bot');
    const mu = mom_9.value
    const ma = nan.value
    const mi = non.value

    if (non.value == "") {
        if (mom_9.value == "") {
            if (nan.value == "") {
                document.getElementById('bot1').classList.add("error")
                document.getElementById('bot').classList.add("error")
                document.getElementById('password').classList.add("error")            
                alert('Введіть данні')
                return false
            }
            document.getElementById('bot1').classList.add("error")
            document.getElementById('bot').classList.add("error")
            alert('Введіть данні')
            return false
        }
        if (nan.value == "") {
            if (mom_9.value == "") {
                document.getElementById('bot1').classList.add("error")
                document.getElementById('bot').classList.add("error")
                document.getElementById('password').classList.add("error")                
                alert('Введіть данні')
                return false
            }
            document.getElementById('bot1').classList.add("error")
            document.getElementById('bot').classList.add("error")
            alert('Введіть данні')
            non.value = ''
            nan.value = ''
            mom_9.value = ''
            return false
        }
        document.getElementById('bot1').classList.add("error")
        alert('Введіть ID')
        return false
    }

    var nen = (text2[non.value].name)
    var nun = (text2[non.value].password)

    if (nen == nan.value){
        if (nun == mom_9.value) {
            alert('Вхід було виповнено успішно')
            non.value = ''
            nan.value = ''
            mom_9.value = ''
            document.getElementById('modal_12').classList.remove("open")
            document.getElementById('typee').classList.add("opens")
            localStorage.setItem('name', ma)
            localStorage.setItem('password', mu)
            localStorage.setItem('ID', mi)
            location.reload()
            return true
        }
    }

    alert('Помилка, спробуйте пізніше!')
        document.getElementById('bot1').classList.remove("error")
        document.getElementById('bot').classList.remove("error")
        document.getElementById('password').classList.remove("error")
        return false
}

function ent() {
    var poj = document.getElementById('ton')
    if (poj.value ==  'Відеокурси'){
        alert('hohol')
    }
}

var name_12 = localStorage.getItem('name')
var password_12 = localStorage.getItem('password')
var id_12 = localStorage.getItem('ID')
document.getElementById('name_34').innerHTML = name_12
document.getElementById('password_34').innerHTML = password_12
document.getElementById('ID_34').innerHTML = id_12
console.log('name;', name_12, 'password;', password_12, 'ID;', id_12)


document.getElementById('typee').addEventListener("click", function() {
    if (name_12 == null){
        document.getElementById('mod').classList.add("o")
    }
    if (name_12 != null){
        document.getElementById('users').classList.add("opas")
    }
})