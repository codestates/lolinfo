export function validEmail(email) {
    const regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(email)) {
        return false;
    } else {
        return true;
    }
}

export function validPassword(password) {
    const regExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (!regExp.test(password)) {
        return false;
    } else {
        return true;
    }
}

export function isMatchPassword(password1, password2) {
    if (password1 === password2) {
        return true;
    } else {
        return false;
    }
}