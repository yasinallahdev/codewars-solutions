/*

    PROBLEM:

    Your task is to add up letters to one letter.

    The function will be given a variable amount of arguments, each one being a letter to add.

    Notes:
    Letters will always be lowercase.
    Letters can overflow (see second to last example of the description)
    If no letters are given, the function should return 'z'
    Examples:
    addLetters('a', 'b', 'c') = 'f'
    addLetters('a', 'b') = 'c'
    addLetters('z') = 'z'
    addLetters('z', 'a') = 'a'
    addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
    addLetters() = 'z'

*/

// SOLUTION
function addLetters(...letters) {
    // return 'z' if no args
    if(letters.length === 0) {
      return 'z';
    }
    // map numbers to letters
    const numberMatch = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9,
    "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19,
    "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26};
    let result = 0;
    letters.forEach(letter => {
      result += numberMatch[letter];
    });
    while(result > 26) {
      result -= 26;
    }
    // after adding the letters and then subtracting for overflow, map numbers back to letters
    const letterMatch = {"1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f", "7": "g", "8": "h",
    "9": "i", "10": "j", "11": "k", "12": "l", "13": "m", "14": "n", "15": "o", "16": "p", "17": "q",
    "18": "r", "19": "s", "20": "t", "21": "u", "22": "v", "23": "w", "24": "x", "25": "y", "26": "z"
    };
    // return
    return letterMatch[result.toString()];
}
