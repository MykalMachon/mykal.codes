import fs from 'fs';
import path from 'path';

// Path to the directory containing Markdown files
const directoryPath = './src/content/posts/';

// Function to update pubDate formatting in frontmatter
function updatePubDate(filePath) {
  // Read the file contents
  let content = fs.readFileSync(filePath, 'utf8');

  // Use regex to match pubDate with quoted dates, with or without timestamps
  const pubDateRegex = /(^|\n)pubDate:\s*["'](\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}Z)?["']/;

  // Replace quoted dates with only the date part and remove quotes
  const updatedContent = content.replace(pubDateRegex, '$1pubDate: $2');

  // Write changes back if the content was updated
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated pubDate format in ${filePath}`);
  }
}

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }

  // Filter for Markdown files and process each
  files
    .filter(file => path.extname(file) === '.md')
    .forEach(file => {
      const filePath = path.join(directoryPath, file);
      updatePubDate(filePath);
    });
});
