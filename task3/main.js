chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      findIng()
    }
  }
);

function findIng() {
  let body = document.querySelector('body')
  const html = body.innerHTML
  const textArr = html.split(' ')
  

  const ingWords = textArr.map(word => {
    if(word.endsWith('ing')) {
      return '<span style="color: yellow; text-decoration: underline; background-color: black">' + word + '</span>'
    }
    return word
  }) 

  body.innerHTML = ingWords.join(' ')
}
