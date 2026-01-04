    
       const projects = [
            {
                title: "RESTful Microservices",
                description: "Ölçeklenebilir mikroservis mimarisi ile geliştirilmiş RESTful API projesi. Spring Boot ve Docker kullanılarak containerize edilmiştir.",
                tags: ["Java", "Spring Boot", "Docker", "REST API"],
                repo: "https://github.com/Asli-Codes/RESTful_MS"
            },
            {
                title: "University Management System",
                description: "Üniversite yönetim sistemi için geliştirilmiş kapsamlı backend projesi. Öğrenci, ders ve not yönetimi modülleri içerir.",
                tags: ["Java", "Spring", "PostgreSQL", "JPA"],
                repo: "https://github.com/Asli-Codes/UniversityProject"
            },
            {
                title: "Library Management System",
                description: "Kütüphane otomasyon sistemi. Kitap ödünç alma, iade, üye yönetimi ve raporlama özellikleri sunar.",
                tags: ["Java", "MySQL", "JavaFX", "MVC"],
                repo: "https://github.com/Asli-Codes/libraryManagementSystem"
            },
            {
                title: "Recipe Recommendation App",
                description: "Streamlit ile geliştirilmiş yemek tarifi öneri uygulaması. Kullanıcı tercihlerine göre özelleştirilmiş öneriler sunar.",
                tags: ["Python", "Streamlit", "Pandas", "API"],
                repo: "https://github.com/Asli-Codes/streamlit_yemek_listesi"
            },
            {
                title: "MicroServices",
                description: "ASP.NET Core Web API ile Kandilli Rasathanesi’nin HTML formatındaki canlı deprem verilerini HttpClient ve HtmlAgilityPack kullanarak JSON çıktısına dönüştüren, Swagger UI üzerinden test edilebilen açık bir API projesi.",
                tags: ["C#" , "ASP.NET Core Web API", "HtmlAgilityPack", "HttpClient", "Swagger"],
                repo: "https://github.com/Asli-Codes/MicroServices"
            }
        ];

        // Render Projects
        function renderProjects() {
            const container = document.getElementById('projectsContainer');
            container.innerHTML = projects.map(project => `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.repo}" class="project-link" target="_blank">
                        <span>🔗</span> View Repository
                    </a>
                </div>
            `).join('');
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Initialize
        renderProjects();

        document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
