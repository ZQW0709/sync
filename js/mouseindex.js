var mouseCircle = function () {
        document.documentElement.addEventListener('mousemove', function (event) {
            var x = event.pageX, y = event.pageY;
            var mouseCircle = document.createElement('div');
            mouseCircle.className = 'mouseCircle';
            this.appendChild(mouseCircle);
            // 动画结束后删除自己
            mouseCircle.addEventListener('animationend', function () {
                mouseCircle.parentNode.removeChild(mouseCircle);
            });
            // 位置
            mouseCircle.style.left = (x - mouseCircle.clientWidth / 2) + 'px';
            mouseCircle.style.top = (y - mouseCircle.clientHeight-10) + 'px';
        });  

        document.documentElement.addEventListener('click', function (event) {
            var x = event.pageX, y = event.pageY;
            var mouseCircle = document.createElement('div');
            mouseCircle.className = 'mouseCircle';
            this.appendChild(mouseCircle);
            // 动画结束后删除自己
            mouseCircle.addEventListener('animationend', function () {
                mouseCircle.parentNode.removeChild(mouseCircle);
            });
            // 位置
            mouseCircle.style.left = (x - mouseCircle.clientWidth / 2) + 'px';
            mouseCircle.style.top = (y - mouseCircle.clientHeight-10) + 'px';
        });    
    };

    mouseCircle();