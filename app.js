function shuffle() {
    const permutation = (array) => {
        let result = [];
        if (array.length === 1) {
            result.push(array);
            return result;
        }
        for (let i = 0; i < array.length; i++) {
            let parts = array.slice(0);
            parts.splice(i, 1)
            let innerPermutations = permutation(parts);
            for (let j = 0; j < innerPermutations.length; j++) {
                result.push(array[i].concat(innerPermutations[j]));
            }
        }
        return result;
    };

    let array = document.getElementById('word').value;
    // 入力された文字列を一文字ずつに分解
    array = array.split('');
    const results = permutation(array);

    var ul = document.getElementById('ul');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    };
    results.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
}
