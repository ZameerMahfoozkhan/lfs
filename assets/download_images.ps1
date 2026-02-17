$baseUrl = "https://lfsfaizabad.in"
$images = @(
    "/images/logo.gif",
    "/images/header0.jpg",
    "/images/footer.jpg",
    "/images/main1.jpg",
    "/images/main2.jpg",
    "/images/main3.jpg",
    "/images/main4.jpg",
    "/images/manager.jpg",
    "/images/principal.jpg",
    "/archives/campus1.jpg",
    "/archives/campus2.jpg",
    "/images/notice2.gif",
    "/archives/phy1.jpg",
    "/archives/phy2.jpg",
    "/archives/che1.jpg",
    "/archives/che2.jpg",
    "/archives/bio1.jpg",
    "/archives/bio2.jpg",
    "/archives/cts1.jpg",
    "/archives/cst2.jpg",
    "/archives/library1.jpg",
    "/archives/library.jpg",
    "/archives/sports1.jpg",
    "/archives/sports.jpg"
)

New-Item -ItemType Directory -Force -Path "assets/images"

foreach ($img in $images) {
    $url = $baseUrl + $img
    $filename = Split-Path $img -Leaf
    $output = "assets/images/" + $filename
    Write-Host "Downloading $url to $output..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UserAgent "Mozilla/5.0"
    } catch {
        Write-Host "Failed to download $url"
    }
}
