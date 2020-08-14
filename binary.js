class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        
        this.root = null;

    }

    search(value) {
        currentNode = this.root;

        while (true) {
            if (value === currentNode.value ) {
                return currentNode;
            }
            if ( value ) {}
        }
    }

    

    addNode(val){

        let newNode = new Node(val)

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.addNewNode(this.root, newNode);
        }
    }
     
    
    addNewNode(node, newNode){
            if (newNode.value < node.value) {
                if (node.left == null) {
                    node.left = newNode;
                } else {
                    this.addNewNode(node.left, newNode);
                }
            } else if (newNode.value > node.value) {
                if (node.right == null) {
                    node.right = newNode;
                } else {
                    this.addNewNode(node.right, newNode)
                }
            } 
    }
}

let tree = new Tree();
tree.addNode(6);
tree.addNode(16);
tree.addNode(61);
tree.addNode(2);
tree.addNode(5);
tree.addNode(42);
tree.addNode(26);



console.log(tree);

