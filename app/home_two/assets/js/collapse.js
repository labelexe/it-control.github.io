$(".faq_cat")
    .on("hide.bs.collapse show.bs.collapse", e => {
        // $(e.target)
        //     .prev()
        //     .find("i:last-child")
        //     .toggleClass("fa-minus fa-plus");
        // let result_minus = $(e.target)
        //     .prev()
        //     .find('.icon .minus').first()
        //     .css({ "display": 'block' });
        // .css({ "display": 'block' });


        if (
            $(e.target)
                .prev()
                .find('.icon .minus').first().css('display') == "block" || $(e.target)
                    .prev()
                    .find('.icon .plus').first()
                    .css('display') == 'none') {
            let result_minus = $(e.target)
                .prev()
                .find('.icon .minus').first()
                .css({ "display": 'none' });

            // hide plus
            let result_plus = $(e.target)
                .prev()
                .find('.icon .plus').first()
                .css({ "display": 'block' });
            // .css({ "display": 'none' });

            console.log(result_minus, result_plus)
        } else {
            let result_minus = $(e.target)
                .prev()
                .find('.icon .minus').first()
                .css({ "display": 'block' });

            // hide plus
            let result_plus = $(e.target)
                .prev()
                .find('.icon .plus').first()
                .css({ "display": 'none' });

            console.log(result_minus, result_plus)
        }




    });