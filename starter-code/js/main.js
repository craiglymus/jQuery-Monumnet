// $(document).ready(function() {
// 	console.log('sanity check');
// })

$('.contact').on('submit', function(event) {
        event.preventDefault();
        var stop = $('.contact > input').val();
        console.log(stop);

        console.log('Default prevented')
    });