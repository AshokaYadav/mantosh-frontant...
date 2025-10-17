  const openForm = document.getElementById('openForm');
    const errorDiv = document.getElementById('errorDiv');
    const container = document.getElementById('container');
    const closeBtn = document.getElementById('closeBtn');
    const UserForm = document.getElementById('FormList');
    const tableUser = document.querySelector('#tableUser tbody');
    const API_URL = "https://mantoshbackend.onrender.com/users";


    openForm.addEventListener('click', () => {
        container.style.display = "flex";
    })
    closeBtn.addEventListener('click', () => {
        container.style.display = "none";
    })

    // user (Get)

    function fetchUsers() {

        axios.get(API_URL)
            .then(response => {
                tableUser.innerHTML = "";
                errorDiv.style.display = "none";

                response.data.forEach(element => {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>`;

                    tableUser.appendChild(row);
                });
            })
            .catch(error => {
                console.log(error);
                errorDiv.innerText = "your conection faild try again";
                errorDiv.style.display = "block";

                setTimeout(() => {
                    errorDiv.style.display = "none"
                }, 3000);
            }

            )

    }
    fetchUsers();

    UserForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const saveUser = document.getElementById('saveUser');
        saveUser.innerText = "saving....";
        saveUser.Disabled = "true";


        const userName = document.getElementById('name').value;
        const userAge = document.getElementById('age').value;

        axios.post(API_URL, { name: userName, age: userAge })
            .then(response => {
                console.log(response.data);
                UserForm.reset();
                fetchUsers();

            })
            .catch(error => {
                console.log(error);
                errorDiv.innerText = "check your connection please try again";
                errorDiv.style.display = "block";

                setTimeout(() => {
                    errorDiv.style.display = "none";
                }, 6000);
              })
            .finally(() => {
                saveUser.innerText = "Save user";
                saveUser.Disabled = "false";
            })
        })
