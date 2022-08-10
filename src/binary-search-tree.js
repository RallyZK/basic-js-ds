const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data; // значение узла
//     this.left = null;   // левое значение дочернего узла
//     this.right = null; // правое значение дочернего узла
//   }
// }

class BinarySearchTree {

  constructor() {
    // this.root = null; // корень bst
  }

 get root() {
  //  return `root: ${this.root}` // значение корня по умолчанию
  }

  set root(data) {    
    // if (this.root === null) {
    //   this.root = data;
    // } else {
    //   this.insertNode(this.root, data);
    // }
  }

  add(data) {
    // let newNode = new Node(data);
    // if (this.root === null) {
    //   this.root = newNode;
    // } else {
    //   this.insertNode(this.root, newNode);
    // }
  }

  // вспомогательный метод, который отвечает за сравнение данных нового узла 
  // с данными текущего узла и рекурсивное перемещение влево или вправо
  // пока не найдет правильный узел с нулевым значением,
  // в который можно добавить новый узел

  insertNode(node, newNode) {
    // newNode = new Node(newNode);
    // node = new Node(node);
    // if (newNode.data < node.data) {
    //   if (node.left === null) {
    //     node.left = newNode;
    //   } else {
    //     this.insertNode(node.left, newNode);
    //   }
    // } else {
    //   if (node.right === null) {
    //     node.right = newNode;
    //   } else {
    //     this.insertNode(node.right, newNode);
    //   }
    // }
  }


  has(data) {
    // if (data === this.root) {
    //   return true
    // } else {
    //   this.ishas(this.root, data)
    // }
  }

  ishas(node, data) {    
    // if (data === node) {
    //   return true;
    // } else if (data < node.data) {
    //   return this.ishas(node.left, data);
    // } else if (data > node.data) {
    //   return this.ishas(node.right, data);
    // } else {
    //   return false;
    // }
  }

  find(data) {
    // if (data === null) {
    //   return data
    // } else {
    //   this.search(this.root, data)
    // }
  }

  search(node, data) {
    // node = new Node(node);
    // if (data === node) {
    //   return data;
    // } else if (data < node.data) {
    //   return this.search(node.left, data);
    // } else if (data > node.data) {
    //   return this.search(node.right, data);
    // } else {
    //   return null;
    // }
  }

  remove(data) {
    // this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {    
    // if (node === null) {
    //   return null;
    //   // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    // } else if (data < node.data) {
    //   node.left = this.removeNode(node.left, data);
    //   return node;
    //   // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    // } else if (data > node.data) {
    //   node.right = this.removeNode(node.right, data);
    //   return node;
    //   // если данные такие как данные корня, удаляем узел
    // } else {
    //   // удаляем узел без потомков (листовой узел (leaf) или крайний)
    //   if (node.left === null && node.right === null) {
    //     node = null;
    //     return node;
    //   }
    //   // удаляем узел с одним потомком
    //   if (node.left === null) {
    //     node = node.right;
    //     return node;
    //   } else if (node.right === null) {
    //     node = node.left;
    //     return node;
    //   }
    //   // удаляем узел с двумя потомками
    //   // minNode правого поддерева хранится в новом узле
    //   let newNode = this.minNode(node.right);
    //   node.data = newNode.data;
    //   node.right = this.removeNode(node.right, newNode.data);
    //   return node;
    // }
  }

  min() {
    // if (this.root.left === null) {
    //   return this.root
    // } else {
    //   return this.minNode(this.root);
    // }
  }

  // находит минимальный узел в дереве
  minNode(node) {
    // node = new Node(node);
    // // если слева от узла ноль тогда это должен быть минимальный узел
    // if (node.left === null)
    //   return node;
    // else
    //   return this.minNode(node.left);
  }


  max() {
    // if (this.root.right === null) {
    //   return this.root
    // } else {
    //   return this.maxNode(this.root);
    // }
  }

  // находит максимальный узел в дереве
  maxNode(node) {
  //   node = new Node(node);
  //   // если справа от узла ноль тогда это должен быть максимальный узел
  //   if (node.right === null)
  //     return node;
  //   else
  //     return this.maxNode(node.right);
  // }

}
}
  

module.exports = {
  BinarySearchTree
};