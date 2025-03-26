const courseCodes = {
    'basic': {
        code: 'CHEM101',
        redirect: 'basic-course.html'
    },
    'advanced': {
        code: 'CHEM102',
        redirect: 'advanced-course.html'
    },
    'final': {
        code: 'CHEM103',
        redirect: 'final-review.html'
    },
    'excellence': {
        code: 'CHEM104',
        redirect: 'excellence-course.html'
    },
    'basics': {
        code: 'CHEM100',
        redirect: 'foundation-course.html'
    }
};

function checkCourseAccess() {
    if (!sessionStorage.getItem('courseAccess')) {
        window.location.href = 'course-login.html';
        return false;
    }
    return true;
}

function checkCourseCode() {
    const courseCode = document.getElementById('courseCode').value;
    // يمكنك تغيير الكود هنا
    if (courseCode === 'drkirolostharwat852654') {
        sessionStorage.setItem('courseAccess', 'true');
        window.location.href = document.referrer || 'basic-course.html';
    } else {
        alert('كود غير صحيح');
    }
}
