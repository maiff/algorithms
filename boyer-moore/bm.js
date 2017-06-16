var BadValue, GetValue, BM, printf;
(function () {
    var _$0 = this;

    function _0(bad, target) {
        let i = 0;
        let badindex = -1;

        for (i = 0; i < target.length; i++) {
            if (bad == target[i]) {
                badindex = target.length - 1 - i;
            }
        }

        return badindex;
    }

    function _1(value, target) {
        let i = 0,
            j = 0;
        let temp;
        let tarlen = target.length;
        value = [];

        for (i = 0; i < tarlen; i++) {
            //初始化
            value[i] = -1; //-1代表后缀无匹配的字符
        }

        for (i = tarlen - 1; i > 0; i--) {
            temp = target[i];
            if (i < tarlen - 1) value[i] = value[i + 1]; //后一位赋值到前一位

            for (j = 0; j < i; j++) {
                if (target[j] == temp) {
                    value[i] = i - j; //移动的距离
                }
            }
        }

        return value;
    }

    function _2(source, target, value) {
        let i = 0,
            j = 0,
            soulen = source.length,
            tarlen = target.length; //初始化

        let badvalue = 0,
            distance = 0;

        if (soulen < tarlen) {
            //比较长度
            _$0.printf("字符串的长度小于搜索词的长度\n");

            return _3;
        }

        i = tarlen - 1;
        j = tarlen - 1; //从尾开始匹配

        while (i < soulen) {
            if (source[i] == target[j]) {
                //字符匹配成功
                if (j == 0) {
                    _$0.printf("匹配成功\n");

                    return i;
                }

                i--;
                j--;
            } else {
                //未匹配成功
                if (j == tarlen - 1) {
                    //如果尾字符未匹配成功，"坏字符规则"
                    badvalue = _$0.BadValue(source[i], target);
                    if (badvalue == -1) badvalue = target.length;
                    i = i + tarlen - 1 - j + badvalue;
                    j = tarlen - 1;
                } else {
                    //有后缀,比较"坏字符规则"和"后缀规则"
                    badvalue = _$0.BadValue(source[i], target);
                    if (badvalue == -1) badvalue = target.length;
                    distance = badvalue > value[j] ? badvalue : value[j]; // printf(`移动距离:%d\n`,distance);

                    j = tarlen - 1; //更新j位置

                    i = i + tarlen - 1 - j + distance; //更新i的位置
                }
            }
        }

        _$0.printf("匹配失败....");

        return -1;
    }

    function _4(str) {
        _$0.console.log(str);
    }

    BadValue = _0;
    GetValue = _1;
    let _3 = 0;
    BM = _2;
    printf = _4;
    console.log("\u5339\u914D\u5931\u8D25....");
}).call(this);