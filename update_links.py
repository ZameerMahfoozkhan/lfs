import os
import re

directory = r"C:/Users/zamee/.gemini/antigravity/playground/harmonic-astro/"

replacements = [
    ('href="about.html#society"', 'href="society.html"'),
    ('href="about.html#province"', 'href="province.html"'),
    ('href="about.html#founders"', 'href="cst-fathers.html"'),
    ('href="management.html#committee"', 'href="managing-committee.html"'),
    ('href="contact.html">Grievance/Redressal</a>', 'href="grievance.html">Grievance/Redressal</a>'),
    ('href="campus.html#labs"', 'href="science-labs.html"'),
    ('href="campus.html#computer"', 'href="computer-labs.html"'),
    ('href="campus.html#library"', 'href="library.html"'),
    ('href="campus.html#transport"', 'href="transport.html"'),
    ('href="campus.html#sports"', 'href="sports.html"'),
    ('href="admissions.html#prospectus"', 'href="prospectus.html"'),
    ('href="admissions.html#fees"', 'href="fees.html"'),
    ('href="admissions.html#eligibility"', 'href="eligibility.html"'),
]

files_updated = 0

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content
        for search, replace in replacements:
            new_content = new_content.replace(search, replace)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
            files_updated += 1

print(f"Total files updated: {files_updated}")
