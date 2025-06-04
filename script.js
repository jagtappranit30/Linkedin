
document.addEventListener('DOMContentLoaded', function() {
    // Show more functionality for About section
    const showMoreBtn = document.querySelector('.show-more');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const aboutText = document.querySelector('.about-section p');
            if (aboutText) {
                aboutText.style.maxHeight = aboutText.style.maxHeight ? null : 'none';
                this.textContent = this.textContent === 'Show more' ? 'Show less' : 'Show more';
            }
        });
    }

    // Button interactions
    const connectBtn = document.querySelector('.btn-primary');
    const messageBtn = document.querySelectorAll('.btn-secondary')[0];
    
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            if (this.textContent === 'Connect') {
                this.textContent = 'Pending';
                this.style.backgroundColor = '#666';
                this.style.borderColor = '#666';
                this.disabled = true;
            }
        });
    }

    if (messageBtn) {
        messageBtn.addEventListener('click', function() {
            alert('Message functionality would open here');
        });
    }

    // Navigation hover effects
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#00000008';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Skill endorsement interactions
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skill => {
        skill.addEventListener('click', function() {
            const endorsements = this.querySelector('.endorsements');
            const currentCount = parseInt(endorsements.textContent.match(/\d+/)[0]);
            endorsements.textContent = `${currentCount + 1} endorsements`;
            
            // Add a temporary highlight effect
            this.style.backgroundColor = '#378fe91a';
            setTimeout(() => {
                this.style.backgroundColor = 'transparent';
            }, 1000);
        });
    });

    // Search bar functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.style.backgroundColor = '#ffffff';
            this.style.boxShadow = '0 0 0 2px #0a66c2';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.backgroundColor = '#eef3f8';
            this.style.boxShadow = 'none';
        });
    }
});
