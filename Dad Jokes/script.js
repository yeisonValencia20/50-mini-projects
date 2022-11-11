const jokeContainer = document.getElementById('joke');

getJoke()

function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => jokeContainer.innerHTML = data.joke)
}

// // USING ASYNC/AWAIT
// async function getJoke() {
//     const config = {
//       headers: {
//         Accept: 'application/json',
//       },
//     }
  
//     const res = await fetch('https://icanhazdadjoke.com', config)
  
//     const data = await res.json()
  
//     jokeContainer.innerHTML = data.joke
//   }