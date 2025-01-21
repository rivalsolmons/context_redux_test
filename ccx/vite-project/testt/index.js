document.addEventListener("DOMContentLoaded", () => {
  // Select the input field
  const searchInput = document.getElementById("searchInput");
  const navLinks = document.querySelectorAll("nav ul li a"); // All navigation links

  // Add an event listener for the input event
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    // Remove existing highlights
    document.querySelectorAll(".highlight").forEach((element) => {
      element.classList.remove("highlight");
    });

    if (query) {
      let found = false;

      // Loop through all navigation links to find the matching section
      navLinks.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1); // Get ID without #
        const section = document.getElementById(sectionId);

        if (section && section.textContent.toLowerCase().includes(query)) {
          found = true;

          // Scroll to the first matching section
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Add the highlight class to the matching section
          section.classList.add("highlight");
        }
      });

      
    }
  });
});
