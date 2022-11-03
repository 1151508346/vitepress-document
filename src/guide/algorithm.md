# 算法

## 求树的最大深度
```js

const tree = {
    val: 1,
    left: null,
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: { val: 9, left: null, right: null } }
    }
}

function maxDeep(root) {
    const stack = [root];
    let num = 0;
    while (stack.length) {
        let l = stack.length;
        num++;
        while (l--) {
            const n = stack.shift();
            n.left && stack.push(n.left)
            n.right && stack.push(n.right)
        }

    }
    return num
}

// const r = maxDeep(tree)
// console.log(r)

```

## 求树的最小深度
```js
const minDeep = (root) => {
    const stack = [[root, 1]];
    while (stack.length) {
        const [o, n] = stack.shift();
        if (!o.left || !o.right) {
            return n;
        }
        o.left && stack.push([o.left, n + 1]);
        o.right && stack.push([o.right, n + 1])
    }
    return n;
};
```
## 反转二叉树
```js
const reverseTranversal = root => {
    if(root == null) return root;
    const tmp = root.left
    root.left = root.right;
    root.right = tmp;
    reverseTranversal(root.left)
    reverseTranversal(root.right)   
    return root; 
}

const r = reverseTranversal(tree)
console.dir(r,{depth:100})
```
## 判断两颗树是否相等（两个树的结构相等，每个对应节点对应的值也要相等）
```js
const isSomeTree = (p, q) => {
    if (p == null && q == null) return true;
    if (p == null && q == null) return false;
    if (p.val !== q.val) return false;
    const lF = isSomeTree(p.left, q.left);
    const rF = isSomeTree(p.right, q.right);
    return lF && rF;
}
```
## 将数组转成tree形结构
```js
let list = [
    {
        pid: null,
        id: 'a'
    }, {
        pid: null,
        id: 'b'
    },
    {
        pid: 'a',
        id: 'a-a'
    },
    {
        pid: 'a-a',
        id: 'a-a-a'
    },
    {
        pid: 'b',
        id: 'b-b'
    }
]
function arrToTree(arr) {
	let map = {}
	arr.forEach((item, i) => {
			map[item.id] = i
	})

	let root = []
	for (let i = 0; i < arr.length; i++) {
		let node = arr[i]
		if (!node.pid) {
			root.push(node)
		} else {
			let pIndex = map[node.pid]
			let children = arr[pIndex].children || (arr[pIndex].children = [])
			children.push(node)
		}
	}
	return root
}

// let r = arrToTree(list)
// console.dir(r, { depth: 100 })
```

## 将tree形结构转成数组
```js
let tree = [
	{
		pid: null,
		id: 'a',
		children: [
			{
				pid: 'a',
				id: 'a-a',
				children: [{ pid: 'a-a', id: 'a-a-a', children: [] }]
			}
		]
	},
	{
		pid: null,
		id: 'b',
		children: [{ pid: 'b', id: 'b-b', children: [] }]
	}
]

function treeToArray(tree) {
	let root = []
	tree.forEach(item => {
		if (item.children.length > 0) {
			root.push(...treeToArray(item.children))
		}
		delete item.children
		root.push({ ...item })
	})
	return root
}

// let result = treeToArray(tree)
// console.dir(result, { depth: 100 })
```

## 根据指定Id查找tree
> 方法1
```js
let treeArray = [{
  id: 1,
  nodeName: 'a',
  children: [{
    id: 11,
    nodeName: 'ab',
    children: [{
      id: 111,
      nodeName: 'abc'
    },
    {
      id: 112,
      nodeName: 'abd'
    }
    ]
  },
  {
    id: 12,
    nodeName: 'ac',
    children: [{
      id: 121,
      nodeName: 'aca'
    }]
  }
  ]
},
{
  id: 2,
  nodeName: 'b'
},
{
  id: 3,
  nodeName: 'c',
  children: [{
    id: 31,
    nodeName: 'cb',
    children: [{
      id: 311,
      nodeName: 'cbc'
    },
    {
      id: 312,
      nodeName: 'cbd'
    }
    ]
  },
  {
    id: 32,
    nodeName: 'cc',
    children: [{
      id: 321,
      nodeName: 'cca'
    }]
  }
  ]
},
{
  id: 4,
  nodeName: 'd'
}
];


function getNodeRoute(arr, id) {
  // 首先我们先定义个数组，用来保存路径节点id
  const nodeRouteArr = [];
  function getRoute(target, id) {
    for (let i = 0; i < target.length; i++) {
      const node = target[i];
      if (node.children) {
        const isSearch = getRoute(node.children, id);
        if (isSearch) {
          nodeRouteArr.push(node.nodeName);
          return true;
        }
      }
      if (node.id === id) {
        nodeRouteArr.push(node.nodeName);
        return true
      }
    }
  }
  getRoute(arr, id)
  return nodeRouteArr.reverse();
}

// const r = getNodeRoute(treeArray, 321)
// console.log(r)

```
> 方法2
```js
// 备注 此方法不能处理多根的情况
const data = [{
						id: 11,
						pid: 'a1',
						text: 11,
						children: [{
										id: 21,
										pid: 'b1',
										text: 21,
										children: [{
														id: 31,
														pid: 'c1',
														text: 31,
														children: [{
																		id: 41,
																		pid: 'd1',
																		text: 41,
																		children: []
																},
																{
																		id: 42,
																		pid: 'd2',
																		text: 42,
																		children: []
																}
														]
												},
												{
														id: 32,
														pid: 'c2',
														text: 32,
														children: []
												}
										]
								},
								{
										id: 22,
										pid: 'b2',
										text: 22,
										children: []
								}
						]
				},
				{
						id: 12,
						pid: 'a2',
						text: 12,
						children: []
				}
		]

		function findIndexArray(data, id, indexArray) {
				let arr = Array.from(indexArray)
				for (let i = 0, len = data.length; i < len; i++) {
						arr.push(data[i].pid)
						if (data[i].id === id) {
								return arr
						}
						let children = data[i].children
						if (children && children.length) {
								let result = findIndexArray(children, id, arr)
								if (result) return result
						}
						arr.pop()
				}
				return false
		}

		console.log(findIndexArray(data, 42, [])) // ["a1", "b1", "c1", "d2"]
```


