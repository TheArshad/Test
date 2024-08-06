
        async function fetchUsers() {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                return data.users;
            } catch (error) {
                console.error('Error fetching users:', error);
                return [];
            }
        }

        function createUserRow(values) {
            const row = document.createElement('tr');
            const fullNameCell = document.createElement('td');
            fullNameCell.textContent = values.firstName+" "+values.maidenName+" "+values.lastName;
            row.appendChild(fullNameCell);
            
            const usernameCell = document.createElement('td');
            usernameCell.textContent = values.username;
            row.appendChild(usernameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = values.email;
            row.appendChild(emailCell);

            const controlsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                row.remove();
            });
            controlsCell.appendChild(deleteButton);
            row.appendChild(controlsCell);

            return row;
        }

        async function populateUserTable() {
            const users = await fetchUsers();
            const userTableBody = document.getElementById('user-table-body');
            users.forEach(user => {
                const userRow = createUserRow(user);
                userTableBody.appendChild(userRow);
            });
        }

        document.addEventListener('DOMContentLoaded', populateUserTable);
