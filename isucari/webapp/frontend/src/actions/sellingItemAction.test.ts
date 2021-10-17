import * as sellingItemAction from "./sellingItemAction"
// @ponicode
describe("sellingItemAction.listItemAction", () => {
    test("0", () => {
        let callFunction: any = () => {
            sellingItemAction.listItemAction("George", "This is group1", 12345, 56784, { size: 32, type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            sellingItemAction.listItemAction("Pierre Edouard", "(no description available)", 12345, 987650, { size: 32, type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            sellingItemAction.listItemAction("Michael", "This is group1", "bc23a9d531064583ace8f67dad60f6bb", "a1969970175", { size: 32, type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            sellingItemAction.listItemAction("Edmond", "Description: ", 987650, "bc23a9d531064583ace8f67dad60f6bb", { size: 256, type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            sellingItemAction.listItemAction("George", "Print Base", 12345, 987650, { size: 0, type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            sellingItemAction.listItemAction("", "", -Infinity, -Infinity, { size: -Infinity, type: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("sellingItemAction.sellingSuccessAction", () => {
    test("0", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingSuccessAction(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingSuccessAction(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingSuccessAction(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingSuccessAction(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingSuccessAction("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingSuccessAction(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("sellingItemAction.sellingFailAction", () => {
    test("0", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingFailAction({ error: "Message box: foo; bar\n", buyFormError: { cardError: "missing encoding", buyError: "done" }, itemEditFormError: "Secured" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingFailAction({ error: "error\n", buyFormError: { cardError: "unexpected error", buyError: "processing" }, itemEditFormError: "Customizable" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingFailAction({ error: "ValueError", buyFormError: { cardError: "Sorry, The video you are looking for does not exist.", buyError: "canceled" }, itemEditFormError: "Synchronised" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingFailAction({ error: "error\n", buyFormError: { cardError: "Invalid [%s] value. %s", buyError: "pending" }, itemEditFormError: "Customizable" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingFailAction({ error: "Message box: foo; bar\n", buyFormError: { cardError: "Internal Server Error\n", buyError: "processing" }, itemEditFormError: "User-centric" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            sellingItemAction.sellingFailAction({ error: "", buyFormError: { cardError: "", buyError: "" }, itemEditFormError: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
