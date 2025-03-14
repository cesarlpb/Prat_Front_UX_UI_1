const expect = (val) => {
    return {
        toBe: (otherVal) => {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe:(otherVal) => {
            if (val === otherVal) {
                throw new Error("Equal");
            }
            return true;
        }
    };
};