const navigateBtn = document.getElementById('place-order')
const user_name = document.querySelector('.name')
const active_phone_number = document.querySelector('.active-number')
const alternative_phone_number = document.querySelector('.alternative-number')
const state = document.querySelector('.state')
const address = document.querySelector('.address')
const options = Array.from(document.querySelectorAll('.option'))

const clearInputs = () => {
  user_name.value =
    active_phone_number.value =
    state.value =
    address.value =
    alternative_phone_number.value =
      ''
}

navigateBtn.addEventListener('click', function () {
  console.log('btn clicked')

  let optionChecked = ''
  options.map((option, i) => {
    if (option.checked) {
      console.log('selected', options[i].value)
      optionChecked = options[i].value
      return optionChecked
    }
  })

  if (
    user_name.value &&
    active_phone_number.value &&
    state.value &&
    address.value &&
    optionChecked
  ) {
    window.open('thanks.html', '_blank')
    clearInputs()
  } else {
    console.log('fill all fields')
  }
})
