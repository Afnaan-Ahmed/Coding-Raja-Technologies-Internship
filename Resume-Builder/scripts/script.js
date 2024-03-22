document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    
    // Generate resume HTML
    const resumeHTML = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Education</h3>
      <p>${education}</p>
    `;
    
    
    // Display preview
    document.getElementById('preview').innerHTML = resumeHTML;
  });
  
  document.getElementById('downloadPDF').addEventListener('click', function() {
    const previewElement = document.getElementById('preview');
    const resumeHTML = previewElement.innerHTML;
  
    // Convert HTML to PDF
    html2pdf().from(resumeHTML).save();
  });
  