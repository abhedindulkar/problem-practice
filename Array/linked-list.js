// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}

class LinkedList {
    
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert_node(pos, no) {
        let node = new Node(no);
        this.length = this.length + 1;
        
        if ( this.head === null )
        {
            this.head = node;
            return;
        }
        
        let currentNode = this.head;

        if ( pos === 1 )
        {
            node.next = this.head;
            this.head = node;
            return;
        }

        let prev = this.head;
        for ( let i = 2; i < pos; i++ )
        {
            prev = prev.next;
        }

        let secondPointer = prev.next;

        prev.next = node;
        node.next = secondPointer;
        return;
    }
    
    delete_node(pos) {
        
        if ( pos === 1 )
        {
            this.head = this.head.next;
            return;
        }
        
        let currentPosition = 2;
        let currentNode = this.head;
        while ( currentPosition < pos )
        {
            currentNode = currentNode.next;
        }

    }

    print_ll() {

    }
}