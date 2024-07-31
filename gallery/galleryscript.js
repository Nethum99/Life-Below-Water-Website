let next = document.querySelector('.next')      // Selecting the next and previous buttons using their class names
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){                      // Adding an event listener to the next button
    let items = document.querySelectorAll('.item')              // Selecting all items within the slide
    document.querySelector('.slide').appendChild(items[0])      // Moving the first item to the end of the slide (circular rotation)
})

prev.addEventListener('click', function(){                     // Adding an event listener to the previous button
    let items = document.querySelectorAll('.item')             // Selecting all items within the slide
    document.querySelector('.slide').prepend(items[items.length - 1])       // Moving the last item to the beginning of the slide (circular rotation)
})