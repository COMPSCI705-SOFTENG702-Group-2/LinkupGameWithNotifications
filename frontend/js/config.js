var config = (function(){


    var row = 2;
    var col = 2;
    var objectCount = 2;
    var repeatCount = row * col / objectCount;

    var time = 120;
    var initialTime = Date.now();
    var currentTime = initialTime;

    var imgUrl = "./img/";
    var imgExtension = ".png";
    var imgByName = function (name) {
        var src = imgUrl + name + imgExtension;
        return `<img draggable="false" src="${src}"></img>`;
    }

    var itemDirectionHTML = ` <div class="grid-item-direction">
                                    <div class="y up"></div>
                                    <div class="y down"></div>
                                    <div class="x left"></div>
                                    <div class="x right"></div>
                              </div>`;

    return {
        row : row,
        col : col,
        objectCount : objectCount,
        repeatCount: repeatCount, 
        imgByName : imgByName,
        itemDirectionHTML: itemDirectionHTML,
        time : time,
        initialTime: initialTime,
        currenTime: initialTime
    }

})();