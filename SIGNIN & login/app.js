// const firebaseConfig = {
//     apiKey: "AIzaSyDNBEVM8GKRS8PfRj6sZpSRe2N7u9HU5xE",
//     authDomain: "fir-project-1-f42d4.firebaseapp.com",
//     databaseURL: "https://fir-project-1-f42d4-default-rtdb.firebaseio.com",
//     projectId: "fir-project-1-f42d4",
//     storageBucket: "fir-project-1-f42d4.appspot.com",
//     messagingSenderId: "700157840866",
//     appId: "1:700157840866:web:99a49d9d58555357777dbb"
//   };


// const frb = firebase.initializeApp(firebaseConfig);
// console.log(frb.auth)
// console.log(frb.database)


// function send(){
//     let name = document.getElementById("name");
//     let lastname = document.getElementById("lastname")
//     let email = document.getElementById("email")
//     let password = document.getElementById("password")
//     let password2 = document.getElementById("RepeatPassword") 
//     console.log(name.value, lastname.value,email.value, password.value, password2.value);
//     document.getElementsByClassName(".btn1").onclick = function(){
//         window.location.href = "./login.html";
//         console.log(btn1)
//     }

        
//         let obj ={
//             name:name.value,
//             lastname:lastname.value,
//             email:email.value,
//             password:password.value,
//             password2:password2.value,
        
//         }

//         console.log(obj)

//     frb.database().ref("student").push(obj)
    
// }


function send(){
     
        // Assuming you want to prevent multiple submissions
        // You can disable the button to prevent multiple clicks
        document.getElementById("btn1").disabled = true;
    
        // Redirect to the next page after 1 second
        setTimeout(function() {
            window.location.href = 'login.html';
            window.history.replaceState(null, null, window.location.href);

        }, 1000);
    }
    


// (function(){
//     const feedback = document.querySelector("#feedback")
//     feedback.addEventListener('submit' ,function(e) {
//  e.preventDefault()
//  const input3 = document.querySelector('.input3');
//  const input4 = document.querySelector('.input4 ');
//  const  messageContent = document.querySelector('#profile');
    
//  if(input3.value === ''){
//     feedback.classList.add("show")
//     setTimeout(function(){
//         feedback.classList.remove('show')
//         console.log(setTimeout)
//     } , 1000)
//  }
//     else{
//         messageContent.textContent = input3.value
//         input3.value = '';
//  }
// }})();
// // 