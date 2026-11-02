// 1. Constructor Function
function Guvi(name, email, password, Aadhar, type) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.Aadhar = Aadhar;
    this.type = type;
}

// Display Constructor (empty, used for holding prototype methods)
function Display() {}

// 2. Prototype Methods
Display.prototype.validate = function(guviData) {
    // Validation: Name > 2, Email > 5, Password > 5, Aadhar == 12
    if (guviData.name.length < 2 || 
        guviData.email.length < 5 || 
        guviData.password.length < 5 || 
        guviData.Aadhar.length !== 12) {
        return false;
    }
    return true;
};

Display.prototype.add = function(data) {
    let tableBody = document.getElementById('tableBody');
    // Note: We don't display the password in the table for security
    let uiString = `<tr>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.Aadhar}</td>
                        <td>${data.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
};

Display.prototype.clear = function() {
    let form = document.getElementById('registrationForm');
    form.reset();
};

Display.prototype.show = function(type, message) {
    let messageDiv = document.getElementById('showMessage');
    messageDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${message}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    
    setTimeout(function() {
        messageDiv.innerHTML = '';
    }, 3000);
};

// 3. Handle Form Submission
let form = document.getElementById('registrationForm');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let Aadhar = document.getElementById('Aadhar').value;
    
    // Determine Gender
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let type;
    if (male.checked) {
        type = male.value;
    } else if (female.checked) {
        type = female.value;
    }

    // Instantiate Objects
    let user = new Guvi(name, email, password, Aadhar, type);
    let display = new Display();

    // Validate and Act
    if (display.validate(user)) {
        display.add(user);
        display.clear();
        display.show('success', 'Registration successful!');
    } else {
        display.show('danger', 'Registration failed. Please check inputs (Aadhar must be 12 digits).');
    }
});