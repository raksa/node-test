class A {
    static name() {
        throw new Error('name must be implemented');
    }
    static toString() {
        return this.name();
    }
    static fromThis(){
        return new this;
    }
}
class B extends A {
    static name() {
        return 'B';
    }
}
class C extends A {
    static name() {
        return 'C';
    }
}
console.log(B.fromThis());
console.log(C.fromThis());