// Resume Generation Function
document.getElementById('generate-resume')?.addEventListener('click', () => {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const workDuration = (document.getElementById('work-duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Set resume preview values
    document.getElementById('preview-name')!.innerText = name || 'Your Name';
    document.getElementById('preview-title')!.innerText = title || 'Job Title';
    document.getElementById('preview-email')!.innerText = email || 'example@example.com';
    document.getElementById('preview-phone')!.innerText = phone || '000-000-0000';
    document.getElementById('preview-degree')!.innerText = degree || 'Your Degree';
    document.getElementById('preview-school')!.innerText = school || 'Your School';
    document.getElementById('preview-year')!.innerText = year || '2020';
    document.getElementById('preview-company')!.innerText = company || 'Your Company';
    document.getElementById('preview-position')!.innerText = position || 'Your Position';
    document.getElementById('preview-work-duration')!.innerText = workDuration || 'Work Duration';
    document.getElementById('preview-skills')!.innerText = skills || 'Skill 1, Skill 2, Skill 3';

    // Display the resume preview
    document.getElementById('resume-preview')!.style.display = 'block';
});