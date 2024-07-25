import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice/counterSlice'
const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151]">

            <h1 className=" text-[#0398d4] text-2xl font-medium capitalize">Increment & Decrement</h1>

            {/* counter button */}
            <div className="flex gap-12 rounded-sm  flex-row font-bold text-[25px] text=[#344151] bg-white justify-center py-3">

                <button
                    onClick={() => { dispatch(decrement()) }}
                    className="border-r-2 border-[#bfbfbf] text-center w-20  text-5xl"
                >
                    -
                </button>

                <div className="font-bold text-5xl gap-12">
                    {count}
                </div>

                <button
                    onClick={() => { dispatch(increment()) }}
                    className="border-l-2 border-[#bfbfbf] text-center w-20  text-5xl"
                >
                    +
                </button>

            </div>

            {/* reset button */}

            <button
                onClick={() => { dispatch(reset()) }}
                className="bg-[#0398d4] text-white px-4 py-2 rounded-sm"
            >
                Reset
            </button>
        </div>
    )
}

export default Counter
