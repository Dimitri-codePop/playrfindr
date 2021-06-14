
export function getSpec(theme, cat, base) {
  let found;
  if ((theme.length >= 1) || (cat.length >= 1)) {
    for (const index of theme) {
      found = base.filter(element => element.theme.find(element => element === index));
      base = found;
    }
    if (cat.length >= 1) {
      for (const index of cat) {
        found = base.filter(element => element.category.find(element => element === index));
        base = found;
      }
      return found
    } else {
      return base
    }
  } else {
    return base
  }
}

/*export function getCat(cat , base, theme) {
  let found;
  if ((cat.length >= 1) || (theme.length >= 1)) {
    for (const index of cat) {
      found = base.filter(element => element.category.find(element => element === index));
      base = found;
    }
    if (theme.length >= 1) {
      for (const index of theme) {
        found = base.filter(element => element.theme.find(element => element === index));
        base = found;
      }
      return found
    } else {
      return base
    }
  } else {
    return base
  }
}*/

export function addOrRemove(array, value) {
  var index = array.indexOf(value);

  if (index === -1) {
      array.push(value);
  } else {
      array.splice(index, 1);
  }
  return array
}
