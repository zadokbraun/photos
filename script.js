function thumb(s) {
    document.getElementById('main').src = s;
}
const images = document.querySelectorAll('#sidebar img');
images.forEach(img => {
    img.addEventListener('click', function() {
        thumb(this.src);
    });
});

var foo = ["foo", "bar", "baz"];

console.log(foo);