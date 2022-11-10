// Your code here
console.log ("Houston has landed")

const title = document.getElementById("title")
const runtime = document.getElementById("runtime")
const showtime = document.getElementById("showtime")
const description = document.getElementById("film-info")
const ticketSpan = document.getElementById("ticket-num")


const request = async() =>{
    let req = await fetch("http://localhost:3000/films")
    let res = req.json() 
    res.forEach((film, i) => {
        let poster = document.getElementById("poster")
        poster.src = film.poster
        title.innerText = film.title
        runtime.innerText = film.runtime
        showtime.innerText = film.showtime
        description.innerText = film.description
    })
       
    Films.append(title)

    };

    


