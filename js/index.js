document.getElementById("contact-form-submit").addEventListener("click", () => {
  const email = document.getElementById("email");
  const companyName = document.getElementById("companyName");
  const fullName = document.getElementById("fullName");
  const cellphone = document.getElementById("cellphone");

  let success = true;
  if (
    !email.value.trim() ||
    !companyName.value.trim() ||
    !fullName.value.trim() ||
    !cellphone.value.trim()
  )
    success = false;

  Toastify({
    text: success
      ? `Thank you. We'll reach out shortly!`
      : "Please fill all the data!",
    duration: 2500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: success ? "#28A745" : "#DC3545",
      fontFamily: "SpaceGroteskRegular",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18.8845px",
      lineHeight: "150.18%",
      letterSpacing: "-0.02em",
      color: "#ffffff",
    },
  }).showToast();

  if (success) {
    email.value = "";
    companyName.value = "";
    fullName.value = "";
    cellphone.value = "";
  }
});
