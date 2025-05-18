function showProfile() {
    const btn = document.querySelector('.btn');
    const profile = document.getElementById('profile');
    
    
    btn.style.opacity = '0';
    btn.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        btn.style.display = 'none';
        profile.style.display = 'block';
        
        
        setTimeout(() => {
            profile.classList.add('show');
            
            
            const elements = profile.querySelectorAll('.cover, .avatar, h2, .tagline, .social');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200 * (index + 1));
            });
            
            
            document.querySelectorAll('.particle').forEach(particle => {
                particle.style.opacity = '0.6';
            });
        }, 100);
    }, 300);
}

function playAudio() {
    const audio = document.getElementById('bg-music');
    audio.volume = 0.3;
    
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay prevented. Showing play button.");
            
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const profile = document.getElementById('profile');
    const elements = profile.querySelectorAll('.cover, .avatar, h2, .tagline, .social');
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});