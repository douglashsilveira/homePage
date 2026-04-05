const shortcutsGrid = document.getElementById('shortcutsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const editModal = document.getElementById('editModal');
const shortcutTitleInput = document.getElementById('shortcutTitle');
const shortcutUrlInput = document.getElementById('shortcutUrl');
const saveShortcutBtn = document.getElementById('saveShortcut');
const closeModalBtn = document.getElementById('closeModal');

let shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || Array(15).fill(null);
let activeEditIndex = null;

// Renderiza a grade de 15 atalhos
function renderShortcuts() {
    shortcutsGrid.innerHTML = '';
    shortcuts.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'shortcut-item';
        
        if (item) {
            div.innerHTML = `
                <a href="${item.url}" target="_blank" class="shortcut-link">
                    <i class="ph ph-globe shortcut-icon"></i>
                    <span class="shortcut-name">${item.title}</span>
                </a>
                <button class="edit-btn" onclick="openEditModal(event, ${index})">
                    <i class="ph ph-pencil-simple"></i>
                </button>
            `;
            div.onclick = () => window.open(item.url, '_blank');
        } else {
            div.innerHTML = `
                <i class="ph ph-plus-circle shortcut-icon" style="opacity: 0.3"></i>
                <span class="shortcut-name">Adicionar</span>
                <button class="edit-btn" onclick="openEditModal(event, ${index})">
                    <i class="ph ph-plus"></i>
                </button>
            `;
            div.onclick = (e) => openEditModal(e, index);
        }
        shortcutsGrid.appendChild(div);
    });
}

// Abre modal de edição
window.openEditModal = (event, index) => {
    event.stopPropagation();
    activeEditIndex = index;
    const current = shortcuts[index];
    shortcutTitleInput.value = current ? current.title : '';
    shortcutUrlInput.value = current ? current.url : '';
    editModal.style.display = 'flex';
};

// Salva o atalho
saveShortcutBtn.onclick = () => {
    const title = shortcutTitleInput.value.trim();
    let url = shortcutUrlInput.value.trim();

    if (title && url) {
        if (!url.startsWith('http')) url = 'https://' + url;
        shortcuts[activeEditIndex] = { title, url };
        localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
        editModal.style.display = 'none';
        renderShortcuts();
    }
};

// Fecha modal
closeModalBtn.onclick = () => editModal.style.display = 'none';

// Busca no Google
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_self');
    }
}

searchBtn.onclick = performSearch;
searchInput.onkeypress = (e) => { if (e.key === 'Enter') performSearch(); };

// Inicia
renderShortcuts();
