// Disable contextmenu for images
// make it more difficult to save images by just rightclicking the img
$body.on("contextmenu", "img", function(e) {
    return false;
});