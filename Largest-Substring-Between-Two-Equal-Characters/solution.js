const maxLengthBetweenEqualCharacters =  (s) => {
    s = s.toLowerCase()

    if (s.length > 300 || s.length <= 1) {
        return -1;
    }

    let subStringId = [0, 0];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                const oldSubStringLength = subStringId[1] - subStringId[0];
                const currentSubStringLength = j - i;

                if (currentSubStringLength >= oldSubStringLength) {
                    subStringId[0] = i;
                    subStringId[1] = j;
                }
            }
        }
    }

    const subStringLength = subStringId[1] - subStringId[0] -1;

    return subStringLength ;
};

maxLengthBetweenEqualCharacters("string")