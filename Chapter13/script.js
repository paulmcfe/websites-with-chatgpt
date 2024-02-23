document.addEventListener('DOMContentLoaded', () => {
    fetch('college_courses.json')
        .then(response => response.json())
        .then(data => {
            populateDropdowns(data);
            populateArticles(data);
        });

    document.getElementById('Department').addEventListener('change', function() {
        filterData();
    });

    document.getElementById('Instructor').addEventListener('change', function() {
        filterData();
    });

    document.getElementById('Sort').addEventListener('change', function() {
        sortData();
    });

    document.getElementById('Search').addEventListener('input', function() {
        searchData(this.value.trim());
    });
});

function populateDropdowns(data) {
    const departments = new Set(data.map(course => course.Department));
    const instructors = new Set(data.map(course => course.Instructor));
    
    departments.forEach(department => {
        document.getElementById('Department').add(new Option(department, department));
    });

    instructors.forEach(instructor => {
        document.getElementById('Instructor').add(new Option(instructor, instructor));
    });
}

function populateArticles(data) {
    const article = document.querySelector('article');
    article.innerHTML = '';
    data.forEach(course => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h3>${course.Title}</h3>
            <div>
                Course ID: ${course['Course ID']}<br>
                Instructor: ${course.Instructor}<br>
                Department: ${course.Department}<br>
                Semester: ${course.Semester}<br>
            </div>
            <p>${course.Description}</p>
        `;
        article.appendChild(section);
    });
}

function filterData() {
    fetch('college_courses.json')
        .then(response => response.json())
        .then(data => {
            const departmentValue = document.getElementById('Department').value;
            const instructorValue = document.getElementById('Instructor').value;
            
            let filteredData = data;
            if (departmentValue !== 'all') {
                filteredData = filteredData.filter(course => course.Department === departmentValue);
            }
            if (instructorValue !== 'all') {
                filteredData = filteredData.filter(course => course.Instructor === instructorValue);
            }
            populateArticles(filteredData);
        });
}

function sortData() {
    fetch('college_courses.json')
        .then(response => response.json())
        .then(data => {
            const sortValue = document.getElementById('Sort').value;
            data.sort((a, b) => {
                if (sortValue === 'title') {
                    return a.Title.localeCompare(b.Title);
                } else {
                    return a.Department.localeCompare(b.Department);
                }
            });
            populateArticles(data);
        });
}

function searchData(searchText) {
    if (!searchText) {
        fetch('college_courses.json')
            .then(response => response.json())
            .then(data => {
                populateArticles(data);
            });
        return;
    }

    fetch('college_courses.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(course =>
                course.Title.toLowerCase().includes(searchText.toLowerCase()) ||
                course['Course ID'].toLowerCase().includes(searchText.toLowerCase()) ||
                course.Instructor.toLowerCase().includes(searchText.toLowerCase()) ||
                course.Department.toLowerCase().includes(searchText.toLowerCase()) ||
                course.Description.toLowerCase().includes(searchText.toLowerCase())
            );
            populateArticles(filteredData);
        });
}
