// 1. ES6 Class for User Data
class Guvi {
    constructor(name, email, password, Aadhar, type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.Aadhar = Aadhar;
        this.type = type;
    }
}

// 2. ES6 Class for UI/Display Logic
class Display {
    validate(guviData) {
        if (guviData.name.length < 2 || 
            guviData.email.length < 5 || 
            guviData.password.length < 5 || 
            guviData.Aadhar.length !== 12) {
            return false;
        }
        return true;
    }

    add(data) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${data.name}</td>
                            <td>${data.email}</td>
                            <td>${data.Aadhar}</td>
                            <td>${data.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let form = document.getElementById('registrationForm');
        form.reset();
    }

    show(type, message) {
        let messageDiv = document.getElementById('showMessage');
        messageDiv.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>${message}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        
        setTimeout(() => {
            messageDiv.innerHTML = '';
        }, 3000);
    }
}

// 3. Handle Form Submission
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let Aadhar = document.getElementById('Aadhar').value;
    
    let type = document.getElementById('male').checked ? 'Male' : 'Female';

    let user = new Guvi(name, email, password, Aadhar, type);
    let display = new Display();

    if (display.validate(user)) {
        display.add(user);
        display.clear();
        display.show('success', 'Registration successful! (ES6 Mode)');
    } else {
        display.show('danger', 'Registration failed. Check inputs (Aadhar must be 12 digits).');
    }
});

// 4. Handle Search Functionality
document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#tableBody tr');

    rows.forEach(row => {
        let textContent = row.textContent.toLowerCase();
        if (textContent.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Prevent search form from submitting and refreshing the page on "Enter"
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault(); 
});