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


    find(value) {

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


    bfs() {
        //handle edge case
        if (!this.root) return undefined;
        //create queue and results array
        let queue = []; 
        let resultBFS = [];

        queue.push(this.root);

        while (queue.length  > 0 ) {
            //dequeue current node
            let variable = queue.shift();
            //add to results array
            resultBFS.push( variable.value );
            // check for children nodes
            if ( variable.left ) queue.push( variable.left )     
            if ( variable.right ) queue.push( variable.right )
        }
        return resultBFS;
    }

    dfsPreorder() {
        // handle edge case
        if (!this.root) return undefined;
        
        // define varible to store return values
        let visited = [];

        //set current node to root
        let currentNode = this.root;
        
        // define recursive helper function
        function traverse(node) {
            
            visited.push(node.value);
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)

        }
      
        traverse(currentNode);
        return visited;
    }
   
    dfsPostorder() {
        // handle edge case
        if (!this.root) return undefined;
        
        // define varible to store return values
        let visited = [];

        //set current node to root
        let currentNode = this.root;
        
        // define recursive helper function
        function traverse(node) {
            
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value);

        }
      
        traverse(currentNode);
        return visited;
    }
   
    dfsInorder() {
        // handle edge case
        if (!this.root) return undefined;
        
        // define varible to store return values
        let visited = [];

        //set current node to root
        let currentNode = this.root;
        
        // define recursive helper function
        function traverse(node) {
            
            if (node.left) traverse(node.left)
            visited.push(node.value);
            if (node.right) traverse(node.right)

        }
      
        traverse(currentNode);
        return visited;
    }

    dfsOutorder() {
        // handle edge case
        if (!this.root) return undefined;
        
        // define varible to store return values
        let visited = [];

        //set current node to root
        let currentNode = this.root;
        
        // define recursive helper function
        function traverse(node) {
            
            if (node.right) traverse(node.right)
            visited.push(node.value);
            if (node.left) traverse(node.left)

        }
      
        traverse(currentNode);
        return visited;
    }


    //private

    


}