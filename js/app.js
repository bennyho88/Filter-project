const btns = document.querySelectorAll('.btn');
const inputSearch = document.querySelector('#search-item');
const items = document.querySelectorAll('.store-item');


btns.forEach(btn => {
    items.forEach(item => {
        // console.log(item);

        btn.addEventListener('click', function (event) {

            event.preventDefault();

            let dataItem = item.dataset.item;

            if(btn.dataset.filter === 'all') {

                item.style.display = 'block';

            }

            if (btn.dataset.filter === 'cakes') {


                if(dataItem === 'cakes') {
                    item.style.display = 'block';
               
                } else {
                    item.style.display = 'none';
                }
            }

            if (btn.dataset.filter === 'cupcakes') {
                console.log('cupcakes');

                if(dataItem === 'cupcakes') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }

            if (btn.dataset.filter === 'sweets') {
                console.log('sweets');

                if(dataItem === 'sweets') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }

            if (btn.dataset.filter === 'doughnuts') {
                console.log('doughnuts');

                if(dataItem === 'dougnuts') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        })

        inputSearch.addEventListener('keyup', function(event) {

            let value = event.target.value;
            let dataItem = item.dataset.item;
        
            if(value === 'cakes') {
                if(dataItem === 'cakes') {
                    item.style.display = 'block';
               
                } else {
                    item.style.display = 'none';
                }
            }

            if(value === 'cupcakes') {

                if(dataItem === 'cupcakes') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }

            }

            if(value === 'sweets') {
                if(dataItem === 'sweets') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }

            if(value === 'dougnuts') {
                if(dataItem === 'dougnuts') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        })
    })
})

