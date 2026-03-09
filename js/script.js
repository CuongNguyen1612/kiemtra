// Đăng ký
function register(){

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let user = {
        username: username,
        password: password
    }

    localStorage.setItem("user", JSON.stringify(user))

    alert("Đăng ký thành công")
    window.location = "login.html"
}


// Đăng nhập
function login(){

let username = document.getElementById("loginUser").value
let password = document.getElementById("loginPass").value

let user = JSON.parse(localStorage.getItem("user"))

if(username == user.username && password == user.password){

localStorage.setItem("loggedIn","true")

alert("Đăng nhập thành công")
window.location.href="index.html"

}else{

alert("Sai tài khoản hoặc mật khẩu")

}

}
function logout(){

localStorage.removeItem("loggedIn")

window.location.href="login.html"

}
// Tính lãi
function calculate(){

let money = parseFloat(document.getElementById("money").value)
let rate = parseFloat(document.getElementById("rate").value)/100
let month = parseInt(document.getElementById("month").value)
let method = document.getElementById("method").value

let table = document.getElementById("schedule")
let resultBox = document.getElementById("resultBox")

resultBox.style.display = "block"

let totalInterest = 0

// ======================
// DƯ NỢ ĐỀU
// ======================

if(method == "equal"){

table.style.display="none"

let interest = money * rate * month
let total = money + interest

document.getElementById("principal").innerHTML = money + " VND"
document.getElementById("interest").innerHTML = interest.toFixed(0) + " VND"
document.getElementById("total").innerHTML = total.toFixed(0) + " VND"

}

// ======================
// DƯ NỢ GIẢM DẦN
// ======================

else if(method == "decrease"){

table.style.display="table"

let principalMonth = money / month
let remain = money

table.innerHTML = `
<tr>
<th>Tháng</th>
<th>Dư nợ</th>
<th>Gốc</th>
<th>Lãi</th>
<th>Tổng trả</th>
</tr>
`

for(let i=1;i<=month;i++){

let interest = remain * rate
let payment = principalMonth + interest

totalInterest += interest

table.innerHTML += `
<tr>
<td>${i}</td>
<td>${remain.toFixed(0)}</td>
<td>${principalMonth.toFixed(0)}</td>
<td>${interest.toFixed(0)}</td>
<td>${payment.toFixed(0)}</td>
</tr>
`

remain -= principalMonth

}

let total = money + totalInterest

document.getElementById("principal").innerHTML = money + " VND"
document.getElementById("interest").innerHTML = totalInterest.toFixed(0) + " VND"
document.getElementById("total").innerHTML = total.toFixed(0) + " VND"

}

}