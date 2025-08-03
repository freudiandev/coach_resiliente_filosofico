// ===== MODAL FUNCTIONALITY - GALERÍA FILOSÓFICA =====

// Open modal
function openModal(itemId) {
    const modal = document.getElementById('galleryModal');
    const content = document.getElementById('modalContent');
    
    // Get content for this item
    content.innerHTML = getModalContent(itemId);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
