$(document).ready(function () {
  $("input[type=tel]").mask("+7 (999) 999-99-99")
  $("input.inn").mask("999999999?999")

  $("#id_check").on("change", function (e) {
    if ($(this).is(":checked")) {
      $("#formsubmit").removeAttr("disabled")
    } else {
      $("#formsubmit").prop("disabled", true)
    }
  })
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return regex.test(email)
  }
  function showError(input) {
    input.closest(".mainform__input").removeClass("success").addClass("error")
    input.closest(".mainform__input").find(".errortext").show()
  }

  function hideError(input) {
    input.closest(".mainform__input").removeClass("error").addClass("success")
    input.closest(".mainform__input").find(".errortext").hide()
  }

  $("form").on("submit", function (e) {
    e.preventDefault()
    let valid = true

    const $required = $("input.required")

    $required.each(function () {
      console.log($(this).val())
      if ($(this).val().length < 1) {
        showError($(this))
        valid = false
      } else {
        hideError($(this))
      }
    })

    $('input[type="email]"').each(function () {
      valid = isEmail($(this))
      if (!valid) {
        showError($(this))
      } else {
        hideError($(this))
      }
    })

    if (valid) {
      $("#regmodal").modal("show")
    }
  })
})
