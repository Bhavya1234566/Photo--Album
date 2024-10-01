
        let currentPage = 1; // start from page 1
        const totalPages = 3; // total pages

        // Event listener for the next button
        document.getElementById("next-button").addEventListener("click", function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePage();
            }
        });

        // Event listener for the previous button
        document.getElementById("prev-button").addEventListener("click", function() {
            if (currentPage > 1) {
                currentPage--;
                updatePage();
            }
        });

        // Function to update the image source and page number
        function updatePage() {
            document.getElementById("current-image").src = `image${currentPage}.jpg`; // Update image source
            document.getElementById("page-number").textContent = `Page ${currentPage}`; // Update page number
        }
   
