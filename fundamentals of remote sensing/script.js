// ==========================================================================
// INTERACTIVE TAB LOGIC FOR REMOTE SENSING PORTFOLIO
// ==========================================================================

// 1. Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Tab Navigation Switcher
const navLinks = document.querySelectorAll(".nav-link");
const tabPanes = document.querySelectorAll(".tab-pane");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Stop default anchor jump

        // Remove active class from all links and panes
        navLinks.forEach(item => item.classList.remove("active"));
        tabPanes.forEach(pane => pane.classList.remove("active"));

        // Add active class to clicked link
        link.classList.add("active");

        // Show corresponding tab pane content
        const targetTabId = link.getAttribute("data-tab");
        const targetPane = document.getElementById(targetTabId);
        if (targetPane) {
            targetPane.classList.add("active");
        }
    });
});