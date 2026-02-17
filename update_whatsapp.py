import os

directory = r"C:/Users/zamee/.gemini/antigravity/playground/harmonic-astro/"

replacements = [
    ('+91-XXXXXXXXXX', '+91-9580659559'),
    ('wa.me/XXXXXXXXXX', 'wa.me/9580659559')
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
