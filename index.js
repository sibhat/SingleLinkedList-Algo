class Node{
    constructor(val){
        this.val = val;
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        let node = this.head;
        // loop until the node before the tail
        while(node.next.next){
            // assign next pointer to null; make it new tail
             node = node.next;
        }
        let removeNode = node.next;
        node.next = null;
        this.tail = node;
        // decrease length
        this.length --;
        // return the last node
        return removeNode;
    }
    set(index, val){
        if(index > this.length || index < 0) return false;
        let node = this.get(index);
        node.val = val;
        return true;
    }
    get(targetIdx){
        if(targetIdx > this.length || targetIdx < 0) return false;
        let node = this.head;
        let idx = 0;
        // loop over list
        while(idx < this.length){
            // check for index
            if(idx === targetIdx) {
                return node;
            }
            node = node.next;
            idx ++;
        }
        return  null;
    }
    insert(targetIdx, val){
        if(targetIdx < 0 || targetIdx > this.length) return false;
        if(this.length === 0){
            this.push(val);
            return true; 
        }
        let newNode = new Node(val);
        if(this.length === targetIdx){
            this.tail.next = newNode;
            this.tail = newNode;
            this.length ++;
            return true;
        }
        let node = this.head;
        let idx = 0;
        // loop over list
        while(idx < this.length){
            // check for index
            if(idx === targetIdx - 1) {
                newNode.next = node.next;
                node.next = newNode;
                this.length ++;
                return true;
            }
            node = node.next;
            idx ++;
        }
        return  false;
    }
    rotate(val){
        let node = this.head;
        let kthNode, lastNode;
        let round = val % this.length;
        if(round < 0){
            round = val % this.length + this.length;
        }
        if(round === 0) return;
        
        let idx = 1;
        while(node){
            if(idx === round){
                kthNode = node;
            }
            if(idx === this.length){
                lastNode = node;
            }
            node = node.next;
            idx ++;
        }
        lastNode.next = this.head;
        this.head =  kthNode.next;
        kthNode.next = null;
        this.tail = kthNode;
    }
}
