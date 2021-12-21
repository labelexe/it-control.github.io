
Vue.use(VueAwesomeSwiper);

new Vue({
    el: '#portfolioslider',
    data: {
        swiperOptions: {
            loop: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            spaceBetween: 30,
            slidesPerView: 3,
            //количество слайдов по группах (3шт)
            slidesPerGroup: 3,
            autoHeight: true,
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
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<div>' +
                        '<span style="color: #FE0000;font-size: 34px;line-height: 39px;" class="' + currentClass + '"></span>' +
                        ' / ' +
                        '<span class="' + totalClass + '"></span>' +
                        '</div>';
                }
                // renderBullet: function (index, className) {
                //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                // },
            },

            paginationClickable: false,

            navigation: {
                nextEl: '.nav_slide_next',
                prevEl: '.nav_slide_prev'
            },
            history: {
                replaceState: true,
            },
            grid: {
                rows: 2,
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
