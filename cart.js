
var removeCartItemButtons = document.getElementsByClassName('btn-remove')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function (event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
  })
}
fonction updateTotal(){
  var cartItemContainer = document.getElementsByClassName('items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('article')
  for (var i = 0; i < cartRows.length; i++) {
    var cartRows = cartRows[i]
    var priceElement = cartRows.getElementsByClassName('price')[0]
    var quantityElement = cartRows.getElementsByClassName('totale')
  }
} 