window.onload=function(){

    // HomePage Parallax function
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
    })
    // --------------------

    // Hamburger Menu function
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

    // Virus function

    var virusIsAppear = false;

    window.addEventListener('scroll', function() {
        const scrollAble = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        
        if ((Math.ceil(scrolled - 0.5)) === scrollAble && virusIsAppear == false) {
            virusAppear();
            hideText();
        };
    });
    
    function hideText() {
        var virus_hideText_list = document.querySelectorAll('.virus_hideText_list');
        
        for (var i = 0; i < virus_hideText_list.length; i++) {
            var virus_hideText = virus_hideText_list[i].innerHTML
            var hidedText = virus_hideText.replace(/[o|l|n|i|h|t|ê]/g, '▃');
            virus_hideText_list[i].innerHTML = hidedText;
        }
    }

    function virusAppear () {
        var bugs = document.querySelectorAll('#virus #bugs .bug');
        var bugs_array = [...bugs];
        virusIsAppear = true;
    
        bugs_array.forEach(bug => {
            bug.style.opacity = 1;
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
                if (y + parseInt(style.height.replace("px", "")) > window.innerHeight){
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
    // --------------------------------
}