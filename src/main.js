/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef


const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素



// const div = dom.create("<div>newDiv</div>");
// console.log(div);

// dom.after(test, div);

// const div3 = dom.create("<div id='parent'></div>")
// dom.wrap(test, div3)

// const nodes = dom.empty(window.empty);
// console.log(nodes);
// dom.attr(test, 'title', 'i am fumo');
// const title = dom.attr(test, 'title');
// console.log(title);

// dom.text(test, "你好，这是新的内容");

// dom.style(test, { border: '1px solid red', color: 'blue' });
// console.log(dom.style(test, 'border'));
// dom.style(test, 'border', '1px solid black');

// dom.class.add(test, 'red');
// dom.class.remove(test, 'red');
// console.log(dom.class.contains(test, 'red'));

// const fn = () => {
//     console.log('点击了');
// };
// dom.on(test, 'click', fn);

// dom.off(test, 'click', fn);

// const testDiv = dom.find('#test')[0];
// console.log(testDiv);


// console.log(dom.siblings(dom.find('#s2')[0]));

// console.log(dom.next(dom.find('#s2')[0]));
// console.log(dom.previous(dom.find('#s2')[0]));

//const t = dom.find('#travel>.t1')[0];
//dom.each(dom.children(t), (n) => dom.style(n, 'color', 'blue'));

// console.log(dom.index(dom.find('#s2')[0]));