import Notice from "../modules/notifications";
import { Email, Data } from "./smtp";
import $ from "jquery";

let form = ".js-callme-form";

$(form).validate({
  rules: {
    phone: {
      required: true,
      minlength: 16,
    },
  },
  messages: {
    phone: {
      required: "Введите телефон",
      minlength: "Слишком короткий номер",
    },
  },
  submitHandler: function(form) {
    let $form = $(form);
    let formData = $form.serializeArray();

    Email.send({
      SecureToken: Data.SecureToken,
      To: Data.to,
      From: Data.from,
      Subject: "Заявка на звонок",
      Body: `
            <p>Телефон: <strong>${formData[0].value}</strong></p>
            
            `,
    }).then((message) => {
      $(".js-close-modal").trigger("click");
      Notice.openSuccess("Заявка отправлена!");
      $form.get(0).reset();
    });

    return false;
  },
});
