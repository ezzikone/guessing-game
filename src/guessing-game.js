class GuessingGame {
    constructor(first = 0, last = 0) {
        this.first = first;
        this.last = last;
    }

    setRange(min, max) {
        this.first = min;                               //присваиваем стартовые значения отрезку от min
        this.last = max;                                //до max
    }

    guess() {
        let ans = 0;
        const i = this.first,
              j = this.last;
        ans = Math.ceil((i+j)/2);                    //находим среднее значение (между заданным промежутком) и округляем его в большую сторону
        return ans;
    }

    lower() {
        const i = this.first,
              j = this.last;
        this.last = Math.ceil((i+j)/2);             //последняя цифра отрезка становится серединой отрезка, в меньшую сторону
    }

    greater() {
        const i = this.first,
              j = this.last;
        this.first = Math.ceil((i+j)/2);            //первая цифра отрезка становится серединой отрезка, в меньшую сторону
    }
}

module.exports = GuessingGame;
