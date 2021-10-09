/* eslint-disable no-undef */
window.dom = {
    /*增*/
    create(string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim(); //去除字符串两边的空格
        return container.content.firstChild;
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node);
    },
    //在父子节点之间再插入一个节点
    wrap(node, parent) {
        // eslint-disable-next-line no-undef
        dom.before(node, parent);
        // eslint-disable-next-line no-undef
        dom.append(parent, node);
    },
    /*删*/
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {
        //清空该节点的儿子节点
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },

    /*改 */
    attr(node, name, value) { //重载
        //长度为三，表示想要设置参数，长度为2，表示想要读取参数
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }

        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return innerText;
            } else {
                return textContent;
            }
        }

    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return innerHTML;
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            //dom.style(div,'color')
            if (typeof name === 'string') {
                return node.style[name];
            } else if (name instanceof Object) {
                //dom.style(div,{color:'red'})
                for (let key in name) {
                    node.style[key] = name[key];
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        contains(node, className) {
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },

    /*查 */
    find(selector, scope) {
        if (arguments.length === 2) {
            return scope.querySelectorAll(selector);
        } else if (arguments.length === 1) {
            return document.querySelectorAll(selector);
        }

    },
    parent(node) {
        return node.parentNode;
    },
    children(node) {
        return node.children;
    },
    siblings(node) {
        //寻找节点的兄弟姐妹，找到父节点，然后把孩子节点伪数组变成数组，再剔除掉自己。
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    next(node) {
        let nextNode = node.nextSibling;
        while (nextNode && nextNode.nodeType === 3) { //x为文本
            nextNode = nextNode.nextSibling;
        }
        return nextNode;
    },
    previous(node) {
        let previousNode = node.previousSibling;
        while (previoueNode && previoueNode.nodeType === 3) { //x为文本
            previousNode = previousNode.previousSibling;
        }
        return previousNode;
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
    index(node) {
        const list = dom.children(node.parentNode);
        for (let i = 0; i < list.length; i++) {
            if (list[i] === node) {
                return i;
            }
        }
        return NaN;
    }


};
