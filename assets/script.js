window.onload=function(){
    let activeVirusMode = false;

    // Hamburger Menu function
    hamburgerMenu();
    function hamburgerMenu() {
        var menuBtn = document.getElementById('menu-btn');
        var closeBtn = document.getElementById('close-menu-btn');
        var subMenu = document.getElementById('sub-menu');
        var subMenuContainer = document.getElementById('sub-menu-container');
        
        menuBtn.addEventListener('click', showMenu)
    
        closeBtn.addEventListener('click', closeMenu)
    
        subMenu.addEventListener('click', closeMenu)
    
        subMenuContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
    
        function showMenu() {
            subMenu.classList.add('show')
        }
        
        function closeMenu() {
            setTimeout(function(){
                subMenu.classList.remove('show')
            }, 200); 
        }
    };
    // -------------------

    // HomePage Parallax function
    homePageParallax();
    function homePageParallax() {
        var home_background = document.getElementById('home_background');
        var logo_long = document.getElementById('logo_long');
        var sun = document.getElementById('sun');
        var light = document.getElementById('light');
        var lake = document.getElementById('lake');
        var gate = document.getElementById('gate');
        var stars = document.getElementById('stars');
        var cloud = document.getElementById('cloud');
        var left_near_rock = document.getElementById('left_near_rock');
        var right_near_rock = document.getElementById('right_near_rock');
        var left_far_rock = document.getElementById('left_far_rock');
        var right_far_rock = document.getElementById('right_far_rock');
        var night_overlay = document.getElementById('night_overlay');
    
        var currentCloudWidth = cloud.clientWidth;
        var currentLakeWidth = lake.clientWidth;
        var currentGateWidth = gate.clientWidth;
        var currentLeftFarRockWidth = left_far_rock.clientWidth;
        var currentRightFarRockWidth = right_far_rock.clientWidth;
    
        var homeScrollLimit = 475;
    
    
        window.addEventListener('scroll', function() {
            var value_base = this.window.scrollY;
            if  (value_base < homeScrollLimit) {
                var value = value_base;
            } else {
                value = homeScrollLimit;
            }
    
            logo_long.style.opacity = 1 - value * 0.0065;
            home_background.style.top = value + 'px';
            sun.style.top = value * 0.25 + 'px';
            light.style.top = value * 0.25 + 'px';
            sun.style.opacity = 1 - value * 0.001;
            light.style.opacity = 1 - value * 0.0025;
            night_overlay.style.opacity = value * 0.0025;
            stars.style.top = value * 0.75 + 'px';
            stars.style.opacity = 0.1 + value * 0.0065;
            right_near_rock.style.left = value * 1.25 + 'px';
            left_near_rock.style.right = value * 1.25 + 'px';
            cloud.style.bottom = value * 0.15 + 'px';
            cloud.style.width = currentCloudWidth + value * 2.5 + 'px';
            lake.style.width = currentLakeWidth + value * 0.7 + 'px';
            gate.style.width = currentGateWidth + value * 0.7 + 'px';
            left_far_rock.style.width = currentLeftFarRockWidth + value * 0.7 + 'px';
            right_far_rock.style.width = currentRightFarRockWidth + value * 0.7 + 'px';
        });
    };
    // --------------------

    // Float Animation
    var value = window.scrollY;
    window.addEventListener('scroll', function() {
        var value_base = this.window.scrollY;

        var homeSec = document.querySelector('#home .home-sec-container');
        if (value_base > 350) {
            homeSec.style.display = 'flex';
        }

        var history = document.querySelector('#history .history-content');
        if (value_base > 1000) {
            history.style.display = 'block'
        }

        var jscTitle = this.document.querySelector('#jsc .jsc-title .jsc-title-transparent');
        if (value_base > 4800) {
            jscTitle.style.display = 'flex'
        }

        var jscDesc = this.document.querySelectorAll('#jsc .jsc-desc');
        var jscDesc_array = [...jscDesc];
        if (value_base > 5200) {
            jscDesc_array.forEach(desc => {
                desc.style.display = 'flex'
            });
        }
        
        var picturesLayer = document.querySelectorAll('#activities .pictureLayer');
        var picturesLayer_array = [...picturesLayer];
        if (value_base > 5800) {
            picturesLayer_array.forEach(pictureLayer => {
                pictureLayer.style.display = 'block'
            });
        }

        console.log(value_base);
    });
    // --------------------

    // Slider function
    slider();
    function slider() {
        const slider = document.querySelector('.slider');
        const sliderMain = document.querySelector('.slider-main');
        const sliderItems = document.querySelectorAll('.slider-item');
        const sliderPrevBtn = document.querySelector('.prevBtn');
        const sliderNextBtn = document.querySelector('.nextBtn');
        const dotItems = document.querySelectorAll('.slider-dot-item');
        
        const sliderLength = sliderItems.length;
        const sliderItemWidth = sliderItems[0].offsetWidth
        var posX = 0;
        var index = 1;
        
        
        sliderNextBtn.addEventListener('click', function() {
            handleChangeSlide(1);
        });

        sliderPrevBtn.addEventListener('click', function() {
            handleChangeSlide(-1)
        });

        [...dotItems].forEach((dotItem) =>
            dotItem.addEventListener('click', function(e) {
                [...dotItems].forEach(el => el.classList.remove('active'));
                e.target.classList.add('active');
                const slideIndex = parseInt(e.target.dataset.index);
                index = slideIndex;
                posX = -1 * (index - 1) * sliderItemWidth;
                sliderMain.style.transform = "translateX(" + posX + "px)";
            })
        );

        function handleChangeSlide(dir) {
            if(dir === 1) {
                index++;
                if (index > sliderLength) {
                    index = sliderLength;
                    return;
                };
                posX = posX - sliderItemWidth;
                sliderMain.style.transform = "translateX(" + posX + "px)";
            } else if (dir === -1) {
                index--;
                if (index < 1) {
                    index = 1;
                    return;
                };
                posX = posX + sliderItemWidth;
                sliderMain.style.transform = "translateX(" + posX + "px)";
            }

            [...dotItems].forEach(el => el.classList.remove('active'));
            dotItems[index-1].classList.add('active');
        }
    };
    
    // --------------------
    
    // Bottom scroll
    var interviewMarginBottom = document.getElementById('interview')
    window.addEventListener('scroll', function() {
        if (!activeVirusMode) {
            const scrollAble = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            var virusIsAppear = false;
            
            if ((Math.ceil(scrolled)) === scrollAble && virusIsAppear == false) {
                activeVirusMode = true;
                virusIsAppear = true;
                
                window.scrollTo(0, 0);
                virusAppear();
                hideText();
                changeHomePage();
                showFooter ();
            };
        }
    });
    // --------------------
    
    // Show Footer Function
    function showFooter () {
        var footer = document.querySelector('footer');
        footer.style.display = 'flex';
    }
    // --------------------

    // Virus Appear Function
    function virusAppear () {
        
        var body = document.body,
        html = document.documentElement;
        
        var webHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        
        var bugs = document.querySelectorAll('#virus #bugs .bug');
        var bugs_array = [...bugs];
            
        bugs_array.forEach(bug => {
            bug.style.display = 'block'
            bug.style.left = Math.floor(window.innerWidth / 2) + "px";
            bug.style.top = Math.round(window.innerHeight / 2) + "px";
            var style = window.getComputedStyle(bug);
                
            bug.style.transform = "rotate(" + 0 + "deg)"
            var spx = Math.floor(Math.random() * 10);
            var spy = Math.floor(Math.random() * 10);
            var rotateOffset = 1;
                
            function move(){
                var rotate = parseInt(bug.style.transform.replace(/[^\d]+/g, ""));
                var x = parseInt(bug.style.left.replace("px", ""));
                var y = parseInt(bug.style.top.replace("px", ""));
                
                if (x + parseInt(style.width.replace("px", "")) > window.innerWidth){
                    spx = -spx;
                }
                if (y + parseInt(style.height.replace("px", "")) > webHeight){
                    spy = -spy;
                }
                if (x < 0){
                    spx = -spx;
                }
                if (y < 0){
                    spy = -spy;
                }
                x += spx;
                y -= spy;
                rotate += rotateOffset;
                bug.style.transform = "rotate(" + rotate + "deg)"
                bug.style.left = x + "px";
                bug.style.top = y + "px"; 
            }

            setInterval(move, 10);
            setInterval( () => {
                rotateOffset = -rotateOffset;
            }, 500)
        });
    }
    // --------------------

    // Thêm class virus_hideText_list vào những chỗ cần ẩn chữ
    function hideText() {
        var virus_hideText_list = document.querySelectorAll('.virus_hideText_list');
        
        for (var i = 0; i < virus_hideText_list.length; i++) {
            var virus_hideText = virus_hideText_list[i].innerHTML
            
            var hidedText = virus_hideText.replace(/[B]/g, '🔼');
            var hidedText2 = hidedText.replace(/[ì]/g, '👨🏻‍💼');
            var hidedText3 = hidedText2.replace(/[n]/g, '🔽');
            var hidedText4 = hidedText3.replace(/[h]/g, '🙍🏻‍♂️');
            
            virus_hideText_list[i].innerHTML = hidedText4;
        }
    }
    // --------------------
    
    // Change Home Page Function
    function changeHomePage () {
        var virus_overlay = document.getElementById('virus_overlay');
        
        home_background.src="../assets/img/banner/virus/background.png";
        stars.src="../assets/img/banner/virus/stars.png";
        sun.src="../assets/img/banner/virus/moon.png";
        logo_long.src="../assets/img/banner/virus/logo-long.png";
        
        light.style.display = 'none';
        night_overlay.style.display = 'none';
        virus_overlay.style.opacity = 1;
    }
    // --------------------

    // Check Password Function
    password();
    function password() {
        var passwordBtn = document.getElementById('check_password_button');
        passwordBtn.addEventListener('click', checkPassword);
        
        function checkPassword () {
            var password = document.getElementById('password').value;
            var passwordResult = document.getElementById('password_result');
            var correctPassword = 'Bình';
    
            if (password == correctPassword) {
                passwordResult.innerHTML = 'Correct Password';
                passwordResult.style.color = 'green';
                bugs.style.display = 'none';
            } else {
                passwordResult.innerHTML = 'Incorrect Password';
                passwordResult.style.color = 'red';
                addVirus();
    
            }
        }
    };
    // --------------------

    // Add Virus Function
    function addVirus() {
        var bugsList = document.getElementById('bugs');
        var bugsListAdd = bugsList.innerHTML + '<div class="bug"><img src="../assets/img/bug.png" alt=""></div>';

        bugsList.innerHTML = bugsListAdd;
        virusAppear();
    }
    // --------------------
}
