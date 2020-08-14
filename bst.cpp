#include <iostream>


class Node {

public:
    int Value;
    Node* Left;
    Node* Right;

    Node(int value) {
        Value = value;
        Left = NULL;
        Right = NULL;
    }
};

class BST {

public:
    Node* root;

    BST() {
        root = NULL;
    }

    Node insert(int value) {
        std::cout << root << std::endl;

        Node newNode(value);
        if (root == NULL) {
            root = &newNode;
        }
        std::cout << "the root value is: " << root->Value << std::endl;
        std::cout << "the root address is: " << root << std::endl;
        return *root;

    }



};

int main() {
    BST myBSTree;

    Node myValue = myBSTree.insert(10);

    //std::cout << myValue << std::endl;
    return 0;
}