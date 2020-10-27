const div = dom.create("<div id='child'>你好</div>")

dom.before(div, test)
dom.after(div, test)

dom.append(test, div)

const div1 = dom.create("<div id='parent'>hello</div>")
dom.wrap(test, div1)

console.log(dom.remove(div))

console.log(dom.empty(ul))

dom.attr(test, "style", "color:red")
console.log(dom.attr(test, "title"))

dom.text(test, "我是新加的")
console.log(dom.text(test))

dom.html(test, "<strong id='test2'>我是后加的</strong>")
console.log(dom.html(test))

dom.style(div1, "background", "#eee")

dom.style(div1, { color: "pink", border: "5px solid blue" })

dom.class.add(div1, "xxx")
dom.class.add(div1, "yyy")
dom.class.add(div1, "zzz")
dom.class.remove(div1, "xxx")
console.log(dom.class.has(div1, "zzz"))

let fn = () => {
  console.log("hi")
}
dom.on(div1, "click", fn)
dom.off(div1, "click", fn)

console.log(dom.find("#test2")[0])
console.log("...")
console.log(dom.sibling(d2)[0])
console.log(dom.next(d2))
console.log(dom.previous(d2))

dom.each(travel.children, (n) => {
  dom.style(n, "color", "blue")
})

console.log(dom.index(d2))
