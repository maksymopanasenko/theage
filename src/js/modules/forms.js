function formValidation() {
    $('.tickets__form').validate({
        rules: {
          ticketNum: {
            required: true,
            maxlength: 5,
            minlength: 5
          },
          ticketDate: "required",
          ticketTime: "required"
        },
        messages: {
          ticketNum: "Wprowadź 5-cyfrowy numer z zakupionego biletu. Dozwolone tylko cyfry.",
          ticketDate: "Wybierz porządaną datę",
          ticketTime: "Wybierz porządaną godzinę"
        }
    });
}

// function checkValidation() {
//     if (!$('form').valid()) {
//         return;
//     }
// }

export {formValidation};