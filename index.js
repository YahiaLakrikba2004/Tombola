$(function () {
  let allNumbers = []
  allSelectedNumbers = []

  for (let count = 1; count < 77; count++) {
    $('#tabella').append(`<span class ="animated zoomIn"> ${count} </span>`)
    allNumbers.push(count)
  }

  const autorun = () => {
    setInterval(function () {
      $('.estrai-numero').click()
    }, 2000)
  }

  $('.autorun').click(function () {
    autorun()
  })

  $('.estrai-numero').click(function () {
    if (allNumbers.length == 0) {
      $('.estrai-numero').fadeOut()
    }
    $('.extracted-number').fadeOut(1000, function () {
      let SelectedNumber =
        allNumbers[Math.floor(Math.random() * allNumbers.length)]
      $('.extracted-number').text(SelectedNumber)
      $('.extracted-number').fadeIn()

      let remove = allNumbers.indexOf(SelectedNumber)
      allNumbers.splice(remove, 1)
      allSelectedNumbers.push(SelectedNumber)
      console.log(allSelectedNumbers)

      $('span').each(function () {
        let check = allSelectedNumbers.includes(parseInt($(this).text()))
        if (check) {
          $(this).addClass('found')
        }
      })
    })
  })
})
