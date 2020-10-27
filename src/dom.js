window.dom = {
  create(string) {
    const container = document.createElement("template")
    container.innerHTML = string.trim()
    return container.content.firstChild
  },
  before(newNode, node) {
    node.parentNode.insertBefore(newNode, node)
  },
  after(newNode, node) {
    node.parentNode.insertBefore(newNode, node.nextSibling)
  },
  append(parent, node) {
    parent.appendChild(node)
  },
  wrap(node, parent) {
    dom.before(parent, node)
    dom.append(parent, node)
  },
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },
  empty(parent) {
    let array = []
    let x = parent.firstChild
    while (x) {
      array.push(dom.remove(x))
      x = parent.firstChild
    }
    return array
  },
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value)
    } else if (arguments.length === 2) {
      return node.getAttribute(name)
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string
      } else {
        node.textContent = string
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name]
      } else if (name instanceof Object) {
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className) {
      node.classList.remove(className)
    },
    has(node, className) {
      return node.classList.contains(className)
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) {
    return node.parentNode
  },
  children(node) {
    return node.children
  },
  sibling(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node)
  },
  next(node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },
  previous(node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },
  each(nodes, fn) {
    for (let i = 0; i < nodes.length; i++) {
      fn.call(null, nodes[i])
    }
  },
  index(node) {
    let list = dom.children(node.parentNode)
    let i
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break
      }
    }
    return i
  },
}
