const usernameError = document.getElementById('signup-username-error');

const validateUsername = (event) => {
    const usernameInput = event.target;
    const inputText = usernameInput.value;

    console.dir(usernameInput.classList);

    const hasNumber = /\d+/.test(inputText);
    const hasLetter = /[a-z]+/.test(inputText);
    const hasSpecial = /[!@£$%^&*]+/.test(inputText);

    if (hasNumber === true && hasLetter === true && hasSpecial === true) {
        usernameInput.classList.add('valid');
        usernameInput.classList.remove('invalid');
        usernameError.innerText = '';
    } else {
        usernameInput.classList.remove('valid');
        usernameInput.classList.add('invalid');
        usernameError.innerText =
            '* Username must include at least one letter, number and special character';
    }
};

const firstNameError = document.getElementById('signup-firstName-error');

const validateFirstName = (event) => {
    const firstNameInput = event.target;
    const inputText = firstNameInput.value;

    const isValid = /^[a-z '-]+$/i.test(inputText);

    if (isValid) {
        firstNameInput.classList.add('valid');
        firstNameInput.classList.remove('invalid');
        firstNameError.innerText = '';
    } else {
        firstNameInput.classList.add('invalid');
        firstNameInput.classList.remove('valid');
        firstNameError.innerText =
            '* Please only use letters, spaces, hyphens and apostrophes';
    }
};

const lastNameError = document.getElementById('signup-lastName-error');

const validateLastName = (event) => {
    const lastNameInput = event.target;
    const inputText = lastNameInput.value;

    const isValid = /^[a-z '-]+$/i.test(inputText);

    if (isValid) {
        lastNameInput.classList.add('valid');
        lastNameInput.classList.remove('invalid');
        lastNameError.innerText = '';
    } else {
        lastNameInput.classList.add('invalid');
        lastNameInput.classList.remove('valid');
        lastNameError.innerText =
            '* Please only use letters, spaces, hyphens and apostrophes';
    }
};

const dobError = document.getElementById('signup-dob-error')

const validateDob = (event) => {
    const dobInput = event.target;
    const inputDate = dobInput.value;

    const validDob = new Date();
    validDob.setFullYear(validDob.getFullYear() - 18);

    const formattedInputDate = new Date(inputDate)

    if (validDob > formattedInputDate) {
        dobInput.classList.add('valid');
        dobInput.classList.remove('invalid');
        dobError.innerText = '';
    }
    else {
        dobInput.classList.add('invalid');
        dobInput.classList.remove('valid');
        dobError.innerText = '* You must be over 18! 👶'
    }
};

const handleSubmit = (event) => {
    const inputs = [...document.getElementsByClassName('signup-input')];
    console.log(inputs.classList[0])
    let isValid = inputs.every(input => {
        return input.classList.contains('valid');
    });
    if (!isValid) {
        event.preventDefault();
    }
};