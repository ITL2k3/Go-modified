import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { collection, doc, setDoc, addDoc } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'; 

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAAWCedFdARt-V36CGXfzOSdHh5YwgYR9g",
            authDomain: "go-modified.firebaseapp.com",
            databaseURL: "https://go-modified-default-rtdb.firebaseio.com",
            projectId: "go-modified",
            storageBucket: "go-modified.appspot.com",
            messagingSenderId: "484637671077",
            appId: "1:484637671077:web:dbb9aa3bec36d69d44d74c"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const citiesRef = collection(db, "cities");


        ///
        const submit = document.querySelector(".submit-form");
const donationform=document.getElementById("right-content");
const monthly =document.querySelector("#Yes");
const amountmonthly=document.querySelector("#Money");
const FirstName=document.querySelector("#First-name");
const LastName=document.querySelector("#Last-name");
const email=document.querySelector("#Email");
const Cellphone=document.querySelector("#Cell-phone");
const Streetline1=document.querySelector("#Street-line1");
const Streetline2=document.querySelector("#Street-line2");
const City=document.querySelector("#City");
const State=document.querySelector("#State");
const zip = document.querySelector("#zip");
const Country = document.querySelector("#country")
const ccn = document.querySelector("#ccn");
const cvv=document.querySelector("#CVV");
const month=document.querySelector("#month");
const checker=document.querySelector("#checker");
const close = document.querySelector(".closee");
const modal = document.querySelector(".modal-wrap");

const dataref = collection(db, "donaters");
submit.addEventListener("click", (e)=> {
   
    if(donationform.checkValidity()){
      setDoc(doc(dataref,"donater"),{
        monthlygift: monthly.value,
        amountmoney:amountmonthly.value,
        FirstName:FirstName.value,
        LastName:LastName.value,
        email:email.value,
        Cellphone:Cellphone.value,
        Streetline1:Streetline1.value,
        Streetline2:Streetline2.value,
        City:City.value,
        State:State.value,
        zip:zip.value,
        Country:Country.value,
        ccn:ccn.value,
        cvv:cvv.value,
        month:month.value,
        checker:checker.value,
       });
       e.preventDefault();
       modal.classList.toggle("display-none");
    }
   
 });

close.addEventListener("click", ()=>{
    modal.classList.toggle("display-none");
    donationform.reset();
});


 
// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });


        

       