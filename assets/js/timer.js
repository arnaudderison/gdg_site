(() => {
    const target = new Date(new Date().getFullYear(), 10, 12, 0, 0, 0);

    function updateTimer() {
        const timer = document.getElementById("timer");
        const now = new Date().getTime();
        const distance = target - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (distance < 0) {
            clearInterval(interval);
            timer.textContent = "Le temps est écoulé !";
        }
    }

    const interval = setInterval(updateTimer, 1000);
})();