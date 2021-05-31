const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")

export function fromIdToUrl(stringId: string | undefined) {
    if (stringId === undefined) {
        return alphabet[0];
    }

    let id: number = Number.parseInt(stringId);

    if (id === 0) {
        return alphabet[id];
    }

    let division = id;
    let reminder =  division % alphabet.length;
    let code = "";
    while (division > 0) {
        reminder =  division % alphabet.length;
        division = Math.floor(division / alphabet.length);
        code = alphabet[reminder] + code;
    }
    return code;
}

export function fromUrlToId(url: string) {
    let characters = url.split("");
    let id = 0;
      for(let i = characters.length - 1; i >= 0 ; i--) {
        let found = false;
        let j = 0;
        while(!found && j < alphabet.length) {
            found = characters[i] === alphabet[j];
            j = found ? j : j+1;
        }
        id += j * Math.pow(alphabet.length, (characters.length - 1 - i));
    }
    return id;
}
