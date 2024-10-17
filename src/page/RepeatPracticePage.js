import React, { useState } from 'react';
import TeleBox01 from "../component/TeleBox01";
import TeleBox02 from "../component/TeleBox02";

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
                <div className="mission-content mission-01 tele-box-mission">
                    <h3>텔레토비 박스</h3>
                    {/* 1. 박스 컴포넌트를 만들고 props로 이름, 컬러명을 넣고 보더 컬러도 넣을 수 있게 한다. */}
                    <div className='tele-box-wrap'>
                        <TeleBox02 name="보라돌이" color="보라색" border="purple"></TeleBox02>
                        <TeleBox02 name="뚜비" color="초록색" border="green"></TeleBox02>
                        <TeleBox02 name="나나" color="노란색" border="yellow"></TeleBox02>
                        <TeleBox02 name="뽀" color="빨강색" border="red"></TeleBox02>
                    </div>
                </div>
                <div className="mission-content mission-02">
                    <h3>간단 투두리스트</h3>
                    {/* 1. 레이아웃 만들기(인풋, ul) */}
                    {/* 2. 인풋 : value 값 노출, enter 이벤트 => useState */}
                    {/* 3. 투두리스트 저장할 배열 useState 저장 */}
                    {/* 4. 인풋 엔터 클릭 시 저장된 value를 배열에 넣고 새로운 배열로 map해서 li로 노출하기 */}
                    {/* 5. 엔터 클릭 시 인풋 value 초기화 */}
                    <div className='toDo-content-wrap'>
                        <input type="text" />
                        <ul className="list-wrap">

                        </ul>
                    </div>
                </div>
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
