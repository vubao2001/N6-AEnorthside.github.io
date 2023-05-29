export function setItemInLocal(name, value) {
    if (name == null) return
    const listItem = JSON.parse(localStorage.getItem(name) || "[]");
    listItem.push(value);
    localStorage.setItem(name, JSON.stringify(listItem));
}

export function getItemInLocal(cname) {
    const cvalue = localStorage.getItem(cname)
    return cvalue ? JSON.parse(cvalue) : ""
}

// 
export function setItemsInLocal(cname, cvalue) {
    if (cname == null) return;
    localStorage.setItem(cname, JSON.stringify(cvalue));
  }