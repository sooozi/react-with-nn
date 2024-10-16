import React, { useState } from 'react';
import TeleBox01 from "../component/TeleBox01";

const RepeatPracticePage = () => {
    const [toDoInput, setToDoInput] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const changeInputValue = (event) => {
        setToDoInput(event.target.value); // input의 값을 state에 저장
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setToDoList(preList => [...preList, toDoInput]);
            setToDoInput('');
        }
    }
    
    return (
        <div className="rp-page-container">
            <section className="day-section day02">
                <h2>Day 2</h2>
            </section>
            <section className="day-section day01">
                <h2>Day 1</h2>
                <div className="mission-content mission-01 tele-box-mission">
                    <h3>텔레토비 박스</h3>
                    {/* 1. 컴포넌트를 만든다. */}
                    {/* 2. 컴포넌트를 활용해 텔레토비 박스들을 만든다. */}
                    <div className='tele-box-wrap'>
                        <TeleBox01 name="보라돌이" color="보라색" border="purple"></TeleBox01>
                        <TeleBox01 name="뚜비" color="초록색" border="green"></TeleBox01>
                        <TeleBox01 name="나나" color="노란색" border="yellow"></TeleBox01>
                        <TeleBox01 name="뽀" color="빨간색" border="red"></TeleBox01>
                    </div>
                </div>
                <div className="mission-content mission-02">
                    <h3>간단 투두리스트</h3>
                    {/* 1. input, list가 들어갈 자리를 만든다. */}
                    {/* 2. input의 value를 콘솔로 찍히도록 만든다. */}
                    {/* 3. value를 ul 안에 li로 넣어 노출하도록 한다. */}

                    {/* 알게된점 : useState 사용, 인풋 값이 보이려면 무조건 온체인지, 엔터 누르면 리스트 나오게 할 때 배열에 넣고 추가해주기!*/}
                    <div className='toDo-content-wrap'>
                        <input type="text" value={toDoInput} onChange={changeInputValue} onKeyDown={handleKeyDown}/>
                        <ul className="list-wrap">
                            {toDoList.map((item, index) => (
                                <li key={index}>{item}</li> // 리스트 아이템 렌더링
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RepeatPracticePage
