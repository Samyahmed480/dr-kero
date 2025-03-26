document.addEventListener('DOMContentLoaded', () => {
    // التعامل مع القوائم المنسدلة
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = btn.parentElement;
            const content = dropdown.querySelector('.dropdown-content');

            // إغلاق جميع القوائم المنسدلة الأخرى
            document.querySelectorAll('.dropdown-content').forEach(dc => {
                if (dc !== content) {
                    dc.classList.remove('show');
                }
            });

            // تبديل حالة القائمة الحالية
            content.classList.toggle('show');
        });
    });

    // إغلاق القوائم عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });

    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeBtn = document.querySelector('.close-modal');
    const lessons = document.querySelectorAll('.lesson');

    function getGoogleDriveDirectLink(url) {
        const fileId = url.match(/[-\w]{25,}/);
        if (fileId) {
            return `https://drive.google.com/uc?export=download&id=${fileId[0]}`;
        }
        return url;
    }

    function getGoogleDriveEmbedLink(url) {
        const fileId = url.match(/[-\w]{25,}/);
        if (fileId) {
            return `https://drive.google.com/file/d/${fileId[0]}/preview`;
        }
        return url;
    }

    function getVideoSource(url) {
        // التحقق مما إذا كان المسار محليًا
        if (url.includes(':/')) {
            return url.replace(/\\/g, '/'); // تحويل مسار Windows إلى تنسيق URL
        }
        // إذا كان رابط Drive
        return getGoogleDriveDirectLink(url);
    }

    lessons.forEach(lesson => {
        lesson.addEventListener('click', (e) => {
            e.preventDefault();
            const videoSrc = lesson.getAttribute('data-video');
            const embedLink = getGoogleDriveEmbedLink(videoSrc);

            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.src = embedLink;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    });
});
