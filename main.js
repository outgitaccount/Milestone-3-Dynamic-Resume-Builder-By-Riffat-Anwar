var _a;
// Resume Generation Function
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get form values
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var year = document.getElementById('year').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var workDuration = document.getElementById('work-duration').value;
    var skills = document.getElementById('skills').value;
    // Set resume preview values
    document.getElementById('preview-name').innerText = name || 'Your Name';
    document.getElementById('preview-title').innerText = title || 'Job Title';
    document.getElementById('preview-email').innerText = email || 'example@example.com';
    document.getElementById('preview-phone').innerText = phone || '000-000-0000';
    document.getElementById('preview-degree').innerText = degree || 'Your Degree';
    document.getElementById('preview-school').innerText = school || 'Your School';
    document.getElementById('preview-year').innerText = year || '2020';
    document.getElementById('preview-company').innerText = company || 'Your Company';
    document.getElementById('preview-position').innerText = position || 'Your Position';
    document.getElementById('preview-work-duration').innerText = workDuration || 'Work Duration';
    document.getElementById('preview-skills').innerText = skills || 'Skill 1, Skill 2, Skill 3';
    // Display the resume preview
    document.getElementById('resume-preview').style.display = 'block';
});
