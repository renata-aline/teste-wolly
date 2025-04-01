document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const cnpjInput = form.querySelector("#cnpj");
  const phoneInput = form.querySelector("#phone");
  const formWarning = form.querySelector("#formWarning");

  VMasker(cnpjInput).maskPattern("99.999.999/9999-99");
  VMasker(phoneInput).maskPattern("(99) 99999-9999");

  form.addEventListener("submit", function (event) {
    const name = form.querySelector("#name").value.trim();
    const cnpj = cnpjInput.value.trim();
    const email = form.querySelector("#email").value.trim();
    const phone = phoneInput.value.trim();
    const enterprise = form.querySelector("#enterprise").value.trim();

    if (!name || !cnpj || !email || !phone || !enterprise) {
      form.querySelector("#formWarning").innerHTML =
        "Por favor, preencha todos os campos obrigatórios.";

      event.preventDefault();
      return;
    }

    if (cnpj.length !== 18) {
      form.querySelector("#formWarning").innerHTML =
        "CNPJ inválido! Preencha corretamente.";
      event.preventDefault();
      return;
    }

    if (phone.length !== 15) {
      form.querySelector("#formWarning").innerHTML =
        "Telefone inválido! Use o formato (99) 99999-9999.";
      event.preventDefault();
      return;
    }

    form.querySelector("#formWarning").innerHTML =
      "Formulário enviado com sucesso!";
    formWarning.classList.add("success");
    formWarning.classList.remove("contact__description_form-warning");
    event.preventDefault();

    setTimeout(() => {
      formWarning.classList.remove("success");
      formWarning.classList.add("contact__description_form-warning");
      form.querySelector("#formWarning").innerHTML = "";
      form.reset();
    }, 3000);
  });
});
