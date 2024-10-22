const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "chat-interactivo-ce323.firebaseapp.com",
    databaseURL: "https://chat-interactivo-ce323-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-interactivo-ce323",
    storageBucket: "chat-interactivo-ce323.appspot.com",
    messagingSenderId: "474997098356",
    appId: "1:474997098356:web:86ed5449562419fa964e21",
    measurementId: "G-FRE2732VJC"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        alert("Genial! Se está creando tu cuenta :)")
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})