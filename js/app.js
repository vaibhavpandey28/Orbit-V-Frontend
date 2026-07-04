document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-code-btn, .card-actions .action-icon-btn:last-child").forEach((button) => {
        button.addEventListener("click", async () => {
            const code = document.querySelector(".code-content")?.innerText.trim();

            if (!code || !navigator.clipboard) {
                return;
            }

            await navigator.clipboard.writeText(code);
            button.dataset.copied = "true";
            setTimeout(() => {
                delete button.dataset.copied;
            }, 1200);
        });
    });

    document.querySelectorAll(".history-item").forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".history-item").forEach((entry) => entry.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
