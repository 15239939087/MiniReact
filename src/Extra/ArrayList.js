// 数组链表
class ArrListNode {
  constructor() {
    // 链表头部
    this.head = null;
    // 链表尾部
    this.tail = null;
    // 链表长度
    this.size = 0;
  }

  push(...items) {
    // 生成新的节点
    let node = null;
    // 循环为链表添加节点
    items.forEach((item) => {
      // 生成节点
      node = new Node(item, this.size);
      // 放到链表中，判断是否是第一个
      if (this.size === 0) {
        this.head = this.tail = node;
      } else {
        this.tail = this.tail.next = node;
      }
      // 长度加一
      this.size++;
    });
    // 返回最新长度
    return this.size;
  }

  value() {
    // 定义返回值
    let res = "";

    // 获取到全部节点
    let node = this.head;
    console.log(node);
    // 初始化第一个值
    res += node ? node.value : "";
    // 遍历拿到数据
    while (node && node.next) {
      res += "," + node.next.value;
      node = node.next;
    }

    return res.split(",");
  }
  // unshift方法，接受一个或者多个参数，依次添加到数组头部，返回值是最新的长度；
  unshift(...items) {
    // 生成新的节点
    let node = null;
    // 循环放到第一项
    items.forEach((item) => {
      // 生成节点
      node = new Node(item, 0);
      // 循环改变index
      this.changeIndex(0, 1);

      // 判断是否是第一个
      if (this.size === 0) {
        this.head = this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    });
    return this.size;
  }

  // pop方法，删除最后一个元素，不需要参数，返回值是被删除的那个节点
  pop() {
    let res = null;
    // 判断当前是链表是空
    if (this.size === 0) {
      return res;
    }
    // 判断当前链表长度
    if (this.size === 1) {
      res = tail;
      this.head = this.tail = null;
    } else {
      // 查找到删除元素的前一个元素
      this.tail = this.find(this.size - 2, "index");
      // 返回删除的元素
      res = this.tail.next;
      // 更新尾部节点
      this.tail.next = null;
    }
    this.size--;
    return res;
  }

  // 删除第一个元素，返回被删除的元素
  shift() {
    let res = null;
    if (this.size === 0) {
      return res;
    }
    // 获取到整个节点
    if (this.size === 1) {
      res = this.head;
      this.head = this.tail = null;
      return res;
    }
    // 获取到删除项
    res = this.head;
    // 删除第一项
    this.head = this.head.next;
    // 更新一下下标
    this.changeIndex(1, -1);
    // 删除第一个节点，下一个引用置为null
    res.next = null;
    // 更新一下长度
    this.size--;
    return res;
  }

  // 根据下标查找到元素
  getItem(index) {
    // 定义返回值
    let res = null;
    // 校验下标
    if (!/\d/.test(index)) {
      throw "请填写Number类型！";
    }
    // 拿到整个链表
    let node = this.head;
    // 判断当前是否是第一个
    if (index === 0) {
      res = node;
    }
    // 判断是否是最后一个
    if (index === this.size - 1) {
      res = this.tail;
    }
    // 搜索匹配
    if (index > 1 && index < this.size - 1) {
      // 遍历查找
      while (node && node.index !== index) {
        node = node.next;
      }
      res = node;
    }
    if (res) {
      res.next = null;
    }
    return res;
  }

  // toString方法，返回数组的全部内容
  toString() {
    // 定义返回值
    let res = "";

    // 获取到全部节点
    let node = this.head;
    // 初始化第一个值
    res += node ? "[" + node.value : "[";
    // 遍历拿到数据
    while (node && node.next) {
      res += "," + node.next.value;
      node = node.next;
    }

    return res + "]";
  }

  // 查找元素的方法, 接受两个参数，第一个是值，第二个是根据下标或者根据值来查找
  find(item, type = "value") {
    // 拿到整个节点
    let node = this.head;
    // 遍历节点
    while (node && node[type] !== item) {
      node = node.next;
    }
    // 将下一个引用删除
    if (node) {
      node.next = null;
    }
    return node;
  }

  // 改变下标的方法, 接受一个起始下标，接受一个方向+1或者-1
  changeIndex(index, type) {
    // 获取到整个链表
    let node = this.head;
    // 是否开始改变
    let make = false;
    // 循环查找到index位置
    while (node) {
      if (make || node.index === index) {
        make = true;
        node.index += type;
      }
      node = node.next;
    }
  }
}

class Node {
  constructor(item, index) {
    // 节点的 value
    this.value = item;
    // 节点的 下标
    this.index = index;
    // 节点的下一个引用指向
    this.next = null;
  }
}

const arr = new ArrListNode();

arr.push(2);
arr.push("4");
arr.push(9);

console.log(arr.toString());
console.log(arr.value());
