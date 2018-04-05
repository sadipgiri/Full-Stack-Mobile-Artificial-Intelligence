#!/usr/bin/env python3

"""
    Python3 program - Implementation of Binary Search Tree
    Created: Sadip Giri (sadipgiri@bennington.edu)
    Date: 27th March, 2018
"""

class BinaryTree():

    def __init__(self,parent):
      self.left = None
      self.right = None
      self.parent = parent

    def getLeftChild(self):
        return self.left

    def getRightChild(self):
        return self.right

    def setNodeValue(self,value):
        self.parent = value

    def getNodeValue(self):
        return self.parent

    def insertRight(self,newNode):
        if self.right == None:
            self.right = BinaryTree(newNode)
        else:
            tree = BinaryTree(newNode)
            tree.right = self.right
            self.right = tree

    def insertLeft(self,newNode):
        if self.left == None:
            self.left = BinaryTree(newNode)
        else:
            tree = BinaryTree(newNode)
            tree.left = self.left
            self.left = tree

def printTree(tree):
        if tree != None:
            printTree(tree.getLeftChild())
            print(tree.getNodeValue())
            printTree(tree.getRightChild())
    
    
if __name__ == '__main__':
    tree = BinaryTree("Sadip")
    tree.insertLeft("A")
    tree.insertRight("B")
    printTree(tree)
