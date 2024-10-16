import React from 'react';
import TeleBox01 from "../component/TeleBox01";

const RepeatPracticePage = () => {
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

            </div>
        </section>
    </div>
  )
}

export default RepeatPracticePage
