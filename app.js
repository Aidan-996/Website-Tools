// ========== Page Switching ==========
function switchPage(page, el) {
    // Update nav
    document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
    if (el) el.classList.add('active');

    // Switch pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageMap = { about: 'pageAbout', tools: 'pageTools', ai: 'pageAi' };
    document.getElementById(pageMap[page] || 'pageAbout').classList.add('active');

    // Toggle category sidebar
    const catSection = document.getElementById('sidebarCategories');
    catSection.style.display = page === 'tools' ? 'block' : 'none';

    // Close mobile sidebar
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('open');

    // Scroll to top
    window.scrollTo(0, 0);
}

// ========== Theme Toggle ==========
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        icon.className = 'fas fa-moon';
        text.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        icon.className = 'fas fa-sun';
        text.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}
(function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('themeIcon').className = 'fas fa-sun';
        document.getElementById('themeText').textContent = 'Dark Mode';
    }
})();

// ========== Mobile Sidebar ==========
function toggleMobileSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.sidebar-overlay').classList.toggle('open');
}

// ========== Category Filter ==========
function filterCategory(cat, el) {
    document.querySelectorAll('.nav-cat').forEach(n => n.classList.remove('active'));
    if (el) el.classList.add('active');
    currentCategory = cat;
    renderTools();
}

// ========== Tools App ==========
let currentCategory = 'all';
let currentSort = 'category';
let searchQuery = '';

(function() {
    'use strict';

    const container = document.getElementById('toolsContainer');
    const searchInput = document.getElementById('searchInput');
    const toolCountEl = document.getElementById('toolCount');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    function init() {
        toolCountEl.textContent = TOOLS.length;
        document.getElementById('countAll').textContent = TOOLS.length;
        buildSidebarCategories();
        renderTools();
        bindEvents();
    }

    // Build sidebar category nav
    function buildSidebarCategories() {
        const catContainer = document.getElementById('sidebarCategories');
        const categories = [...new Set(TOOLS.map(t => t.category))];

        // Category icon map
        const iconMap = {
            '文本工具': 'fa-font',
            '编码/解码': 'fa-exchange-alt',
            '加密/哈希': 'fa-lock',
            '格式化': 'fa-code',
            '转换工具': 'fa-sync-alt',
            '生成工具': 'fa-magic',
            '图片工具': 'fa-image',
            '开发工具': 'fa-terminal',
            '日常工具': 'fa-calendar-check',
            '网络/运维': 'fa-network-wired',
            '安全工具': 'fa-shield-alt',
            '数学/计算': 'fa-calculator',
        };

        categories.forEach(cat => {
            const count = TOOLS.filter(t => t.category === cat).length;
            const icon = iconMap[cat] || 'fa-folder';
            const a = document.createElement('a');
            a.className = 'nav-cat';
            a.dataset.category = cat;
            a.innerHTML = `<i class="fas ${icon}"></i> ${cat} <span class="nav-count">${count}</span>`;
            a.onclick = function() { filterCategory(cat, this); };
            catContainer.appendChild(a);
        });
    }

    // Render tools
    window.renderTools = function() {
        let tools = [...TOOLS];

        if (currentCategory !== 'all') {
            tools = tools.filter(t => t.category === currentCategory);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            tools = tools.filter(t =>
                t.name.toLowerCase().includes(q) ||
                t.desc.toLowerCase().includes(q) ||
                t.category.toLowerCase().includes(q)
            );
        }

        if (currentSort === 'name') {
            tools.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
        }

        toolCountEl.textContent = tools.length;

        if (currentSort === 'category') {
            const groups = {};
            tools.forEach(t => {
                if (!groups[t.category]) groups[t.category] = [];
                groups[t.category].push(t);
            });
            container.innerHTML = '';
            Object.entries(groups).forEach(([cat, catTools]) => {
                const section = document.createElement('div');
                section.className = 'category-section';
                section.innerHTML = `<h2 class="category-title">${cat}</h2>`;
                const grid = document.createElement('div');
                grid.className = 'tools-grid';
                catTools.forEach(t => grid.appendChild(createToolCard(t)));
                section.appendChild(grid);
                container.appendChild(section);
            });
        } else {
            container.innerHTML = '';
            if (tools.length === 0) {
                container.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>没有找到匹配的工具</p></div>';
                return;
            }
            const grid = document.createElement('div');
            grid.className = 'tools-grid';
            tools.forEach(t => grid.appendChild(createToolCard(t)));
            container.appendChild(grid);
        }
    };

    function createToolCard(tool) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <span class="tool-icon">${tool.icon}</span>
            <span class="tool-name">${tool.name}</span>
            <span class="tool-desc">${tool.desc}</span>
        `;
        card.addEventListener('click', () => openTool(tool));
        return card;
    }

    function openTool(tool) {
        modalTitle.textContent = `${tool.icon} ${tool.name}`;
        modalBody.innerHTML = tool.render();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        postRenderHooks(tool.id);
    }

    function postRenderHooks(toolId) {
        if (toolId === 'ts-convert') {
            const updateTime = () => {
                const now = Math.floor(Date.now() / 1000);
                const el1 = document.getElementById('t_ts_now');
                const el2 = document.getElementById('t_ts_now_date');
                if (el1) el1.textContent = now;
                if (el2) el2.textContent = new Date().toLocaleString();
            };
            updateTime();
            const timer = setInterval(updateTime, 1000);
            modalOverlay.dataset.timer = timer;
        }
        if (toolId === 'unit-convert') ucTypeChange();
        if (toolId === 'markdown-preview') setTimeout(mdPreview, 100);
        if (toolId === 'world-clock') {
            const updateClocks = () => {
                document.querySelectorAll('.wc-time').forEach(el => {
                    const tz = el.dataset.tz;
                    el.textContent = new Date().toLocaleString('zh-CN', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) +
                        ' ' + new Date().toLocaleDateString('zh-CN', { timeZone: tz, weekday: 'short' });
                });
            };
            updateClocks();
            const timer = setInterval(updateClocks, 1000);
            modalOverlay.dataset.timer2 = timer;
        }
        if (toolId === 'border-radius') brUpdate();
        if (toolId === 'gradient-gen') ggUpdate();
        if (toolId === 'shadow-gen') sgUpdate();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (modalOverlay.dataset.timer) { clearInterval(parseInt(modalOverlay.dataset.timer)); delete modalOverlay.dataset.timer; }
        if (modalOverlay.dataset.timer2) { clearInterval(parseInt(modalOverlay.dataset.timer2)); delete modalOverlay.dataset.timer2; }
        if (typeof cdTimer !== 'undefined' && cdTimer) { clearInterval(cdTimer); cdTimer = null; }
        if (typeof swTimer !== 'undefined' && swTimer) { clearInterval(swTimer); swTimer = null; swElapsed = 0; swLaps = []; }
    }

    function bindEvents() {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderTools();
        });

        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSort = btn.dataset.sort;
                renderTools();
            });
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    init();
})();

// ========== Back to Top ==========
(function() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
})();

// ========== Particle Background ==========
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    let mouse = { x: null, y: null };
    const COUNT = 70;
    const MAX_DIST = 150;

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.r = Math.random() * 1.5 + 0.5;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx *= -1;
            if (this.y < 0 || this.y > h) this.vy *= -1;
            if (mouse.x !== null) {
                const dx = this.x - mouse.x, dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) { this.x += dx * 0.008; this.y += dy * 0.008; }
            }
        }
        draw() {
            const cs = getComputedStyle(document.documentElement);
            const r = cs.getPropertyValue('--particle-r').trim();
            const g = cs.getPropertyValue('--particle-g').trim();
            const b = cs.getPropertyValue('--particle-b').trim();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
            ctx.fill();
        }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, w, h);
        const cs = getComputedStyle(document.documentElement);
        const r = cs.getPropertyValue('--particle-r').trim();
        const g = cs.getPropertyValue('--particle-g').trim();
        const b = cs.getPropertyValue('--particle-b').trim();

        particles.forEach(p => { p.update(); p.draw(); });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.12 * (1 - dist / MAX_DIST)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
            // Mouse lines
            if (mouse.x !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.18 * (1 - dist / 180)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
    animate();
})();
