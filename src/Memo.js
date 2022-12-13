import React, { useMemo, useState } from 'react'
const Memo = () => {
    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(true);

    const getValue = () => {
        return setMyNum(myNum + 1)
    }

    const countNumber = (num) => {
        console.log('num', num);
        for (let i = 0; i <= 100000; i++) {
            return num
        }
    }

    const checkData = useMemo(() => {
        return countNumber(myNum)
    }, [myNum])

    return (
        <>
            <button onClick={getValue} style={{ backgroundColor: "red" }}>
                Counter
            </button>
            <p> My new number : {checkData}</p>
            <button onClick={() => setShow(!show)}>
                {show ? "you clicked me" : "click me please"}
            </button>
        </>
    )
}

export default Memo