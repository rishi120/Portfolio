$(window).load(function() {
    /* gsap functionality */
    // setTimeout(() => {
    //     var bg = gsap.timeline();
    //     bg.to(".bg", {
    //         duration: 1,
    //         translateY: "-100vh",
    //         opacity: 1
    //     })

    // }, 2000);
    // var listItems = gsap.timeline();
    // listItems.from("ul li", 1, { translateY: -100, stagger: .1 }, .2)
    //     .to("ul li", 1, { opacity: 1 }, .2)
    var tl = gsap.timeline();
    tl.to('ul.transition li', {
        duration: 0.5,
        scaleY: 1,
        transformOrigin: 'bottom left',
        stagger: 0.2,
    });
    tl.to('ul.transition li', {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: 'bottom left',
        stagger: 0.1,
        delay: 0.1,
    });
});


$(document).ready(function() {
    /* sal js config */
    setTimeout(() => {
        sal({
            threshold: 0.1,
            once: true,
        });

    }, 3500);
    /* show canvas element after 2 seconds */
    setTimeout(() => {
        $('canvas').css('opacity', '1');

    }, 3500);

    /* skill bar config */
    var detectWindow = $(window).width();
    if (detectWindow > 767) {
        $('.tech').mouseover(function() {
            $('.skillbar').skillbar({
                speed: 1500
            });

        });

    } else {
        $('.skillbar').skillbar({
            speed: 1500
        });

    }

    /* loadmore config */
    $('.some-list').simpleLoadMore({
        count: 8,
        item: 'div',
        btnHTML: '<a href="#" class="load-more__btn">Load More <i class="fas fa-angle-down"></i></a>'
    });
    /* contact form validation */

    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var check = false;
            return this.optional(element) || regexp.test(value);
        }
    );

    $("#contact-form").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: {
                required: true,
                regex: /^[a-zA-Z\s]*$/,

            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true,
                regex: /^([\w-.]+@(gmail|yahoo|hotmail|pacewisdom|rediffmail)(\.+)?[a-zA-Z])\/?/,
            },
            message: "required",
        },
        // Specify validation error messages
        messages: {
            name: {
                required: "Please enter your Name",
                regex: "Please enter a valid Name ",
            },
            email: {
                required: "Please enter your email",
                regex: "Please enter a Valid Email",
            },
            message: "Please enter your message",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
    /* toggle switch functionality */
    $("input[name='checkbox']").click(function() {

        if ($(this).is(":checked")) {
            localStorage.setItem("check", $(this).val());
            $('body').addClass('add_bg');
            $('.toggle-color').addClass('white-black');
            $('.change-color').css('color', '#fff');
            $('.hide-logo').css('display', 'none');
            $('.show-logo').css('display', 'block');
            $('.pad-top').css('visibility', 'hidden');
            $('.profile-pic').css('filter', 'grayscale(100%)');
            $('.fix-title').css('background-color', '#080f1e');
            $('.toggle-color').css('color', '#fff');
            $('.toggle-title-color').css('color', '#932a33');
        } else {
            localStorage.removeItem("check");
            $('body').removeClass('add_bg');
            $('.toggle-color').removeClass('white-black');
            $('.change-color').css('color', '#ad3133');
            $('.pad-top').css('visibility', 'visible');
            $('.hide-logo').css('display', 'block');
            $('.show-logo').css('display', 'none');
            $('.profile-pic').css('filter', 'saturate(100%)');
            $('.fix-title').css('background-color', '#fff');
            $('.toggle-color').css('color', '#000');
            $('.toggle-title-color').css('color', '#932a33');
        }

    });
    var data = localStorage.getItem("check");

    if (data !== null) {
        $("input[name='checkbox']").attr("checked", "checked");
        $('body').addClass('add_bg');
        $('.toggle-color').addClass('white-black');
        $('.change-color').css('color', '#fff');
        $('.pad-top').css('visibility', 'hidden');
        $('.profile-pic').css('filter', 'grayscale(100%)');
        $('.fix-title').css('background-color', '#080f1e');
        $('.toggle-color').css('color', '#fff');
        $('.toggle-title-color').css('color', '#932a33');
    }
    /* onscroll fix toggle switch functionality */
    $(document).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.toggle-switch').addClass('onscroll-fix');
            $('.fix-title').fadeIn(300);
            $('.fix-title').addClass('onscroll-fix-title');
        } else {
            $('.toggle-switch').removeClass('onscroll-fix');
            $('.fix-title').css('display', 'none');
            $('.fix-title').removeClass('onscroll-fix-title');

        }

    });
    $('.scroll-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1400);

    });
    /* Partical Js */

    particlesJS(
        'particles-js',

        {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 1500,
                    },
                },
                color: {
                    value: '#932a33',
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#932a33',
                    },
                    polygon: {
                        nb_sides: 3,
                    },
                    image: {
                        src: 'img/github.svg',
                        width: 100,
                        height: 100,
                    },
                },
                opacity: {
                    value: 0.7,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 250,
                    color: '#a9a9a9',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: true,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab',
                    },
                    onclick: {
                        enable: true,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 20,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        }
    );
});