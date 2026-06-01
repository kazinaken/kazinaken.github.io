
let currentTheme = localStorage.getItem('theme') || 'light';


function initTheme() {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeBtn = document.getElementById('themeBtn');
        if (themeBtn) themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', currentTheme);
    
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.innerHTML = currentTheme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    }
}

// ========== МОБИЛЬНОЕ МЕНЮ ==========
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
}

// ========== АКТИВНАЯ ССЫЛКА В МЕНЮ ==========
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.sidebar nav a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


// ========== ИНИЦИАЛИЗАЦИЯ СТРАНИЦ ==========
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    setActiveLink();
    
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Определяем текущую страницу и инициализируем соответствующие функции
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'users.html') {
        renderUsersTable();
        
        const userForm = document.getElementById('userForm');
        if (userForm) userForm.addEventListener('submit', addUser);
    }
    
    if (currentPage === 'products.html') {
        renderProductsGrid();
        
        const productForm = document.getElementById('productForm');
        if (productForm) productForm.addEventListener('submit', addProduct);
    }
    
    if (currentPage === 'orders.html') {
        renderOrdersTable();
    }
    
    if (currentPage === 'profile.html') {
        loadProfile();
        
        const profileForm = document.getElementById('profileForm');
        if (profileForm) profileForm.addEventListener('submit', updateProfile);
    }
});document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    
    if (login === 'admin' && password === 'admin') {
        window.location.href = 'glav.html';
    } else {
        alert('Неверный логин или пароль!');
    }
});