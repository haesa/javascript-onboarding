function checkDuplication(nickname, forms) {
  const newForms = forms.filter(([email, nick]) => nick !== nickname);
  for (let i = 0; i < nickname.length - 1; i++)
    for (let j = i + 2; j <= nickname.length; j++) {
      const check = newForms //
        .some(([email, nick]) => nick.includes(nickname.substring(i, j)));
      if (check) return true;
    }
  return false;
}

function getDuplicatedList(forms) {
  return forms //
    .filter(([email, name]) => checkDuplication(name, forms))
    .map(([email, name]) => email)
    .sort();
}

function problem6(forms) {
  return getDuplicatedList(forms);
}
module.exports = problem6;
