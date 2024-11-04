// GET
fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json()) // we must convert the response into JSON first
    .then(data => console.log(data.data))
    .catch(err => console.log(err))

// POST
fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "melchor",
        job: "student"
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// PUT
fetch('https://reqres.in/api/users/2', {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "ichigo kurosaki",
        "job": "shinigami"
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// DELETE
fetch('https://reqres.in/api/users/2')
    .then(res => console.log(res))
    .catch(err => console.log(err));