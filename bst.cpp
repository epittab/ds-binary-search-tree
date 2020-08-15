#include <iostream>


class Node {

public:
    int Value;
    Node *Left;
    Node *Right;

    Node(int value) {
        Value = value;
        Left = NULL;
        Right = NULL;
    }
};

class BST {

public:
    Node *root;

    BST() {
        root = NULL;
    }

    Node insert(int value) {
        std::cout << root << std::endl;

        Node newNode(value);
        if (!this -> root) {
            root = &newNode;
        }
        std::cout << "the root value is: " << root->Value << std::endl;
        std::cout << "the root address is: " << root << std::endl;
        // handle less than root
        if (value < root -> Value ) {

            std::cout << "the value is less than root address is: " << std::endl;
        }
        else {

            std::cout << "the value is greater than root address is: " << std::endl;

        }
        
        return *root;

    }



};

int main() {
    BST myBSTree;

    myBSTree.insert(10);
    myBSTree.insert(1);

    //std::cout << myValue << std::endl;
    return 0;
}