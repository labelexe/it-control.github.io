
Vue.use(VueAwesomeSwiper);

new Vue({
    el: '#rublic_slider',
    data: {
        swiperOptions: {
            loop: true,
            grabCursor: true,
            // initalSlide: 1,
            //
            spaceBetween: 30,
            // slidesPerView: 3,
            slidesPerView: 3,
            // slidesPerView: 'auto',

            // watchOverflow: true,

            autoHeight: true,

            //количество слайдов пролистываемых по группах (3шт)
            slidesPerGroup: 3,

            // paginationClickable: false,

            navigation: {
                nextEl: '.nav_slide_next',
                prevEl: '.nav_slide_prev'
            },


            pagination: {
                el: '.nav_paginate_number',
                // dynamicBullets: true,
                // type: 'fraction',
                type: 'custom',
                renderCustom: function (swiper, current, total) {

                    const total_check = () => {
                        if ((total - 1) > 10) {
                            return (total - 1)
                        }
                        else if ((total - 1) == 0) {
                            return 0;
                        } else {
                            return '0' + (total - 1);
                        }
                    }


                    return '<div>' +
                        '<span style="color: #FE0000;font-size: 34px;line-height: 39px;">' + current + '</span>' + '/' + '<span>' + total_check() + '</span>' + '</div>';
                }
            },
            history: {
                replaceState: true,
            },

        }
    },
    methods: {
        onSetTranslate() {
            console.log('onSetTranslate');
        },
        onSwiperSlideChangeTransitionStart() {
            console.log('onSwiperSlideChangeTransitionStart');
        },
        onSwiperClickSlide(index, reallyIndex) {
            console.log('Swiper click slide!', reallyIndex);
        }
    },
    mounted() {
        console.log('Swiper instances:', this.$refs.swiperComponent.$swiper, this.swiper)
    }
})
