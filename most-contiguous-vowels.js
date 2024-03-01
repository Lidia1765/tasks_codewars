function sortStringsByVowels(strings) {
    /*let newArr = []
    for (let i = 0; i < strings.length; i++) {
        strings[i]
        console.log(strings[i])
        let count = 1;
        for (let j = 0; j < strings[i].length - 1; j++) {
            //console.log(strings[i][j].match(/[aeiouAEIOU]/g))

            if (strings[i][j].match(/[aeiouAEIOU]/g) || strings[i][j + 1].match(/[aeiouAEIOU]/g)) {
                count = count + 1

            }

        }
        console.log(count)
    }*/
    function isVowel(x) {

        return (/[aeiouAEIOU]/i).test(x);
    }

    function countVowels(strChar, strchar2) {
        var count1 = strChar.split('').filter(isVowel).length;
        var count2 = strchar2.split('').filter(isVowel).length;

        if (count1 === count2) return strChar.localeCompare(strchar2);

        return count1 - count2
    }
    strings.sort(countVowels);

    return strings.reverse()
}
console.log(sortStringsByVowels(["jyuuuun", "joan", "jimmy", "joey"]))
console.log(sortStringsByVowels(["none", "uuu", "Yuuuge!!"]))
//тесты не прошел