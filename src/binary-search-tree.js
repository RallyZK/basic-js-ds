const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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
    this.roott = null; // корень bst по умолчанию
  }

  root() {
    return this.roott // return root node of the tree
  }

  //   set roott(data) {    
  //     // if (this.roott === null) {
  //     //   this.roott = data;
  //     // } else {
  //     //   this.insertNode(this.roott, data);
  //     // }
  //   }

  // add node with data to the tree
  add(data) {
    let el = new Node(data);
    if (this.roott === null) this.roott = el;
    else this.insertNode(this.roott, el);
    
  }

  // вспомогательный метод, который отвечает за сравнение данных нового узла 
  // с данными текущего узла и рекурсивное перемещение влево или вправо
  // пока не найдет правильный узел с нулевым значением,
  // в который можно добавить новый узел

  insertNode(root, el) {

    if (el.data < root.data) {
      if (root.left === null) root.left = el;
      else this.insertNode(root.left, el);
      
    } else {
      if (root.right === null) root.right = el
      else this.insertNode(root.right, el)
    }
  }

  //  returns true if node with the data exists in the tree and false otherwise
  has(data) {
    let top = this.roott;

    while (top) {
      if (data < top.data) top = top.left;
      else if (data > top.data) top = top.right;
      else return (top !== undefined)
    }

    return false;
  }

  // returns node with the data if node with the data exists in the tree and null otherwise
  find(data) {
    let top = this.roott;

    while (top) {
      if (data < top.data) top = top.left;
      else if (data > top.data) top = top.right;
      else return top
    }

    return null;

  }

  // removes node with the data from the tree if node with the data exists
  remove(data) {

    if (this.roott === null) {
      return null;
    } else {
      
      if (data < top.data) {
        top.left = this.remove(data, top.left)
        return top
  
      } else if (data > top.data) {
        top.right = this.remove(data, top.right)
        return top
  
      } else {
  
        if (top.left === null) {
          top = top.right
          return top
        } else if (top.right === null) {
          top = top.left
          return top
        }
  
  
        return top;
      }
    }
  }



  

  // returns minimal value stored in the tree (or null if tree has no nodes)
  min(top = this.roott) {
    if (top.left === null) return top.data
    else return this.min(top.left)    
  }

  // returns maximal value stored in the tree (or null if tree has no nodes)
  max(top = this.roott) {

    if (top.right === null) return top.data
    else return this.max(top.right)
    
  }




  
}


module.exports = {
  BinarySearchTree
};