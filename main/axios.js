// GET which use query parameter
axios.get('https://reqres.in/api/users?page=2')
    .then(res => console.log(res.data.data))
    .catch(err => console.log(err));

// POST
axios.post('https://reqres.in/api/users', { "name": "melchor", "job": "student" })
    .then(res => console.log(res))
    .catch(err => console.log(err));

// PUT which use path parameter
axios.put('https://reqres.in/api/users/2', { "name": "ichigo kurosaki", "job": "shinigami" })
    .then(res => console.log(res))
    .catch(err => console.log(err));

// DELETE
axios.delete('https://reqres.in/api/users/2')
    .then(res => console.log(res))
    .catch(err => console.log(err));