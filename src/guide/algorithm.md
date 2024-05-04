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
    if (p == null || q == null) return false;
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

## 最小堆实现 | JS
堆是一种特殊的完全二叉树，JS中常用数组表示堆，左侧子节点的位置是2*index+1 ，右侧子节点的位置是2*index + 2。

堆可以快速找到最大值和最小值，时间复杂度是O（1），找出第K个最大（最小）元素

如果想要获取第K个最大的元素，可以构建一个最小堆，并将元素依次插入堆中，当堆的容量超过K，就删除堆顶，插入结束之后堆顶就是第K个最大元素。

> 使用一
```js
class MinHeap {
  constructor(){
    this.heap = [];
  }
  swap(i1, i2){
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i){  //获取父节点的值
    return (i-1) >> 1;  //二进制右移相当于除以2
  }
  getLeftIndex(i) {  //获取左结点
    return i * 2 + 1;
  }
  getRightIndex(i) {  //获取右结点
    return i * 2 + 2;
  }

  shiftUp(index){   //需要让父节点不断小于它的子节点
    if(index == 0){ return; }  //如果已经是根结点了就不用找了
    const parentIndex = this.getParentIndex(index);
    if(this.heap[parentIndex] > this.heap[index]){
      this.swap(parentIndex, index);  //如果父节点的值大于子节点则进行交换
      this.shiftUp(parentIndex)
    }
  }
  insert(value){  //插入，添加的方法
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);  //shiftUp就是上移操作，接收参数是上移时的下标
  }
  shiftDown(index){  //下移节点，直到子节点都大于当前节点的值
    // 需要获取它的左右子节点
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if(this.heap[leftIndex] < this.heap[index]){  //小顶堆，父节点小于子节点
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);  //迭代，直到找到合适的位置
    }
    if(this.heap[rightIndex] < this.heap[index]){  //小顶堆，父节点小于子节点
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);  //迭代，直到找到合适的位置
    }
  }

  pop(){   //下移方法
    this.heap[0] = this.heap.pop();  // 把数组的最后一位转移到头部，相当于变相删除堆顶
    this.shiftDown(0);  //传什么下标，就对那个进行下移操作
  }
  peek(){ //获取堆顶，返回数组的头部
    return this.heap[0];
  }
  size(){  // 获取堆的大小
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(4)
h.insert(5)

h.insert(1);

h.pop();


console.log(h.heap)
```
> 使用二

```js

/**
 * 向最小堆添加一个节点
 * @param {*} heap 
 * @param {*} node 
 */
function push (heap, node) {
  const index = heap.length;

  heap.push(node);

  siftUp(heap, node, index);
}

/**
 * 查看最小对顶元素
 * @param {*} heap 
 */
function peak (heap) {
  const first = heap[0];
  return first === undefined ? null : first;
}

/**
 * 弹出最小堆的堆顶元素
 * @param {*} heap 
 */
function pop (heap) {
  const first = heap[0];
  if (first !== undefined) {
    const last = heap.pop();
    if (first !== last) {
      heap[0] = last;
      siftDown(heap, last, 0);
    }
    return first;
  } else {
    return null;
  }
}

/**
 * 向上调整一个节点，使其位于正确的位置
 * @param {*} heap 
 * @param {*} node 
 * @param {*} i 
 */
function siftUp (heap, node, i) {
  let index = i;
  while (true) {
    const parentIndex = index - 1 >>> 1;

    const parent = node[parentIndex];

    if (parent !== undefined && compare(parent, node) > 0) {
      // 把儿子的索引给父索引
      heap[parentIndex] = node;
      // 把父亲的值给子索引
      heap[index] = parent;
      index = parentIndex;
    } else {
      return;
    }
  }
}


/**
 * 向下调整一个节点，使其位于正确的位置
 * @param {*} heap 
 * @param {*} node 
 * @param {*} i 
 */
function siftDown (heap, node, i) {
  let index = i;
  const length = heap.length;
  while (index < length) {
    const leftIndex = (index + 1) * 2 - 1;
    const rightIndex = leftIndex + 1;
    const left = heap[leftIndex];
    const right = heap[rightIndex];
    // 如果左子节点存在，并且左子节点比父节点小
    if (left !== undefined && compare(left, node) < 0) {
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      return;
    }
  }
}

function compare (a, b) {
  const diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}


let heap = [];

let id = 1;
push(heap, { sortIndex: 1, id: id++ });
push(heap, { sortIndex: 2, id: id++ });
push(heap, { sortIndex: 3, id: id++ });
console.log(peak(heap));
push(heap, { sortIndex: 4, id: id++ });
push(heap, { sortIndex: 5, id: id++ });
push(heap, { sortIndex: 6, id: id++ });
push(heap, { sortIndex: 7, id: id++ });
console.log(peak(heap));
pop(heap);
console.log(peak(heap));

```



