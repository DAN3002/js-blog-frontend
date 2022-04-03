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

        console.log(value);

        logo_long.style.opacity = 1 - value * 0.0065;
        home_background.style.top = value + 'px';
        sun.style.top = value * 0.25 + 'px';
        light.style.top = value * 0.25 + 'px';
        sun.style.opacity = 1 - value * 0.001;
        light.style.opacity = 1 - value * 0.0025;
        night_overlay.style.opacity = value * 0.0025;
        stars.style.top = value * 0.75 + 'px';
        right_near_rock.style.left = value * 1.25 + 'px';
        left_near_rock.style.right = value * 1.25 + 'px';
        right_far_rock.style.left = value * 0.1 + 'px';
        left_far_rock.style.right = value * 0.1 + 'px';
        cloud.style.bottom = value * 0.15 + 'px';
        cloud.style.width = currentCloudWidth + value * 2.5 + 'px';
        lake.style.width = currentLakeWidth + value * 0.7 + 'px';
        gate.style.width = currentGateWidth + value * 0.7 + 'px';
        left_far_rock.style.width = currentLeftFarRockWidth + value * 0.7 + 'px';
        right_far_rock.style.width = currentRightFarRockWidth + value * 0.7 + 'px';
    })
    // -----------

}