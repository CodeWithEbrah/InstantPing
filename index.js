const input = document.getElementById("phone-no")
const span = document.getElementById("submit")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const cyber_msg_input= document.getElementById("message")
let phoneNumber;



const create_chat = () => {
  if(input.value.length <= 1){
    alert("couldnt look phone number 254 because it's too short")
    span.href = "#"
  }else if (input.value.length> 1 && input.value.length < 3 ){
    alert("couldnt look phone number 254" + input.value + " because it isn't the correct length for country code 254.")
    span.href = "#"
  }
  else if(input.value.length <= 9){
      alert("Phone Number too short")
    span.href = "#"
  }else if (input.value.length >= 16){
    alert("Phone Number too long")
    span.href = "#"
  }
  else{
    phoneNumber = "whatsapp://send?text=" + cyber_msg_input.value + "&phone=+254" + input.value
   // span.href = phoneNumber
    location.href = phoneNumber
  }
}

submit.addEventListener('click', create_chat)