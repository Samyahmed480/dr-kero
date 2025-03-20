function validateAccessCode(code) {
    const validCode = "1234"; // يمكنك تغيير كود الدخول هنا
    return code === validCode;
}

function handleLogin(code) {
    if (validateAccessCode(code)) {
        localStorage.setItem('accessCode', code);
        return true;
    }
    return false;
}
