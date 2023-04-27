import assert, { equal } from "assert";
import sinon from "sinon";
const sandbox = sinon.createSandbox();

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Sinon spy on function", () => {
  it("should call logMessage", () => {
    function myFunc() {
      return 1;
    }
    var myFuncSpy = sinon.spy(myFunc);
    myFuncSpy();
    myFuncSpy(2);
    sandbox.assert.calledTwice(myFuncSpy);
    sandbox.assert.neverCalledWith(myFuncSpy, 1);
  });

  it("should call with callback,(spy on a callback)", () => {
    function alert(message, callback) {
      callback(message);
    }
    const mySpy = sinon.spy();
    alert("Hello", mySpy);
    sandbox.assert.calledOnce(mySpy);
    sandbox.assert.calledWith(mySpy, "Hello");
    sandbox.assert.calledWithExactly(mySpy, "Hello");
    sandbox.assert.calledWithExactly(mySpy, "Hello");
  });

  it("should spy on other function", () => {
    const wishlist = {
      addItem: (item) => item,
      removeItem: (item) => item,
    };
    const addItemSpy = sinon.spy(wishlist, "addItem");
    const removeItemSpy = sinon.spy(wishlist, "removeItem");
    wishlist.addItem("item1");
    wishlist.removeItem("item2");
    sandbox.assert.calledOnce(addItemSpy);
    sandbox.assert.calledOnce(removeItemSpy);
    sandbox.assert.calledOnceWithExactly(removeItemSpy, "item2");
  });

  it("should spy on function called inside another  function", () => {
    const myFunc = (callback) => {
      return callback();
    };
    // spy on the callback
    const myCbSpy = sinon.spy();
    myFunc(myCbSpy);
    sandbox.assert.calledOnce(myCbSpy);
    // spy on the parent function
    const parentFuncSpy = sinon.spy(myFunc);
    parentFuncSpy(myCbSpy);
    sandbox.assert.calledOnce(parentFuncSpy);
  });
});
