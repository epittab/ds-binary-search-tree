class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value) {

        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 

        let currentNode = this.root;
        
        while ( true ) {
            if (newNode.value === currentNode.value) break;
            //handle less than
            if ( newNode.value < currentNode.value ) {
                if (!currentNode.left) {
                    // currentNode.left = null
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } 
            //handle greater than
            else {
                if (!currentNode.right) {
                    // currentNode.right = null
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }

        }
        return this;
    }


    search(value) {

        let currentNode = this.root
        while (true) {
            if (currentNode === null) return false;
            if ( value === currentNode.value ) return currentNode;
            // handle less than
            if (value < currentNode.value) { currentNode = currentNode.left } 
            //handle greater than
            else { currentNode = currentNode.right; }
        }

    }


}