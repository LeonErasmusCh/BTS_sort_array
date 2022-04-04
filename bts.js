const order = (array) => {
  let arr = [];
  // Node class
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  // Binary Search tree class
  class BinarySearchTree {
    constructor() {
      // root of a binary search tree
      this.root = null;
    }

    // helper method which creates a new node to
    // be inserted and calls insertNode
    insert(data) {
      // Creating a node and initialising
      // with data
      let newNode = new Node(data);

      // root is null then node will
      // be added to the tree and made root.
      if (this.root === null) this.root = newNode;
      // find the correct position in the
      // tree and add the node
      else this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode) {
      // if the data is less than the node
      // data move left of the tree
      if (newNode.data < node.data) {
        // if left is null insert node here
        if (node.left === null) node.left = newNode;
        // if left is not null recur until
        // null is found
        else this.insertNode(node.left, newNode);
      }

      // if the data is more than the node
      // data move right of the tree
      else {
        // if right is null insert node here
        if (node.right === null) node.right = newNode;
        // if right is not null recur until
        // null is found
        else this.insertNode(node.right, newNode);
      }
    }

    // Performs inorder traversal of a tree

    inorder(node) {
      if (node !== null) {
        this.inorder(node.left);
        //console.log(node.data);
        arr.push(node.data);
        this.inorder(node.right);
      }
      //console.log(arr);
    }

    // returns root of the tree
    getRootNode() {
      return this.root;
    }
  }

  // create an object for the BinarySearchTree
  let BST = new BinarySearchTree();

  // Insert into Binary tree from array provided
  for (let i = 0; i < array.length; i++) {
    BST.insert(array[i]);
  }
  // get root
  let root = BST.getRootNode();

  //order
  BST.inorder(root);
  console.log(arr); // retun array to be used
};

exports.order = order;
